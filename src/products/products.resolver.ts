import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { ProductsService } from "./products.service";
import { Product } from "./entities/product.entity";
import { CreateProductInput } from "./dto/create-product.input";
import { UpdateProductInput } from "./dto/update-product.input";
import { Public } from "../decorators/public.decorator";

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Product, { name: "create_product", nullable: true })
  createProduct(@Args("createProductInput") createProductInput: CreateProductInput) {
    return this.productsService.create(createProductInput);
  }

  @Public()
  @Query(() => [Product], { name: "All_products", nullable: true })
  findAll() {
    return this.productsService.findAll();
  }

  @Public()
  @Query(() => Product, { name: "single_product", nullable: true })
  findOne(
    @Args("custom_url", { type: () => String }) custom_url: string,
    @Args("category", { type: () => String }) category: string,
    @Args("subCategory", { type: () => String }) subCategory: string,
  ) {
    return this.productsService.findOne(custom_url, category, subCategory);
  }

  @Mutation(() => Product, { name: "update_product", nullable: true })
  updateProduct(@Args("updateProductInput") updateProductInput: UpdateProductInput) {
    return this.productsService.update(updateProductInput);
  }

  @Mutation(() => Product, { name: "RemoveProducts", nullable: true })
  removeProduct(@Args("id", { type: () => Int }) id: number) {
    return this.productsService.remove(id);
  }
}
