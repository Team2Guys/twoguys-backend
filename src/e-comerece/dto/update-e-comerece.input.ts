import { CreateEComereceInput } from "./create-e-comerece.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateEComereceInput extends PartialType(CreateEComereceInput) {
  @Field(() => Int)
  id: number;
}
