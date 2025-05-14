import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { PrismaService } from '../prisma/prisma.service';
import { customHttpException } from '../utils/helper';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) { }
  async create(createCategoryInput: CreateCategoryInput) {
    try {

      const { name } = createCategoryInput;

      let AlreadyExistedProduct = await this.prisma.categories.findUnique({ where: { name } })

      if (AlreadyExistedProduct) return customHttpException("Category Already Exist", 'BAD_REQUEST');

      let response = await this.prisma.categories.create({
        data: { ...createCategoryInput, last_editedBy: "Admin" }
      });
      return response;
    } catch (error) {
      console.error('Error fetching products:', error.message);
      throw {
        status: error.status || 400,
        message: `Error fetchin: ${error.message}`,
        stack: error.stack,
      };
    }
  }

  async findAll() {
    try {
      let categories =  await this.prisma.categories.findMany({include:{subCategories:{include:{InnersubCategories:true}}, products:true}});
      console.log(categories[2], )
      return categories
    } catch (error) {
      console.log(error, "error")
      customHttpException(error, 'INTERNAL_SERVER_ERROR');
    }
  }

  async findOne(customUrl: string) {
    try {
      return await this.prisma.categories.findFirst({ where: { custom_url: customUrl }, include:{subCategories:{include:{products:true,InnersubCategories:true, EcomereceProducts:true}}} });
    } catch (error) {
      customHttpException(error, 'INTERNAL_SERVER_ERROR');
    }
  }

  async withAcessory(customUrl: string, accessoryFlag?: boolean) {
    try {
      let flag = accessoryFlag ? true : false;
      return await this.prisma.categories.findFirst({ where: { custom_url: customUrl }, });
    } catch (error) {
      customHttpException(error, 'INTERNAL_SERVER_ERROR');
    }
  }

  async update(id: number, updateCategoryInput: UpdateCategoryInput) {
    try {
      const email = "Admin";
      let updateDate = new Date();

      let category = await this.prisma.categories.findUnique({ where: { id: id } })


      if (!category) return customHttpException("Category not found", "NOT_FOUND")
        console.log(updateCategoryInput.explore_Heading, "create Input")

      const updatedCategory = await this.prisma.categories.update({
        where: { id: id },
        data: { ...updateCategoryInput, last_editedBy: email, updatedAt: updateDate },
      });
      return updatedCategory
    } catch (error) {
      return customHttpException(`${error.message || JSON.stringify(error)}`, 'INTERNAL_SERVER_ERROR');

    }

  }


  async remove(id: number) {
    try {
      console.log(id, "id", typeof (id))

      const category = await this.prisma.categories.findUnique({
        where: { id: id },
      });

      if (!category) {
        return customHttpException("Category not found", 'NOT_FOUND');
      }

      let response = await this.prisma.categories.delete({
        where: { id: id },
      });

      console.log(response, "response");
      return response;

    } catch (error) {
      return customHttpException(`${error.message || JSON.stringify(error)}`, 'INTERNAL_SERVER_ERROR');
    }
  }


}
