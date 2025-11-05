import { Injectable } from "@nestjs/common";
import {
  CreateInnerSubcategoryInput,
  CreateSubcategoryInput,
} from "./dto/create-subcategory.input";
import {
  UpdateInnerSubcategoryInput,
  UpdateSubcategoryInput,
} from "./dto/update-subcategory.input";
import { customHttpException } from "../utils/helper";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SubcategoriesService {
  constructor(private prisma: PrismaService) {}
  async create(createSubcategoryInput: CreateSubcategoryInput) {
    const { category, ...updateData } = createSubcategoryInput;

    try {
      return await this.prisma.subCategories.create({
        data: {
          ...updateData,
          ...(category !== undefined
            ? { category: { connect: { id: Number(category) } } }
            : category
              ? { category }
              : undefined),
        },
      });
    } catch (error) {
      return customHttpException(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.subCategories.findMany({
        include: {
          category: {
            select: { id: true, name: true, custom_url: true },
          },
          products: true,
          EcomereceProducts: true,
          InnersubCategories: { include: { products: true } },
        },
      });
    } catch (error) {
      return customHttpException(error);
    }
  }

  async findOne(custom_url: string, category: string) {
    try {
      let subcategory = await this.prisma.subCategories.findFirst({
        where: { custom_url, category: { custom_url: category } },
        include: {
          category: true,
          products: true,
          EcomereceProducts: {
            include: { category: true, subcategory: true, Innersubcategory: true },
          },
          InnersubCategories: { include: { products: true } },
        },
      });
      if (!subcategory) return customHttpException("Category Not found ", "NOT_FOUND");
      return subcategory;
    } catch (error) {
      return customHttpException(error);
    }
  }

  async update(updateSubcategoryInput: UpdateSubcategoryInput) {
    try {
      let updatedAt = new Date();

      const { category, id, ...updateData } = updateSubcategoryInput;
      if (!category) return customHttpException("Select a Category", "NOT_FOUND");

      const categoryExists = await this.prisma.categories.findUnique({
        where: { id: Number(category) },
      });

      if (!categoryExists) {
        return customHttpException("Selected Category does not exist", "NOT_FOUND");
      }
      return await this.prisma.subCategories.update({
        where: { id: updateSubcategoryInput.id },
        data: {
          ...updateData,
          categoryId: Number(category),
          updatedAt,
        },
      });
    } catch (error) {
      return customHttpException(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.subCategories.delete({ where: { id } });
    } catch (error) {
      return customHttpException(error);
    }
  }

  async metaHandler(custom_url: string) {
    try {
      let category = await this.prisma.subCategories.findFirst({
        where: { custom_url },
        select: {
          Meta_Description: true,
          Meta_Title: true,
          Canonical_Tag: true,
          posterImageUrl: true,
        },
      });
      if (!category) return customHttpException("Category Not found ", "NOT_FOUND");
      return category;
    } catch (error) {
      return customHttpException(error);
    }
  }

  // ineersubCategories

  async InnerSubcreate(CreateInnerSubcategoryInput: CreateInnerSubcategoryInput) {
    const { subCategoryId, ...updateData } = CreateInnerSubcategoryInput;

    try {
      return await this.prisma.innersubCategories.create({
        data: {
          subCategoryId: Number(subCategoryId),

          ...updateData,
        },
      });
    } catch (error) {
      return customHttpException(error);
    }
  }

  async InnerSubupdate(UpdateInnerSubcategoryInput: UpdateInnerSubcategoryInput) {
    try {
      let updatedAt = new Date();

      const { subCategoryId, id, ...updateData } = UpdateInnerSubcategoryInput;
      if (!subCategoryId) return customHttpException("Select a Category", "NOT_FOUND");

      const categoryExists = await this.prisma.subCategories.findUnique({
        where: { id: Number(subCategoryId) },
      });

      if (!categoryExists) {
        return customHttpException("Selected Category does not exist", "NOT_FOUND");
      }
      return await this.prisma.innersubCategories.update({
        where: { id },
        data: {
          ...updateData,
          subCategoryId: Number(subCategoryId),
          updatedAt,
        },
      });
    } catch (error) {
      return customHttpException(error);
    }
  }

  async InnerSubfindAll() {
    try {
      let inner_sub = await this.prisma.innersubCategories.findMany({
        include: {
          subCategory: true,
        },
      });

      return inner_sub;
    } catch (error) {
      return customHttpException(error);
    }
  }

  async InnerSubremove(id: number) {
    try {
      return await this.prisma.innersubCategories.delete({ where: { id } });
    } catch (error) {
      return customHttpException(error);
    }
  }
}
