import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CategoriesModule } from './categories/categories.module';
import { PrismaService } from './prisma/prisma.service';
@Module({
  imports: [
  GraphQLModule.forRoot<ApolloDriverConfig>({
    // autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
    driver:ApolloDriver,
    autoSchemaFile:true,
    csrfPrevention:false,
    playground:true,
    context: ({ req, res }) => ({ req, res }),
  }),
  CategoriesModule,
  ],
  providers:[PrismaService]
})
export class AppModule {}


