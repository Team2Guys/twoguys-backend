import { InputType, Int, Field } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts';

@InputType()
export class CreateFileUploadingInput {
    @Field(() => GraphQLUpload)
    image: FileUpload;
}
