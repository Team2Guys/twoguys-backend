import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubcategoriesService } from './subcategories.service';
import { Subcategory } from './entities/subcategory.entity';
import { CreateSubcategoryInput } from './dto/create-subcategory.input';
import { UpdateSubcategoryInput } from './dto/update-subcategory.input';

@Resolver(() => Subcategory)
export class SubcategoriesResolver {
  constructor(private readonly subcategoriesService: SubcategoriesService) { }

  @Mutation(() => Subcategory, { name: "createSubCategory" })
  createSubcategory(@Args('createSubcategoryInput') createSubcategoryInput: CreateSubcategoryInput) {
    return this.subcategoriesService.create(createSubcategoryInput);
  }

  @Query(() => [Subcategory], { name: 'subcategories', nullable:true })
  findAll() {
    return this.subcategoriesService.findAll();

  }

  @Query(() => Subcategory, { name: 'find_one_subcategory', nullable:true })
  findOne(@Args('custom_url', { type: () => String }) custom_url: string,
  @Args('category', { type: () => String }) category: string) {
    return this.subcategoriesService.findOne(custom_url, category);
  }


  @Query(() => Subcategory, { name: 'find_one_meta_subcategory' })
  metaHandler(@Args('custom_url', { type: () => String }) custom_url: string) {
    return this.subcategoriesService.metaHandler(custom_url);
  }

  @Mutation(() => Subcategory,{name:"update_subCategory"})
  updateSubcategory(@Args('updateSubcategoryInput') updateSubcategoryInput: UpdateSubcategoryInput) {
    return this.subcategoriesService.update(updateSubcategoryInput);
  }

  @Mutation(() => Subcategory, { name: "Removesubcategory" })
  removeSubcategory(@Args('id', { type: () => Int }) id: number) {
    return this.subcategoriesService.remove(id);
  }
}
