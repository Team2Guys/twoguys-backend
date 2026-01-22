import { InputType, Int, Field } from "@nestjs/graphql";
import { BlogStatus, CommentStatus } from "../../general/dto/enums/enum";
import GraphQLJSON from "graphql-type-json";

@InputType()
export class CreateBlogInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  custom_url: string;

  @Field()
  category: string;

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

@InputType()
export class CreateCommentDto {
  @Field()
  name: string;

  @Field()
  Email: string;

  @Field()
  phone: string;

  @Field()
  description: string;

  @Field(() => [String], { nullable: true })
  replies?: string[];

  @Field(() => Int)
  blogId: number;

  @Field(() => CommentStatus)
  status: CommentStatus;

  @Field({ nullable: true })
  last_editedBy?: string;
}
@InputType()
export class CreateReply {
  @Field()
  name: string;

  @Field()
  Email: string;

  @Field()
  phone: string;

  @Field()
  description: string;

  @Field()
  commentId: number;

  @Field(() => CommentStatus)
  status: CommentStatus;
}

@InputType()
export class UpdateStatus {
  @Field(() => Int)
  id: number;

  @Field(() => CommentStatus)
  status: CommentStatus;
}

@InputType()
export class updateReplystatus {
  @Field()
  id: string;

  @Field(() => CommentStatus)
  status: CommentStatus;

  @Field()
  commentId: number;
}
