import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GeneralService } from './general.service';
import { Appointments, General, Jobs, JobsApplication, productQuestion, ProductReviews, Redirecturls, SocialLinks } from './entities/general.entity';
import { createAppointments, CreatedRedirecturls, CreateGeneralInput, CreateGeneralsocial, CreateJobApplicationDto, CreateJobDto, productQuestionInput, productReviewInput } from './dto/create-general.input';
import { UpdateCreateJobApplicationDto, UpdateCreateJobDto, UpdateGeneralInput, UpdateGeneralsocial, UpdateproductQuestionInput, UpdateproductReviewInput, UpdateRedirecturls } from './dto/update-general.input';
import { Public } from 'decorators/public.decorator';

@Resolver(() => General)
export class GeneralResolver {
  constructor(private readonly generalService: GeneralService) { }

  @Mutation(() => General, { name: "Create_reviews", nullable: true })
  createGeneral(@Args('createGeneralInput') createGeneralInput: CreateGeneralInput) {
    return this.generalService.create(createGeneralInput);
  }

  @Public()
  @Query(() => [General], { name: 'get_All_Reviews', nullable: true })
  findAll() {
    return this.generalService.findAll();
  }

  @Mutation(() => General, { name: "update_Reviews" })
  updateGeneral(@Args('updateGeneralInput') updateGeneralInput: UpdateGeneralInput) {
    return this.generalService.update(updateGeneralInput);
  }

  @Mutation(() => General, { name: "Delete_Review", nullable: true })
  removeGeneral(@Args('id', { type: () => Int }) id: number) {
    return this.generalService.remove(id);
  }
  // Social links
  @Mutation(() => SocialLinks, { nullable: true })
  createSocial(@Args('CreateGeneralsocial',) CreateGeneralsocial: CreateGeneralsocial) {
    return this.generalService.createSocial(CreateGeneralsocial);
  }

  @Public()
  @Query(() => [SocialLinks], { nullable: true })
  SocialLinks() {
    return this.generalService.getall();
  }


  @Mutation(() => SocialLinks, { nullable: true })
  updateSocial(@Args('UpdateGeneralsocial') UpdateGeneralsocial: UpdateGeneralsocial) {
    return this.generalService.updateSocial(UpdateGeneralsocial);
  }

  @Mutation(() => SocialLinks, { nullable: true })
  deleteSocial(@Args('id', { type: () => Int }) id: number) {
    return this.generalService.removeSocial(id);
  }

  // Appointments
  @Mutation(() => Appointments, { name: "Create_Appointments", nullable: true })
  createAppointment(@Args('createAppointments',) createAppointments: createAppointments) {
    return this.generalService.createAppointment(createAppointments);
  }

  @Public()
  @Query(() => [Appointments], { name: "Get_Appointments", nullable: true })
  GetAllAppointments() {
    return this.generalService.GetAllAppointments();
  }
  @Mutation(() => Appointments, { name: "Delete_Appointments", nullable: true })
  RevmoveAppointments(@Args('id', { type: () => Int }) id: number) {
    return this.generalService.RevmoveAppointments(id);
  }



  // Redirect urls 



  @Mutation(() => Redirecturls, { nullable: true })
  createRedirecturls(@Args('CreatedRedirecturls',) CreatedRedirecturls: CreatedRedirecturls) {
    return this.generalService.createRedirecturls(CreatedRedirecturls);
  }

  @Mutation(() => Redirecturls, { nullable: true })
  updateRedirecturls(@Args('UpdateRedirecturls',) UpdateRedirecturls: UpdateRedirecturls) {
    return this.generalService.updateRedirecturls(UpdateRedirecturls);
  }

    @Public()
  @Mutation(() => Redirecturls, { nullable: true })
  findOneRedirecturls(@Args('url', { type: () => String }) url: string) {
    return this.generalService.findOneRedirecturls(url);
  }

    @Public()
  @Query(() => [Redirecturls], { nullable: true })
  findAllRedirecturls() {
    return this.generalService.findAllRedirecturls();
  }

  // products reviews

  @Mutation(() => ProductReviews, { name: "Create_prod_Reviews", nullable: true })
  createProdReviews(@Args('productReviewInput') productReviewInput: productReviewInput) {
    return this.generalService.createProdReviews(productReviewInput);
  }
  @Public()
  @Query(() => [ProductReviews], { name: 'get_All_prod_Reviews', nullable: true })
  getAllProdReviews() {
    return this.generalService.getAllProdReviews();
  }

  @Mutation(() => ProductReviews, { name: "update_prod_Reviews", nullable: true })
  updateProdReviews(@Args('UpdateproductReviewInput') UpdateproductReviewInput: UpdateproductReviewInput) {
    return this.generalService.updateProdReviews(UpdateproductReviewInput);
  }

  @Mutation(() => ProductReviews, { name: "Delete_prod_Review", nullable: true })
  removeProdReviews(@Args('id', { type: () => Int }) id: number) {
    return this.generalService.removeProdReviews(id);
  }

  // Questoins

  @Mutation(() => productQuestion, { name: "Create_prod_Questions", nullable: true })
  createProdquestions(@Args('productQuestionInput') productQuestionInput: productQuestionInput) {
    return this.generalService.createProdquestions(productQuestionInput);
  }
  @Public()
  @Query(() => [productQuestion], { name: 'get_All_prod_Questions', nullable: true })
  getAllProdquestions() {
    return this.generalService.getAllProdquestions();
  }

  @Mutation(() => productQuestion, { name: "update_prod_Questions", nullable: true })
  updateProdquestions(@Args('UpdateproductQuestionInput') UpdateproductQuestionInput: UpdateproductQuestionInput) {
    return this.generalService.updateProdquestions(UpdateproductQuestionInput);
  }

  @Mutation(() => productQuestion, { name: "Delete_prod_Questions", nullable: true })
  removeProdquestions(@Args('id', { type: () => Int }) id: number) {
    return this.generalService.removeProdquestions(id);
  }

  // jobs

  @Mutation(() => Jobs, { name: "Create_jobs", nullable: true })
  createjob(@Args('CreateJobDto') CreateJobDto: CreateJobDto) {
    return this.generalService.createjob(CreateJobDto);
  }
  @Public()
  @Query(() => [Jobs], { name: 'get_All_jobs', nullable: true })
  getAlljob() {
    return this.generalService.getAlljob();
  }


  @Public()
  @Query(() => Jobs, { name: 'get_single_job', nullable: true })
  findOne(
    @Args('customUrl', { type: () => String }) customUrl: string
  ) {
    return this.generalService.getSingleJob(customUrl);
  }

  @Mutation(() => Jobs, { name: "update_jobs", nullable: true })
  updatejob(@Args('UpdateCreateJobDto') UpdateCreateJobDto: UpdateCreateJobDto) {
    return this.generalService.updatejob(UpdateCreateJobDto);
  }

  @Mutation(() => Jobs, { name: "Delete_jobs", nullable: true })
  removejob(@Args('id', { type: () => Int }) id: number) {
    return this.generalService.removejob(id);
  }

  // jobs Applications

  @Mutation(() => JobsApplication, { name: "Create_jobs_applications", nullable: true })
  createjobApplication(@Args('CreateJobDto') CreateJobDto: CreateJobApplicationDto) {
    return this.generalService.createjobApplication(CreateJobDto);
  }
  @Public()
  @Query(() => [JobsApplication], { name: 'get_All_jobs_applications', nullable: true })
  getAlljobApplication() {
    return this.generalService.getAlljobApplication();
  }

  @Mutation(() => JobsApplication, { name: "update_jobs_applications", nullable: true })
  updatejobApplication(@Args('UpdateCreateJobApplicationDto') UpdateCreateJobApplicationDto: UpdateCreateJobApplicationDto) {
    return this.generalService.updatejobApplication(UpdateCreateJobApplicationDto);
  }

  @Mutation(() => JobsApplication, { name: "Delete_jobs_applications", nullable: true })
  removejobApplication(@Args('id', { type: () => Int }) id: number) {
    return this.generalService.removejobApplication(id);
  }







}
