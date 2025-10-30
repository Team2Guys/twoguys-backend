import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { SubcategoriesService } from "./subcategories.service";
import { InnerSubCategory, Subcategory } from "./entities/subcategory.entity";
import {
  CreateInnerSubcategoryInput,
  CreateSubcategoryInput,
} from "./dto/create-subcategory.input";
import {
  UpdateInnerSubcategoryInput,
  UpdateSubcategoryInput,
} from "./dto/update-subcategory.input";
import { Public } from "decorators/public.decorator";

@Resolver(() => Subcategory)
export class SubcategoriesResolver {
  constructor(private readonly subcategoriesService: SubcategoriesService) {}

  @Mutation(() => Subcategory, { name: "createSubCategory" })
  createSubcategory(
    @Args("createSubcategoryInput")
    createSubcategoryInput: CreateSubcategoryInput,
  ) {
    return this.subcategoriesService.create(createSubcategoryInput);
  }
  @Public()
  @Query(() => [Subcategory], { name: "subcategories", nullable: true })
  findAll() {
    return this.subcategoriesService.findAll();
  }
  @Public()
  @Query(() => Subcategory, { name: "find_one_subcategory", nullable: true })
  findOne(
    @Args("custom_url", { type: () => String }) custom_url: string,
    @Args("category", { type: () => String }) category: string,
  ) {
    return this.subcategoriesService.findOne(custom_url, category);
  }

  @Public()
  @Query(() => Subcategory, { name: "find_one_meta_subcategory" })
  metaHandler(@Args("custom_url", { type: () => String }) custom_url: string) {
    return this.subcategoriesService.metaHandler(custom_url);
  }

  @Mutation(() => Subcategory, { name: "update_subCategory" })
  updateSubcategory(
    @Args("updateSubcategoryInput")
    updateSubcategoryInput: UpdateSubcategoryInput,
  ) {
    return this.subcategoriesService.update(updateSubcategoryInput);
  }

  @Mutation(() => Subcategory, { name: "Removesubcategory" })
  removeSubcategory(@Args("id", { type: () => Int }) id: number) {
    return this.subcategoriesService.remove(id);
  }

  // InnerSubCategories
  @Mutation(() => InnerSubCategory, { nullable: true })
  CreateInnerSubcategoryInput(
    @Args("CreateInnerSubcategoryInput")
    CreateInnerSubcategoryInput: CreateInnerSubcategoryInput,
  ) {
    return this.subcategoriesService.InnerSubcreate(CreateInnerSubcategoryInput);
  }
  @Public()
  @Query(() => [InnerSubCategory], {
    name: "Innersubcategories",
    nullable: true,
  })
  InnerSubfindAll() {
    return this.subcategoriesService.InnerSubfindAll();
  }

  @Mutation(() => InnerSubCategory, { name: "update_Innersubcategories" })
  InnerSubupdate(
    @Args("UpdateInnerSubcategoryInput")
    UpdateInnerSubcategoryInput: UpdateInnerSubcategoryInput,
  ) {
    return this.subcategoriesService.InnerSubupdate(UpdateInnerSubcategoryInput);
  }

  @Mutation(() => Subcategory, {
    name: "RemovesInnerubcategory",
    nullable: true,
  })
  InnerSubremove(@Args("id", { type: () => Int }) id: number) {
    return this.subcategoriesService.InnerSubremove(id);
  }
}
