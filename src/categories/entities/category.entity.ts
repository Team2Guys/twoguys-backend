import { Field, ObjectType } from '@nestjs/graphql';
import { CategoryBase } from '../CategoryBase';

@ObjectType()
export class Category extends CategoryBase {
  @Field()
  id: number;
  @Field({ nullable: true })
  updatedAt?: Date
  @Field({ nullable: true })
  createdAt?: Date
}



