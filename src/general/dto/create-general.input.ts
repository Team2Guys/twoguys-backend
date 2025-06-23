import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { BlogStatus, CommentStatus } from './enums/enum';

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



// jobs 

@InputType()
export class CreateJobDto {
  @Field()
  title: string;

  @Field()
  custom_url: string;

  @Field()
  location: string;

  @Field()
  jobType: string;

  @Field()
  salary: string;

  @Field({ defaultValue: false })
  isFilled?: boolean;

  @Field()
  description: string;

  @Field(() => [GraphQLJSON], { defaultValue: [] })
  responsibilities: any[];

  @Field(() => [GraphQLJSON], { defaultValue: [] })
  requirements: any[];

  @Field(() => [GraphQLJSON], { defaultValue: [] })
  benefits: any[];

  @Field(() => [GraphQLJSON], { defaultValue: [] })
  apply: any[];
    @Field({ nullable: true })
    Canonical_Tag?: string;
  
    @Field({ nullable: true })
    Meta_Description?: string;
  
    @Field({ nullable: true })
    Meta_Title?: string;
      @Field(() => BlogStatus, { nullable: true })
      status?: BlogStatus
}


@InputType()
export class CreateJobApplicationDto {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  currentCTC: string;

  @Field()
  expectedCTC: string;

  @Field()
  noticePeriod: string;

  @Field()
  JobName: string;

  @Field(() => GraphQLJSON)
  resume: any;

  @Field({ nullable: true })
  portfolioLink?: string;
}