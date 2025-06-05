import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BlogsService } from './blogs.service';
import { Blog } from './entities/blog.entity';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';

@Resolver(() => Blog)
export class BlogsResolver {
  constructor(private readonly blogsService: BlogsService) {}

  @Mutation(() => Blog,{nullable:true})
  createBlog(@Args('createBlogInput') createBlogInput: CreateBlogInput) {
    return this.blogsService.create(createBlogInput);
  }

  @Query(() => [Blog], { name: 'get_all_blogs', nullable:true })
  findAll() {
    return this.blogsService.findAll();
  }

  @Query(() => Blog, { name: 'findone_blog',nullable:true })
  findOne(@Args('customUrl', { type: () => String }) customUrl: string) {
    return this.blogsService.findOne(customUrl);
  }

  @Mutation(() => Blog,{nullable:true})
  updateBlog(@Args('updateBlogInput') updateBlogInput: UpdateBlogInput) {
    return this.blogsService.update(updateBlogInput);
  }

  @Mutation(() => Blog,{nullable:true, name:"Remove_blog"})
  removeBlog(@Args('id', { type: () => Int }) id: number) {
    return this.blogsService.remove(id);
  }
}
