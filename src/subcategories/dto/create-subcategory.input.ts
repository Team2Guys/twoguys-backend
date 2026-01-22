import { InputType, Int, Field, ID } from "@nestjs/graphql";
import { BlogStatus } from "../../general/dto/enums/enum";
import GraphQLJSON from "graphql-type-json";

@InputType()
export class CreateSubcategoryInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => GraphQLJSON, { nullable: true })
  posterImageUrl?: any;

  @Field({ nullable: true })
  last_editedBy?: string;

  @Field({ nullable: true })
  short_description?: string;

  @Field()
  custom_url: string;

  @Field(() => ID, { nullable: true })
  category?: Number | any;
  // Banner Fields
  @Field(() => GraphQLJSON, { nullable: true })
  Banners?: any;

  @Field({ nullable: true })
  BannerText?: string;

  @Field({ nullable: true })
  BannerHeading?: string;

  // Service section
  @Field({ nullable: true })
  leftHeading?: string;

  @Field(() => [GraphQLJSON], { nullable: true })
  categoryText?: any[];

  // After Hero Sections
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

  // Collection Section
  @Field({ nullable: true })
  collectionHeading?: string;

  @Field({ nullable: true })
  collectionMainHeading?: string;

  // Quality Sections
  @Field(() => [GraphQLJSON], { nullable: true })
  QualityHeadings?: any[];

  @Field(() => [GraphQLJSON], { nullable: true })
  QualityText?: any[];

  @Field(() => [GraphQLJSON], { nullable: true })
  QualityImages?: any[];

  // Custom Made Section
  @Field(() => [GraphQLJSON], { nullable: true })
  CustomHeading?: any[];

  @Field(() => [GraphQLJSON], { nullable: true })
  CustomText?: any[];

  // Product Main Section
  @Field({ nullable: true })
  Product_Section_heading?: string;

  @Field({ nullable: true })
  bottomText?: string;

  // Installation Section
  @Field({ nullable: true })
  bodyHeading?: string;

  @Field({ nullable: true })
  bodyMainHeading?: string;

  @Field({ nullable: true })
  bodyText?: string;

  // Professional Services
  @Field({ nullable: true })
  explore_Heading?: string;

  @Field({ nullable: true })
  explore_main_heading?: string;

  @Field({ nullable: true })
  explore_description?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  professionalServiceImage?: any;

  // SEO Fields
  @Field({ nullable: true })
  Canonical_Tag?: string;

  @Field({ nullable: true })
  Meta_Description?: string;

  @Field({ nullable: true })
  Meta_Title?: string;

  @Field(() => BlogStatus, { nullable: true, defaultValue: "PUBLISHED" })
  status?: BlogStatus;
  @Field(() => Int)
  Innersubcategory?: number;
}

@InputType()
export class CreateInnerSubcategoryInput {
  @Field()
  name: string;
  @Field()
  custom_url: string;
  @Field()
  subCategoryId: string;

  @Field(() => GraphQLJSON, { nullable: true })
  catalogue?: any;
}
