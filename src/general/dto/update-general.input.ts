import { CreateGeneralInput } from './create-general.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGeneralInput extends PartialType(CreateGeneralInput) {
  @Field(() => String)
  id: string;
}
