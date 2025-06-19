import { InputType, Int, Field } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';



@InputType()
export class CreateEComereceInput {
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

  @Field({ nullable: true })
  short_description?: string;

  @Field(() => GraphQLJSON)
  posterImageUrl: any;

  @Field(() => GraphQLJSON, { nullable: true })
  hoverImageUrl?: any;

  @Field(() => [GraphQLJSON])
  productImages: any[];

  @Field({ nullable: true })
  last_editedBy?: string;

  @Field()
  custom_url: string;

  @Field()
  breadCrum: string;

  @Field(() => GraphQLJSON, { nullable: true })
  Banners?: any;

  @Field(() => [GraphQLJSON], { nullable: true })
  DescriptionBullets?: any[];

  @Field(() => [GraphQLJSON], { nullable: true })
  Additionalinformation?: any[];

  @Field(() => [GraphQLJSON], { nullable: true })
  Questions?: any[];

  @Field(() => [GraphQLJSON], { nullable: true })
  materialType?: any[];

  @Field(() => [GraphQLJSON], { nullable: true })
  colors?: any[];

  @Field(() => [GraphQLJSON], { nullable: true })
  sizes?: any[];

  @Field(() => [GraphQLJSON], { nullable: true })
  variant?: any[];

  @Field(() => [GraphQLJSON], { nullable: true })
  shippingOptions?: any[];

  @Field({ nullable: true })
  Canonical_Tag?: string;

  @Field({ nullable: true })
  Meta_Description?: string;

  @Field({ nullable: true })
  Meta_Title?: string;

  @Field(() => Int, { nullable: true })
  category?: number;

  @Field(() => Int, { nullable: true })
  subcategory?: number;
  @Field({ nullable: true })
  seoSchema?: string
}



@InputType()
export class PaginatedPrducts {
  @Field()
  categoryname: string

  @Field(() => Int)
  page: number

  @Field(()=>Int)
  pageSize: number

  @Field({nullable:true})
  subcategory?: string


}