import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { graphqlUploadExpress } from 'graphql-upload-ts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.PORT, "PORTED")
  app.use(graphqlUploadExpress({
    maxFileSize: 20 * 1024 * 1024, // 10MB
    maxFiles: 5,
  }));

  app.enableCors({
    origin: [
      "https://twoguys-brown.vercel.app",
      "http://localhost:3000",
      'http://localhost:3001'
    ],
    credentials: true,
    allowedHeaders: ["Authorization", "Content-Type"],

  })
  app.setGlobalPrefix('backend');
  await app.listen(process.env.PORT ?? 5001);
}
bootstrap();





