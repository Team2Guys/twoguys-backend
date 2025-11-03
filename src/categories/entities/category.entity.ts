import { Field, Int, ObjectType } from "@nestjs/graphql";
import { CategoryBase } from "../CategoryBase";
import { eComereceProducts } from "e-comerece/entities/e-comerece.entity";

@ObjectType()
export class Category extends CategoryBase {
  @Field()
  id: number;
  @Field({ nullable: true })
  updatedAt?: Date;
  @Field({ nullable: true })
  createdAt?: Date;
}
