import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BlogStatus } from 'general/dto/enums/enum';
import GraphQLJSON from 'graphql-type-json';




@ObjectType()
export class Blog {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;
  @Field()
  custom_url: string;

  @Field()
  category: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

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
