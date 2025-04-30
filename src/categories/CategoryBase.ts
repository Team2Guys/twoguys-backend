import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType({ isAbstract: true })
export abstract class  CategoryBase  {
    @Field()
    name: string;
  
    @Field({ nullable: true })
    description?: string;
  
    @Field(() => GraphQLJSON)
    posterImageUrl: any;
  
    @Field({ nullable: true })
    last_editedBy?: string;
  
    @Field({ nullable: true })
    short_description?: string;
  
    @Field()
    custom_url: string;
  
    @Field(() => GraphQLJSON, { nullable: true })
    Banners?: any;
  
    @Field({ nullable: true })
    BannerText?: string;
  
    @Field({ nullable: true })
    BannerHeading?: string;
  
    @Field({ nullable: true })
    RecallUrl?: string;
  
    @Field({ nullable: true })
    breadCrum?: string;
  
    @Field({ nullable: true })
    topHeading?: string;
  
    @Field({ nullable: true })
    topDescription?: string;
  
    @Field(() => [GraphQLJSON], { nullable: true })
    categoryHeroImages?: any[];
  
    @Field({ nullable: true })
    categoryHeroToptext?: string;
  
    @Field({ nullable: true })
    categoryHeroHeading?: string;
  
    @Field(() => [GraphQLJSON], { nullable: true })
    categoryHeroText?: any[];
  
    @Field(() => [GraphQLJSON], { nullable: true })
    categoryFaqs?: any[];
  
    @Field({ nullable: true })
    leftHeading?: string;
  
    @Field(() => [GraphQLJSON], { nullable: true })
    categoryText?: any[];
  
    @Field({ nullable: true })
    Heading?: string;
  
    @Field(() => [GraphQLJSON], { nullable: true })
    paras?: any[];
  
    @Field({ nullable: true })
    bottomText?: string;
  
    @Field({ nullable: true })
    bodyHeading?: string;
  
    @Field({ nullable: true })
    bodyMainHeading?: string;
  
    @Field({ nullable: true })
    bodyText?: string;
  
    @Field({ nullable: true })
    Bannerdiscount?: string;
  
    @Field({ nullable: true })
    salesBannerHeading?: string;
  
    @Field({ nullable: true })
    paraText?: string;
  
    @Field({ nullable: true })
    Bannercounter?: Date;


    @Field({ nullable: true })
    explore_Heading?: string;

    @Field({ nullable: true })
    explore_main_heading?: string;

    @Field({ nullable: true })
    explore_description?: string;

    @Field({ nullable: true })
    Product_Section_heading?: string;


  
    @Field({ nullable: true })
    Canonical_Tag?: string;
  
    @Field({ nullable: true })
    Meta_Description?: string;
  
    @Field({ nullable: true })
    Meta_Title?: string;


  }