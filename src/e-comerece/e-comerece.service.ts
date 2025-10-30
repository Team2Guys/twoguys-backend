import { Injectable } from "@nestjs/common";
import { CreateEComereceInput } from "./dto/create-e-comerece.input";
import { UpdateEComereceInput } from "./dto/update-e-comerece.input";
import { PrismaService } from "../prisma/prisma.service";
import { customHttpException } from "../utils/helper";

@Injectable()
export class EComereceService {
  constructor(private prisma: PrismaService) {}
  async create(createEComereceInput: CreateEComereceInput) {
    try {
      const { category, subcategory, Innersubcategory, ...updatedData } = createEComereceInput;
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

      return await this.prisma.ecomereceProducts.create({
        data: dataToUpdate,
      });
    } catch (error) {
      console.log(error, "error");
      customHttpException(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.ecomereceProducts.findMany({
        include: { category: true, subcategory: true },
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async findOne(custom_url: string, category: string, subCategory: string) {
    try {
      return await this.prisma.ecomereceProducts.findFirst({
        where: {
          custom_url,
          category: { custom_url: category },
          subcategory: { custom_url: subCategory },
        },
        include: {
          subcategory: true,
          category: true,
          reviews: true,
          questions: true,
        },
      });
    } catch (error) {
      return customHttpException(error);
    }
  }

  async update(updateProductInput: UpdateEComereceInput) {
    try {
      const { category, subcategory, Innersubcategory, id, ...updatedData } = updateProductInput;
      let updatedAt = new Date();
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

      return await this.prisma.ecomereceProducts.update({
        where: { id },
        data: { ...dataToUpdate, updatedAt },
      });
    } catch (error) {
      console.log(error, "error");
      return customHttpException(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.ecomereceProducts.delete({ where: { id } });
    } catch (error) {
      return customHttpException(error);
    }
  }

  CategorygetPaginatedProducts = async (
    categoryname: string,
    page = 1,
    pageSize = 5,
    subcategory?: string,
  ) => {
    const skip = (page - 1) * pageSize;
    const whereCondition: any = {
      category: { custom_url: categoryname },
      ...(subcategory && {
        subcategory: {
          custom_url: subcategory,
        },
      }),
    };

    console.log(whereCondition, "whereCondition");

    const otherProducts = await this.prisma.ecomereceProducts.findMany({
      where: whereCondition,
      skip: skip,
      take: pageSize,
      include: { subcategory: true, category: true },
    });

    const totalProductsCount = await this.prisma.ecomereceProducts.count({
      where: whereCondition,
    });

    const totalPages = Math.ceil(totalProductsCount / pageSize);
    return {
      products: otherProducts,
      totalPages,
      totalEcomereceProduct: totalProductsCount,
    };
  };
}
