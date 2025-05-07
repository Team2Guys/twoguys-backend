import { InputType, Int, Field } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class CreateGeneralInput {
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
}



@InputType()
export class CreateGeneralsocial {
  @Field(() => String)
  post_links: string;
  @Field(() => GraphQLJSON)
  posterImageUrl: any;
}



@InputType()
export class createAppointments {

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  email: string;


  @Field(() => String,)
  name: string;

  @Field()
  location: string;

  @Field(()=>String,{nullable:true})
  whatsApp?: string;


  @Field(()=>[GraphQLJSON],{nullable:true})
  subCategories?: any;



}
