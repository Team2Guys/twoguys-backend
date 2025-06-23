import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CategoriesModule } from './categories/categories.module';
import { PrismaService } from './prisma/prisma.service';
import { FileUploadingModule } from './file_uploading/file_uploading.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { ProductsModule } from './products/products.module';
import { GeneralModule } from './general/general.module';
import { EComereceModule } from './e-comerece/e-comerece.module';
import { AdminsModule } from './admins/admins.module';
import { BlogsModule } from './blogs/blogs.module';
import { SalesProductsModule } from './sales-products/sales-products.module';
import { UserModule } from './user/user.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
     ThrottlerModule.forRoot({
     throttlers: [
        {
          ttl: 60,
          limit: 10,
        },
      ],
    })
    
    ,
  GraphQLModule.forRoot<ApolloDriverConfig>({
      path: 'backend/graphql',

    driver:ApolloDriver,
    autoSchemaFile:true,
    csrfPrevention:false,
    playground:true,
    context: ({ req, res }) => ({ req, res }),
  }),
  CategoriesModule,
  FileUploadingModule,
  SubcategoriesModule,
  ProductsModule,
  GeneralModule,
  EComereceModule,
  AdminsModule,
  BlogsModule,
  SalesProductsModule,
  UserModule
  ],
  providers:[PrismaService]
})
export class AppModule {}




