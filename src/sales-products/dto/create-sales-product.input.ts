import { InputType, Int, Field, Float, PartialType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class CreateOrderInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  country: string;

  @Field()
  city: string;

  @Field()
  address: string;

  @Field()
  note: string;

  @Field()
  phone: string;

  @Field()
  emirate: string;


  @Field({ nullable: true })
  otherCity?: string;

  @Field(() => [GraphQLJSON])
  products: any[];

  @Field(() => Float)
  shipmentFee: number;

  @Field(() => Float)
  totalPrice: number;

  @Field(() => GraphQLJSON)
  shippingMethod: any;

}




// Input DTO for the Product (used within CreateOrderInput)
@InputType()

export class ProductInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => Float)
  discountPrice: number;

  @Field()
  colors: string;

  @Field()
  sizes: string;

  @Field()
  variant: string;

  @Field(() => Int)
  stock: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Float)
  totalPrice: number;

  @Field(() => GraphQLJSON)
  image: any;
}


@InputType()
export class contactUsEmailInput {
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  phoneNumber: string;
  @Field()
  message: string;
  @Field(() => Boolean)
  agree: boolean;

  @Field(() => Boolean,{nullable:true})
  questionFlag?: boolean;

  
  



}


@InputType()
export class PaymentQueryDto {
  @Field(() => Boolean, { nullable: true })
  success?: boolean;

  @Field({ nullable: true })
  integrationId?: string;

  @Field({ nullable: true })
  orderId?: string;

  @Field(() => Boolean, { nullable: true })
  pending?: boolean;

  @Field({ nullable: true })
  is3DSecure?: string;

  @Field({ nullable: true })
  pay_methodType?: string;

  @Field({ nullable: true })
  cardLastDigits?: string;

  @Field({ nullable: true })
  paymethod_sub_type?: string;
}


@InputType()
export class orderEmailInput extends PartialType(CreateOrderInput) {
  @Field()
  orderId: string;

  @Field()
  transactionDate: Date;
  @Field(() => Boolean, { nullable: true })
  isfreesample?: boolean;

}

