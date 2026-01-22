import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { graphqlUploadExpress } from "graphql-upload-ts";
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set("trust proxy", 1);

  app.use(
    graphqlUploadExpress({
      maxFileSize: 20 * 1024 * 1024, // 10MB
      maxFiles: 5,
    }),
  );

  app.enableCors({
    origin: [
      "https://twoguys-brown.vercel.app",
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:5008",
      "http://192.168.1.18:5008",
      "https://twoguys-frontend.vercel.app",
    ],
    credentials: true,
    allowedHeaders: ["authorization", "Content-Type"],
  });
  await app.listen(process.env.PORT ?? 5001, () => console.log("Server is working on "));
}
bootstrap();
