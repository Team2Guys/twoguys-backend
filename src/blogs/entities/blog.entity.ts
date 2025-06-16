import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BlogStatus, CommentStatus } from 'general/dto/enums/enum';
import GraphQLJSON from 'graphql-type-json';




@ObjectType()
export class Blog {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;
  @Field()
  custom_url: string;

  @Field()
  category: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => GraphQLJSON, { nullable: true })
  posterImage?: any;

  @Field({ nullable: true })
  last_editedBy?: string;

  @Field({ nullable: true })
  Canonical_Tag?: string;

  @Field({ nullable: true })
  Meta_Description?: string;

  @Field({ nullable: true })
  Meta_Title?: string;

  @Field({ nullable: true })
  redirectionUrl?: string;

  @Field({ nullable: true })
  publishedAt?: Date;

  @Field(() => BlogStatus)
  status: BlogStatus;

  @Field()
  isPublished: boolean;

}




@ObjectType()
export class BlogComment {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  Email: string;

  @Field()
  phone: string;

  @Field()
  description: string;

  @Field()
  createdAt: Date;

  @Field(() => [GraphQLJSON])
  replies: any[];

  @Field(() => Int)
  blogId: number;

  @Field(() => CommentStatus)
  status: CommentStatus;

  @Field({ nullable: true })
  last_editedBy?: string;

  @Field(() => Blog, { nullable: true })
  blog?: Blog;

}