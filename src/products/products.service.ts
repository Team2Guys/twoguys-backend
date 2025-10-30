import { Injectable } from "@nestjs/common";
import { CreateProductInput } from "./dto/create-product.input";
import { UpdateProductInput } from "./dto/update-product.input";
import { PrismaService } from "../prisma/prisma.service";
import { customHttpException } from "../utils/helper";

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async create(createProductInput: CreateProductInput) {
    try {
      const { category, subcategory, Innersubcategory, ...updatedData } = createProductInput;
      if (!category || !subcategory)
        return customHttpException("Category or sub category not found", "NOT_FOUND");

      const dataToUpdate: any = {
        ...updatedData,
        categoryId: Number(category),
        subCategoryId: Number(subcategory),
      };

      if (Innersubcategory) {
        dataToUpdate.innersubCategoryId = Number(Innersubcategory);
      }

      return await this.prisma.products.create({
        data: dataToUpdate,
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.products.findMany({
        include: { category: true, subcategory: true },
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async findOne(custom_url: string, category: string, subCategory: string) {
    try {
      return await this.prisma.products.findFirst({
        where: {
          custom_url,
          category: { custom_url: category },
          subcategory: { custom_url: subCategory },
        },
        include: { subcategory: true, category: true },
      });
    } catch (error) {
      return customHttpException(error);
    }
  }

  async update(updateProductInput: UpdateProductInput) {
    try {
      let updatedAt = new Date();
      const { category, subcategory, Innersubcategory, id, ...updatedData } = updateProductInput;
      if (!category || !subcategory)
        return customHttpException("Category or sub category not found", "NOT_FOUND");
      const dataToUpdate: any = {
        ...updatedData,
        updatedAt,
        categoryId: Number(category),
        subCategoryId: Number(subcategory),
      };

      if (Innersubcategory) {
        dataToUpdate.innersubCategoryId = Number(Innersubcategory);
      }

      return await this.prisma.products.update({
        where: { id },
        data: dataToUpdate,
      });
    } catch (error) {
      console.log(error, "error");
      return customHttpException(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.products.delete({ where: { id } });
    } catch (error) {
      return customHttpException(error);
    }
  }
}
