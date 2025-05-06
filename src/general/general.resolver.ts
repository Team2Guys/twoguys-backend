import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GeneralService } from './general.service';
import { General } from './entities/general.entity';
import { CreateGeneralInput } from './dto/create-general.input';
import { UpdateGeneralInput } from './dto/update-general.input';

@Resolver(() => General)
export class GeneralResolver {
  constructor(private readonly generalService: GeneralService) {}

  @Mutation(() => General,{name:"Create_reviews", nullable:true})
  createGeneral(@Args('createGeneralInput') createGeneralInput: CreateGeneralInput) {
    return this.generalService.create(createGeneralInput);
  }

  @Query(() => [General], { name: 'get_All_Reviews', nullable:true })
  findAll() {
    return this.generalService.findAll();
  }

  @Mutation(() => General,{name:"update_Reviews"})
  updateGeneral(@Args('updateGeneralInput') updateGeneralInput: UpdateGeneralInput) {
    return this.generalService.update(updateGeneralInput);
  }

  @Mutation(() => General)
  removeGeneral(@Args('id', { type: () => Int }) id: number) {
    return this.generalService.remove(id);
  }
}
