import { CreateInnerSubcategoryInput, CreateSubcategoryInput } from "./create-subcategory.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateSubcategoryInput extends PartialType(CreateSubcategoryInput) {
  @Field(() => Int)
  id: number;
}
@InputType()
export class UpdateInnerSubcategoryInput extends PartialType(CreateInnerSubcategoryInput) {
  @Field(() => Int)
  id: number;
}
