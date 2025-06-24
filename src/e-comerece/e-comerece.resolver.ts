import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EComereceService } from './e-comerece.service';
import { EComerece, eComereceProducts } from './entities/e-comerece.entity';
import { CreateEComereceInput, PaginatedPrducts } from './dto/create-e-comerece.input';
import { UpdateEComereceInput } from './dto/update-e-comerece.input';
import { Public } from 'decorators/public.decorator';

@Resolver(() => EComerece)
export class EComereceResolver {
  constructor(private readonly eComereceService: EComereceService) { }

  @Mutation(() => EComerece,{nullable:true})
  createEComerece(@Args('createEComereceInput') createEComereceInput: CreateEComereceInput) {
    return this.eComereceService.create(createEComereceInput);
  }

    @Public()
  @Query(() => [EComerece], { name: 'eComerece' })
  findAll() {
    return this.eComereceService.findAll();
  }

    @Public()
  @Query(() => EComerece, { name: 'single_product_ecomerece', nullable: true })
  findOne(
    @Args('custom_url', { type: () => String }) custom_url: string,
    @Args('category', { type: () => String }) category: string,
    @Args('subCategory', { type: () => String }) subCategory: string,

  ) {
    return this.eComereceService.findOne(custom_url, category, subCategory);
  }

  @Mutation(() => EComerece)
  updateEComerece(@Args('updateEComereceInput') updateEComereceInput: UpdateEComereceInput) {
    return this.eComereceService.update(updateEComereceInput);
  }

  @Mutation(() => EComerece,{name:"RemoveEcomereceProduct"})
  removeEComerece(@Args('id', { type: () => Int }) id: number) {
    return this.eComereceService.remove(id);
  }


  
  @Mutation(() => eComereceProducts,{nullable:true})
  PaginatedPrducts(@Args('PaginatedPrducts') PaginatedPrducts: PaginatedPrducts) {
    return this.eComereceService.CategorygetPaginatedProducts(PaginatedPrducts.categoryname, PaginatedPrducts.page, PaginatedPrducts.pageSize, PaginatedPrducts.subcategory);
  }


}
