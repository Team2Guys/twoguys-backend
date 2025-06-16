import { Injectable } from '@nestjs/common';
import { CreateBlogInput, CreateCommentDto, CreateReply, updateReplystatus } from './dto/create-blog.input';
import { UpdateBlogInput, UpdateCommentDto } from './dto/update-blog.input';
import { PrismaService } from 'prisma/prisma.service';
import { customHttpException, getStatusNameByCode } from 'utils/helper';
import { CommentStatus } from 'general/dto/enums/enum';
import { randomUUID } from 'crypto';
import { Prisma } from '../../generated/prisma';

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
      return await this.prisma.blogs.findMany({ include: { comments: true } })
    } catch (error) {
      customHttpException(error)
    }

  }

  async findOne(customUrls: string) {
    try {
      return await this.prisma.blogs.findFirst({ where: { OR: [{ title: customUrls }, { custom_url: customUrls }], }, include: { comments: true } })
    } catch (error) {
      customHttpException(error)
    }

  }

  async update(updateBlogInput: UpdateBlogInput) {
    try {
      const { id, ...withoutid } = updateBlogInput
      const publishFlag = updateBlogInput.status == "PUBLISHED";
      return await this.prisma.blogs.update({
        where: { id }, data: {
          ...withoutid, updatedAt: new Date(),
          ...(publishFlag ? { publishedAt: new Date() } : {}),

        }
      })
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
  // comments


  async addComment(createCommentDto: CreateCommentDto) {
    try {
      const { blogId } = createCommentDto
      if (!blogId) return customHttpException('Blog Id not found', 'NOT_FOUND');
      const blog = await this.prisma.blogs.findUnique({
        where: { id: blogId },
      });

      if (!blog) return customHttpException('Invalid Blog Id', 'NOT_FOUND');

      return await this.prisma.blogs_comments.create({
        data: {
          ...createCommentDto,
          blogId: Number(blogId)
        },
      });

    } catch (error) {
      console.log(error.status, 'error');
      let flag = error.status && error.status;
      return customHttpException(
        error.message,
        flag ? getStatusNameByCode(error.status) : 'BAD_REQUEST',
      );
    }
  }

  async updateComment(createCommentDto: CreateReply) {
    try {
      const { commentId, ...withoutIdcomments } = createCommentDto;
      const existingComment = await this.prisma.blogs_comments.findUnique({
        where: { id: commentId },
        select: { replies: true },
      });

      if (!existingComment) {
        return customHttpException('Blog Not found', 'NOT_FOUND');
      }

      const previousReplies: Prisma.InputJsonValue[] = (existingComment.replies ?? []).filter((reply) => reply !== null);

      const newReply: Prisma.InputJsonValue = {
        id: randomUUID(),
        name: withoutIdcomments.name,
        Email: withoutIdcomments.Email,
        phone: withoutIdcomments.phone,
        description: withoutIdcomments.description,
        createdAt: new Date(),
        status: withoutIdcomments.status
      };

      const updatedReplies: Prisma.InputJsonValue[] = [...previousReplies, newReply];

      return await this.prisma.blogs_comments.update({
        where: { id: commentId },
        data: {
          replies: updatedReplies,
        },
      });

    } catch (error) {
      console.log(error.status, 'error');
      let flag = error.status && error.status;
      return customHttpException(
        error.message,
        flag ? getStatusNameByCode(error.status) : 'BAD_REQUEST',
      );
    }
  }

  async updateStatus(id: number, status: string) {
    try {


      if (!Object.values(CommentStatus).includes(status as CommentStatus)) {
        throw new Error(
          `Invalid status: ${status}. Valid statuses are ${Object.values(CommentStatus).join(', ')}`,
        );
      }

      const existingBlog = await this.prisma.blogs_comments.findUnique({
        where: { id },
      });
      if (!existingBlog) {
        throw customHttpException('Comment not found', "NOT_FOUND");
      }
      return await this.prisma.blogs_comments.update({
        where: { id },
        data: { status: status as CommentStatus, },
      });


    } catch (error) {
      console.error(error);
      return customHttpException(error.message, 'BAD_REQUEST');
    }
  }

  async updatereplyStatus(updateReplystatus: updateReplystatus) {
    try {
      const { commentId, id, status } = updateReplystatus;
      const withoutIdcomments = await this.prisma.blogs_comments.findUnique({
        where: { id: commentId },
        select: { replies: true },
      });

      if (!withoutIdcomments) {
        return customHttpException('Blog Not found', 'NOT_FOUND');
      }

      const previousReplies = (withoutIdcomments.replies ?? []).filter((reply) => reply !== null);


      console.log(previousReplies, "preivous")
      let replyobject = previousReplies.find((value: any) => value.id == updateReplystatus.id)

      if (!replyobject) return customHttpException('Object Not found', 'NOT_FOUND');
      const updatedReplies: Prisma.InputJsonValue[] = previousReplies.map((reply: any) => {
        if (reply.id === id) {
          return {
            ...reply,
            status: status,
          };
        }
        return reply;
      });


      return await this.prisma.blogs_comments.update({
        where: { id: commentId },
        data: {
          replies: updatedReplies,
        },
      });

    } catch (error) {
      console.log(error.status, 'error');
      let flag = error.status && error.status;
      return customHttpException(
        error.message,
        flag ? getStatusNameByCode(error.status) : 'BAD_REQUEST',
      );
    }
  }



  async Allcoments() {
    try {
      let comoments =  await this.prisma.blogs_comments.findMany({ include: { blog: true } })
      console.log(comoments, "comoments")
      return comoments
    } catch (error) {
      customHttpException(error)
    }

  }





}
