import {
  CreatedRedirecturls,
  CreateGeneralInput,
  CreateGeneralsocial,
  CreateJobApplicationDto,
  CreateJobDto,
  productQuestionInput,
  productReviewInput,
} from "./create-general.input";
import { InputType, Field, PartialType, Int } from "@nestjs/graphql";
import { CommentStatus } from "./enums/enum";
import GraphQLJSON from "graphql-type-json";

@InputType()
export class UpdateGeneralInput extends PartialType(CreateGeneralInput) {
  @Field(() => String)
  id: string;
}

@InputType()
export class UpdateGeneralsocial extends PartialType(CreateGeneralsocial) {
  @Field(() => Int)
  id: number;
}

@InputType()
export class UpdateRedirecturls extends PartialType(CreatedRedirecturls) {
  @Field(() => Int)
  id: number;
}
@InputType()
export class UpdateproductReviewInput {
  @Field(() => Int)
  id: number;

  @Field(() => CommentStatus, { nullable: true })
  status?: CommentStatus;
}

@InputType()
export class UpdateproductQuestionInput {
  @Field(() => Int)
  id: number;

  @Field(() => CommentStatus, { nullable: true })
  status?: CommentStatus;

  @Field(() => [GraphQLJSON], { nullable: true })
  replies?: any[];
}

@InputType()
export class UpdateCreateJobDto extends PartialType(CreateJobDto) {
  @Field(() => Int)
  id: number;
}

@InputType()
export class UpdateCreateJobApplicationDto extends PartialType(CreateJobApplicationDto) {
  @Field(() => Int)
  id: number;
}
