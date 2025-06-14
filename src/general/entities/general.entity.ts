import { ObjectType, Field, Int, ID, registerEnumType } from '@nestjs/graphql';
import { EComerece } from '../../e-comerece/entities/e-comerece.entity';
import GraphQLJSON from 'graphql-type-json';
import { CommentStatus } from '../../general/dto/enums/enum';

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

  @Field(() => String, { nullable: true })
  reviewDate?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  posterImageUrl?: any;


  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

}



@ObjectType()
export class SocialLinks {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  post_links: string;

  @Field(() => GraphQLJSON)
  posterImageUrl: any;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}



@ObjectType()
export class Appointments {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  email: string;

  @Field(() => String,)
  name: string;

  @Field()
  location: string;

  @Field(() => String, { nullable: true })
  whatsApp?: string;

  @Field(() => String,)
  message: string;


  @Field(() => [GraphQLJSON], { nullable: true })
  subCategories?: any;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

}


@ObjectType()
export class Redirecturls {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  url: string;

  @Field(() => String)
  redirectedUrl: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}


@ObjectType()
export class ProductReviews {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  starRating: number;

  @Field(() => String,)
  name: string;

  @Field(() => String)
  ReviewsDescription: string;

  @Field(() => String, { nullable: true })
  reviewDate?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  posterImageUrl?: any;

  @Field(() => [GraphQLJSON], { nullable: true })
  productsImage?: any;


  @Field(() => CommentStatus, { nullable: true })
  status?: CommentStatus;


  @Field(() => EComerece, { nullable: true })
  EcomereceProducts?: EComerece;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

}


@ObjectType()
export class productQuestion {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  question: string;

  @Field(() => Int, { nullable: true })
  productId?: number;

  @Field(() => CommentStatus, { nullable: true })
  status?: CommentStatus

  @Field(() => [GraphQLJSON], { nullable: true })
  replies?: any;

  @Field(() => EComerece, { nullable: true })
  EcomereceProducts?: EComerece;



  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}



@ObjectType()
export class Jobs {
    @Field(() => Int)
  id: number;
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
}


@ObjectType()
export class JobsApplication {
    @Field(() => Int)
  id: number;

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