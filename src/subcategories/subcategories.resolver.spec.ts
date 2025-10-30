import { Test, TestingModule } from "@nestjs/testing";
import { SubcategoriesResolver } from "./subcategories.resolver";
import { SubcategoriesService } from "./subcategories.service";

describe("SubcategoriesResolver", () => {
  let resolver: SubcategoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubcategoriesResolver, SubcategoriesService],
    }).compile();

    resolver = module.get<SubcategoriesResolver>(SubcategoriesResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
