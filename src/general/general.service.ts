import { Injectable } from "@nestjs/common";
import {
  createAppointments,
  CreatedRedirecturls,
  CreateGeneralInput,
  CreateGeneralsocial,
  CreateJobApplicationDto,
  CreateJobDto,
  productQuestionInput,
  productReviewInput,
} from "./dto/create-general.input";
import {
  UpdateCreateJobApplicationDto,
  UpdateCreateJobDto,
  UpdateGeneralInput,
  UpdateGeneralsocial,
  UpdateproductQuestionInput,
  UpdateproductReviewInput,
  UpdateRedirecturls,
} from "./dto/update-general.input";
import { PrismaService } from "../prisma/prisma.service";
import { customHttpException } from "../utils/helper";
import { sendAppointmentEmail, sendJobApplicationEmails } from "../utils/EmailHanlders";

@Injectable()
export class GeneralService {
  constructor(private prisma: PrismaService) {}
  async create(createGeneralInput: CreateGeneralInput) {
    try {
      return await this.prisma.reviews.create({ data: createGeneralInput });
    } catch (error) {
      customHttpException(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.reviews.findMany({});
    } catch (error) {
      customHttpException(error);
    }
  }

  async update(updateGeneralInput: UpdateGeneralInput) {
    try {
      let update = new Date();

      const { id, ...updatedData } = updateGeneralInput;
      console.log(updatedData, id, "updatedData");
      return await this.prisma.reviews.update({
        where: { id: Number(id) },
        data: { ...updatedData, updatedAt: update },
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.reviews.delete({ where: { id } });
    } catch (error) {
      customHttpException(error);
    }
    return `This action removes a #${id} general`;
  }

  // Social links

  async createSocial(CreateGeneralsocial: CreateGeneralsocial) {
    try {
      return await this.prisma.socialLinks.create({
        data: CreateGeneralsocial,
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async getall() {
    try {
      return await this.prisma.socialLinks.findMany({});
    } catch (error) {
      customHttpException(error);
    }
  }

  async updateSocial(UpdateGeneralsocial: UpdateGeneralsocial) {
    try {
      let update = new Date();

      const { id, ...updatedData } = UpdateGeneralsocial;
      console.log(updatedData, id, "updatedData");
      return await this.prisma.socialLinks.update({
        where: { id: Number(id) },
        data: { ...updatedData, updatedAt: update },
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async removeSocial(id: number) {
    try {
      return await this.prisma.socialLinks.delete({ where: { id } });
    } catch (error) {
      customHttpException(error);
    }
    return `This action removes a #${id} general`;
  }

  // Appointments
  async createAppointment(createGeneralInput: createAppointments) {
    try {
      await sendAppointmentEmail(createGeneralInput);
      return await this.prisma.appointments.create({
        data: createGeneralInput,
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async GetAllAppointments() {
    try {
      return await this.prisma.appointments.findMany({});
    } catch (error) {
      customHttpException(error);
    }
  }

  async RevmoveAppointments(id: number) {
    try {
      return await this.prisma.appointments.delete({ where: { id } });
    } catch (error) {
      customHttpException(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.appointments.findUnique({ where: { id } });
    } catch (error) {
      customHttpException(error);
    }
  }

  // RedirectUrls

  async createRedirecturls(CreatedRedirecturls: CreatedRedirecturls) {
    try {
      return await this.prisma.redirecturls.create({
        data: CreatedRedirecturls,
      });
    } catch (error) {
      customHttpException(error);
    }
  }
  async updateRedirecturls(CreatedRedirecturls: UpdateRedirecturls) {
    try {
      const { id, ...updated } = CreatedRedirecturls;
      if (updated.url) {
        const existing = await this.prisma.redirecturls.findFirst({
          where: {
            url: updated.url,
            NOT: { id: Number(id) },
          },
        });

        if (existing) {
          throw new Error("This URL already exists. Please choose a unique one.");
        }
      }

      return await this.prisma.redirecturls.update({
        where: { id: Number(id) },
        data: { ...updated, updatedAt: new Date() },
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async findOneRedirecturls(endPoint: string) {
    try {
      return await this.prisma.redirecturls.findFirst({
        where: { url: endPoint },
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async findAllRedirecturls() {
    try {
      return await this.prisma.redirecturls.findMany();
    } catch (error) {
      customHttpException(error);
    }
  }

  async deleteRedirecturls(endPoint: string) {
    try {
      return await this.prisma.redirecturls.delete({
        where: { url: endPoint },
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  // Products reviews

  async createProdReviews(createGeneralInput: productReviewInput) {
    try {
      const { product, ...withoutprod } = createGeneralInput;
      if (!product) return customHttpException("Product Id not found", "NOT_FOUND");
      return await this.prisma.productReviews.create({
        data: { ...withoutprod, ecomereceProductsId: Number(product) },
      });
    } catch (error) {
      customHttpException(error);
    }
  }
  async getAllProdReviews() {
    try {
      return await this.prisma.productReviews.findMany({
        include: { EcomereceProducts: true },
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async updateProdReviews(updateGeneralInput: UpdateproductReviewInput) {
    try {
      let update = new Date();

      const { id, ...updatedData } = updateGeneralInput;
      return await this.prisma.productReviews.update({
        where: { id: Number(id) },
        data: { ...updatedData, updatedAt: update },
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async removeProdReviews(id: number) {
    try {
      return await this.prisma.productReviews.delete({ where: { id } });
    } catch (error) {
      customHttpException(error);
    }
    return `This action removes a #${id} general`;
  }

  // questions

  async createProdquestions(createGeneralInput: productQuestionInput) {
    try {
      const { product, ...withoutprod } = createGeneralInput;
      if (!product) return customHttpException("Product Id not found", "NOT_FOUND");
      return await this.prisma.productQuestions.create({
        data: { ...withoutprod, ecomereceProductsId: Number(product) },
      });
    } catch (error) {
      customHttpException(error);
    }
  }
  async getAllProdquestions() {
    try {
      let questions = await this.prisma.productQuestions.findMany({
        include: { EcomereceProducts: true },
      });

      console.log(questions, "questions");
      return questions;
    } catch (error) {
      customHttpException(error);
    }
  }

  async updateProdquestions(updateGeneralInput: UpdateproductQuestionInput) {
    try {
      let update = new Date();

      const { id, ...updatedData } = updateGeneralInput;
      return await this.prisma.productQuestions.update({
        where: { id: Number(id) },
        data: { ...updatedData, updatedAt: update },
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async removeProdquestions(id: number) {
    try {
      return await this.prisma.productQuestions.delete({ where: { id } });
    } catch (error) {
      customHttpException(error);
    }
    return `This action removes a #${id} general`;
  }

  // jobs

  async createjob(CreateJobDto: CreateJobDto) {
    try {
      return await this.prisma.jobs.create({ data: CreateJobDto });
    } catch (error) {
      customHttpException(error);
    }
  }

  async getSingleJob(custom_url: string) {
    try {
      return await this.prisma.jobs.findFirst({ where: { custom_url } });
    } catch (error) {
      customHttpException(error);
    }
  }
  async getAlljob() {
    try {
      return await this.prisma.jobs.findMany({});
    } catch (error) {
      customHttpException(error);
    }
  }

  async updatejob(UpdateCreateJobDto: UpdateCreateJobDto) {
    try {
      let update = new Date();

      const { id, ...updatedData } = UpdateCreateJobDto;
      return await this.prisma.jobs.update({
        where: { id: Number(id) },
        data: { ...updatedData, updatedAt: update },
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async removejob(id: number) {
    try {
      return await this.prisma.jobs.delete({ where: { id } });
    } catch (error) {
      customHttpException(error);
    }
    return `This action removes a #${id} general`;
  }

  // Jobs applications

  async createjobApplication(CreateJobApplicationDto: CreateJobApplicationDto) {
    try {
      let applicant = await this.prisma.jobApplication.create({
        data: CreateJobApplicationDto,
      });
      sendJobApplicationEmails(CreateJobApplicationDto);
      return applicant;
    } catch (error) {
      customHttpException(error);
    }
  }
  async getAlljobApplication() {
    try {
      return await this.prisma.jobApplication.findMany({});
    } catch (error) {
      customHttpException(error);
    }
  }

  async updatejobApplication(UpdateCreateJobDto: UpdateCreateJobApplicationDto) {
    try {
      let update = new Date();

      const { id, ...updatedData } = UpdateCreateJobDto;
      return await this.prisma.jobApplication.update({
        where: { id: Number(id) },
        data: { ...updatedData, updatedAt: update },
      });
    } catch (error) {
      customHttpException(error);
    }
  }

  async removejobApplication(id: number) {
    try {
      return await this.prisma.jobApplication.delete({ where: { id } });
    } catch (error) {
      customHttpException(error);
    }
    return `This action removes a #${id} general`;
  }
}
