import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Category } from '../../categories/entities/category.entity';
import GraphQLJSON from 'graphql-type-json';
import { Subcategory } from '../../subcategories/entities/subcategory.entity';
import { productQuestion, ProductReviews } from '../../general/entities/general.entity';


@ObjectType()
export class EComerece {

  @Field(() => ID)
  id: number;

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

  @Field(() => [GraphQLJSON])
  DescriptionBullets: any[];

  @Field(() => [GraphQLJSON])
  Additionalinformation: any[];

  @Field(() => [GraphQLJSON])
  Questions: any[];

  @Field(() => [GraphQLJSON])
  materialType: any[];

  @Field(() => [GraphQLJSON])
  colors: any[];

  @Field(() => [GraphQLJSON])
  sizes: any[];

  @Field(() => [GraphQLJSON])
  variant: any[];

  @Field({ nullable: true })
  Canonical_Tag?: string;

  @Field({ nullable: true })
  Meta_Description?: string;

  @Field({ nullable: true })
  Meta_Title?: string;

  @Field(() => Category, { nullable: true })
  category?: Category;

  @Field(() => Subcategory, { nullable: true })
  subcategory?: Subcategory;

  @Field({ nullable: true })
  seoSchema?: string

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

    @Field(() => [ProductReviews], { nullable: true })
  reviews?: ProductReviews;

    @Field(() => [productQuestion], { nullable: true })
  questions?: productQuestion;

}
@ObjectType()

export class eComereceProducts {

  @Field(() => [EComerece], { nullable: true })
  products?: EComerece[]


  @Field(() => Int, { nullable: true })
  totalPages?: number
    
  @Field(() => Int, { nullable: true })
  totalEcomereceProduct?: number

}