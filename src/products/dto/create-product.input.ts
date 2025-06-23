import { InputType, Int, Field } from '@nestjs/graphql';
import { BlogStatus, CommentStatus } from 'general/dto/enums/enum';
import GraphQLJSON from 'graphql-type-json';

@InputType()

export class CreateProductInput {
  @Field()
  name: string;

  @Field(() => Int)
  price: number;

  @Field()
  description: string;

  @Field(() => Int)
  stock: number;

  @Field(() => Int, { nullable: true })
  discountPrice?: number;

  @Field(() => GraphQLJSON)
  posterImageUrl: any;

  @Field(() => GraphQLJSON, { nullable: true })
  hoverImageUrl?: any;

  @Field(() => [GraphQLJSON])
  productImages: any[];

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  Canonical_Tag?: string;

  @Field({ nullable: true })
  Meta_Description?: string;

  @Field({ nullable: true })
  Meta_Title?: string;

  @Field({ nullable: true })
  last_editedBy?: string;

  @Field()
  custom_url: string;

  @Field({ nullable: true })
  breadCrum?: string;

  // Banners
  @Field(() => GraphQLJSON, { nullable: true })
  Banners?: any;

  @Field({ nullable: true })
  BannerText?: string;

  @Field({ nullable: true })
  BannerHeading?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  salesBannerImage?: any;

  // After hero sections
  @Field(() => [GraphQLJSON])
  categoryHeroImages: any[];

  @Field({ nullable: true })
  categoryHeroToptext?: string;

  @Field({ nullable: true })
  categoryHeroHeading?: string;

  @Field(() => [GraphQLJSON])
  categoryHeroText: any[];

  @Field(() => [GraphQLJSON])
  categoryFaqs: any[];

  // leftside
  @Field({ nullable: true })
  right_side_Heading?: string;

  @Field(() => [GraphQLJSON])
  left_side_Text: any[];

  @Field(() => GraphQLJSON, { nullable: true })
  left_side_image?: any;

  // Product section
  @Field({ nullable: true })
  Product_Section_heading?: string;

  @Field({ nullable: true })
  bottomText?: string;

  // Capabilities section
  @Field({ nullable: true })
  explore_Heading?: string;

  @Field({ nullable: true })
  explore_main_heading?: string;

  @Field({ nullable: true })
  explore_description?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  professionalServiceImage?: any;

  // Relations
  @Field(() => Int, { nullable: true })
  categoryId?: number;

  @Field(() => Int, { nullable: true })
  subCategoryId?: number;

  @Field({ nullable: true })
  seoSchema?: string;

  @Field(() => Int)
  category?: Number;

  @Field(() => Int)
  subcategory?: Number;

  @Field(() => Int)
  Innersubcategory?: Number;

  
    @Field(() => BlogStatus, { nullable: true })
    status?: BlogStatus


}
