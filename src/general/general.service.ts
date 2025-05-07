import { Injectable } from '@nestjs/common';
import { CreateGeneralInput } from './dto/create-general.input';
import { UpdateGeneralInput } from './dto/update-general.input';
import { PrismaService } from 'prisma/prisma.service';
import { customHttpException } from 'utils/helper';

@Injectable()
export class GeneralService {
  constructor(private prisma: PrismaService) { }
  async create(createGeneralInput: CreateGeneralInput) {
    try {
      return await this.prisma.reviews.create({ data: createGeneralInput })
    } catch (error) {
      customHttpException(error)
    }
  }

  async findAll() {
    try {
      return await this.prisma.reviews.findMany({})
    } catch (error) {
      customHttpException(error)
    }
  }

  async update(updateGeneralInput: UpdateGeneralInput) {
    try {
      let update = new Date();

      const {id, ...updatedData} =updateGeneralInput
      console.log(updatedData, id, "updatedData")
      return await this.prisma.reviews.update({where:{id:Number(id)}, data:{...updatedData, updatedAt:update}})
    } catch (error) {
      customHttpException(error)
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.reviews.delete({where:{id}})
    } catch (error) {
      customHttpException(error)
    }
    return `This action removes a #${id} general`;
  }

  
}
