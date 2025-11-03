import { Injectable } from "@nestjs/common";
import { cloudinary, s3 } from "./cloudinar.config";
import { FileUpload } from "graphql-upload-ts";
import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

@Injectable()
export class FileUploadingService {
  async create(file: FileUpload) {
    const resourceType = file.mimetype.startsWith("video/") ? "video" : "image";

    try {
      const { createReadStream, filename } = file;
      const result: any = await new Promise((resolve, reject) => {
        const stream = createReadStream();
        const upload = cloudinary.uploader.upload_stream(
          {
            folder: "uploads",
            resource_type: resourceType,
          },
          (error, result) => {
            if (error) reject(error);
            resolve(result);
          },
        );
        stream.pipe(upload);
      });

      return {
        imageUrl: result.secure_url,
        public_id: result.public_id,
        resource_type: result.resource_type,
      };
    } catch (error) {
      throw new Error("File upload failed: " + error.message);
    }
  }

  async uploadFile(file: FileUpload) {
    const { createReadStream, mimetype } = file;
    const resourceType = file.mimetype.startsWith("video/") ? "video" : "image";

    const stream = createReadStream();
    const fileKey = `${Date.now()}-s3`;

    try {
      const upload = new Upload({
        client: s3,
        params: {
          Bucket: process.env.AWS_S3_BUCKET_NAME!,
          Key: fileKey,
          Body: stream,
          ContentType: mimetype,
        },
      });

      await upload.done();

      const imageUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;
      return { imageUrl, public_id: fileKey, resource_type: resourceType };
    } catch (error: any) {
      console.error("S3 Upload Error:", error);
      throw new Error("S3 upload failed: " + error.message);
    }
  }

  async delete(publicid: string) {
    try {
      let result = await cloudinary.uploader.destroy(publicid);
      return result.result === "ok"; // ✅ Return true if successful
    } catch (error) {
      throw new Error("File upload failed: " + error.message);
    }
  }

  async deleteFile(key: string) {
    try {
      const command = new DeleteObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME!,
        Key: key,
      });

      await s3.send(command);
      return { message: "File deleted successfully" };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
