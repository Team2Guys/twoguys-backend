import { Injectable } from '@nestjs/common';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { PrismaService } from 'prisma/prisma.service';
import { customHttpException } from 'utils/helper';

@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) { }
  async create(createBlogInput: CreateBlogInput) {
    try {
      return await this.prisma.blogs.create({ data: createBlogInput })
    } catch (error) {
      customHttpException(error)
    }
  }

  async findAll() {
    try {
      return await this.prisma.blogs.findMany()
    } catch (error) {
      customHttpException(error)
    }

  }

  async findOne(customUrls: string) {
    try {
      return await this.prisma.blogs.findFirst({ where: { OR: [{ title: customUrls }, { custom_url: customUrls }] } })
    } catch (error) {
      customHttpException(error)
    }

  }

  async update(updateBlogInput: UpdateBlogInput) {
    try {
      const { id, ...withoutid } = updateBlogInput
      const publishFlag = updateBlogInput.status =="PUBLISHED";
      return await this.prisma.blogs.update({ where: { id }, data: { ...withoutid, updatedAt: new Date(),
    ...(publishFlag ? { publishedAt: new Date() } : {}),

        } })
    } catch (error) {
      customHttpException(error)
    }

  }

  
  async remove(id: number) {
    try {
      return await this.prisma.blogs.delete({ where: { id } })

    } catch (error) {
      customHttpException(error)
    }

  }
}
