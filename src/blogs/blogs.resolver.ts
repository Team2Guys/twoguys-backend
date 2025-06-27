import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BlogsService } from './blogs.service';
import { Blog, BlogComment } from './entities/blog.entity';
import { CreateBlogInput, CreateCommentDto, CreateReply, updateReplystatus, UpdateStatus } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { Public } from 'decorators/public.decorator';

@Resolver(() => Blog)
export class BlogsResolver {
  constructor(private readonly blogsService: BlogsService) { }

  @Mutation(() => Blog, { nullable: true })
  createBlog(@Args('createBlogInput') createBlogInput: CreateBlogInput) {
    return this.blogsService.create(createBlogInput);
  }
  @Public()
  @Query(() => [Blog], { name: 'get_all_blogs', nullable: true })
  findAll() {
    return this.blogsService.findAll();
  }

    @Public()
  @Query(() => Blog, { name: 'findone_blog', nullable: true })
  findOne(@Args('customUrl', { type: () => String }) customUrl: string) {
    return this.blogsService.findOne(customUrl);
  }

  @Mutation(() => Blog, { nullable: true })
  updateBlog(@Args('updateBlogInput') updateBlogInput: UpdateBlogInput) {
    return this.blogsService.update(updateBlogInput);
  }

  @Mutation(() => Blog, { nullable: true, name: "Remove_blog" })
  removeBlog(@Args('id', { type: () => Int }) id: number) {
    return this.blogsService.remove(id);
  }

  // comments
    @Public()
  @Mutation(() => BlogComment, { nullable: true })
  addComment(@Args('CreateCommentDto') CreateCommentDto: CreateCommentDto) {
    return this.blogsService.addComment(CreateCommentDto);
  }
    @Public()
  @Mutation(() => BlogComment, { nullable: true })
  CreateReply(@Args('CreateReply') CreateReply: CreateReply) {
    return this.blogsService.updateComment(CreateReply);
  }

  @Mutation(() => BlogComment, { nullable: true })
  UpdateStatus(@Args('UpdateStatus') UpdateStatus: UpdateStatus) {
    return this.blogsService.updateStatus(UpdateStatus.id, UpdateStatus.status);
  }

  // updateReply status
  
  @Mutation(() => BlogComment, { nullable: true })
  updatereplyStatus(@Args('updateReplystatus') updateReplystatus: updateReplystatus) {
    return this.blogsService.updatereplyStatus(updateReplystatus);
  }
  
    @Public()
  @Query(() => [BlogComment], { nullable: true })
  Allcoments() {
    return this.blogsService.Allcoments();
  }


  



}