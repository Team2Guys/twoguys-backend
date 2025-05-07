import { CreateGeneralInput, CreateGeneralsocial } from './create-general.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

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
