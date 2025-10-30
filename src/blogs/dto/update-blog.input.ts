import { CreateBlogInput, CreateCommentDto } from "./create-blog.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateBlogInput extends PartialType(CreateBlogInput) {
  @Field(() => Int)
  id: number;
}

@InputType()
export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  @Field(() => Int)
  id: number;
}
