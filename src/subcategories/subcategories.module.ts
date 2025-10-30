import { Module } from "@nestjs/common";
import { SubcategoriesService } from "./subcategories.service";
import { SubcategoriesResolver } from "./subcategories.resolver";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  providers: [SubcategoriesResolver, SubcategoriesService],
  imports: [PrismaModule],
})
export class SubcategoriesModule {}
