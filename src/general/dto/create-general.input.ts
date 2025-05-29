import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { CommentStatus } from './enums/enum';

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
  
  @Field(() => GraphQLJSON,{nullable:true})
  posterImageUrl?: any;
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

  @Field(() => String,)
  message: string;

  @Field()
  location: string;

  @Field(()=>String,{nullable:true})
  whatsApp?: string;


  @Field(()=>[GraphQLJSON],{nullable:true})
  subCategories?: any;

  


}

@InputType()
export class CreatedRedirecturls {

  @Field(() => String)
  url: string;

  @Field(() => String)
  redirectedUrl: string;


  


}


@InputType()
export class productReviewInput {
  @Field(() => Int)
  starRating: number;
  
  @Field(() => Int)
  product: number;

  @Field(() => String,)
  name: string;

  @Field(() => String)
  ReviewsDescription: string;
  
  @Field(() => String,{nullable:true})
  reviewDate?: string;
  
  @Field(() => GraphQLJSON,{nullable:true})
  posterImageUrl?: any;

  @Field(() => [GraphQLJSON],{nullable:true})
  productsImage?: any;


  @Field(() => CommentStatus, { nullable: true })
  status?: CommentStatus


}


@InputType()
export class productQuestionInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  question: string;

  @Field(() => Int, { nullable: true })
  productId?: number;

  @Field(() => CommentStatus, { nullable: true })
  status?: CommentStatus;

  @Field(() => [GraphQLJSON], { nullable: true })
  replies?: any;

    @Field(() => Int)
  product: number;

}