import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class General {

  @Field(() => ID)
  id: number;

  @Field(() => Int)
  starRating: number;

  @Field(() => String,)
  name: string;

  @Field(() => String)
  ReviewsDescription: string;
  
  @Field(() => String,{nullable:true})
  reviewDate?: string;
  
  @Field(() => GraphQLJSON)
  posterImageUrl: any;


  @Field(() => Date,{nullable:true})
  createdAt?: Date;

  @Field(() => Date,{nullable:true})
  updatedAt?: Date;
  



}



@ObjectType()
export class SocialLinks {
  @Field(() => String)
  post_links: string;
  @Field(() => GraphQLJSON)
  posterImageUrl: any;
}



@ObjectType()
export class Appointments {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  phoneNumber: string;

  @Field(() => String)
  email: string;

  @Field(() => String,)
  name: string;

  @Field()
  location: string;

  @Field(()=>Int,{nullable:true})
  whatsApp?: number;


  @Field(()=>[GraphQLJSON],{nullable:true})
  subCategories?: any;



}
