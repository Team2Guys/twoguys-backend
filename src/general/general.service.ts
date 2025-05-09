import { Injectable } from '@nestjs/common';
import { createAppointments, CreatedRedirecturls, CreateGeneralInput, CreateGeneralsocial } from './dto/create-general.input';
import { UpdateGeneralInput, UpdateGeneralsocial, UpdateRedirecturls } from './dto/update-general.input';
import { PrismaService } from '../prisma/prisma.service';
import { customHttpException } from '../utils/helper';
import { sendAppointmentEmail } from '../utils/EmailHanlders';

@Injectable()
export class GeneralService {
  constructor(private prisma: PrismaService) { }
  async create(createGeneralInput: CreateGeneralInput) {
    try {
      return await this.prisma.reviews.create({ data: createGeneralInput })
    } catch (error) {
      customHttpException(error)
    }
  }

  async findAll() {
    try {
      return await this.prisma.reviews.findMany({})
    } catch (error) {
      customHttpException(error)
    }
  }

  async update(updateGeneralInput: UpdateGeneralInput) {
    try {
      let update = new Date();

      const { id, ...updatedData } = updateGeneralInput
      console.log(updatedData, id, "updatedData")
      return await this.prisma.reviews.update({ where: { id: Number(id) }, data: { ...updatedData, updatedAt: update } })
    } catch (error) {
      customHttpException(error)
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.reviews.delete({ where: { id } })
    } catch (error) {
      customHttpException(error)
    }
    return `This action removes a #${id} general`;
  }


  // Social links

  async createSocial(CreateGeneralsocial: CreateGeneralsocial) {
    try {
      return await this.prisma.socialLinks.create({ data: CreateGeneralsocial })
    } catch (error) {
      customHttpException(error)
    }
  }
  async getall() {
    try {
      return await this.prisma.socialLinks.findMany({})
    } catch (error) {
      customHttpException(error)
    }
  }

  async updateSocial(UpdateGeneralsocial: UpdateGeneralsocial) {
    try {
      let update = new Date();

      const { id, ...updatedData } = UpdateGeneralsocial
      console.log(updatedData, id, "updatedData")
      return await this.prisma.socialLinks.update({ where: { id: Number(id) }, data: { ...updatedData, updatedAt: update } })
    } catch (error) {
      customHttpException(error)
    }
  }

  async removeSocial(id: number) {
    try {
      return await this.prisma.socialLinks.delete({ where: { id } })
    } catch (error) {
      customHttpException(error)
    }
    return `This action removes a #${id} general`;
  }

  // Appointments
  async createAppointment(createGeneralInput: createAppointments) {
    try {
      await sendAppointmentEmail(createGeneralInput)
      return await this.prisma.appointments.create({ data: createGeneralInput })
    } catch (error) {
      customHttpException(error)
    }
  }


  async GetAllAppointments() {
    try {
      return await this.prisma.appointments.findMany({})
    } catch (error) {
      customHttpException(error)
    }
  }



  async RevmoveAppointments(id: number) {
    try {
      return await this.prisma.appointments.delete({ where: { id } })
    } catch (error) {
      customHttpException(error)
    }
  }


  async findOne(id: number) {
    try {
      return await this.prisma.appointments.findUnique({ where: { id } })
    } catch (error) {
      customHttpException(error);
    }
  }




  // RedirectUrls 

   async createRedirecturls(CreatedRedirecturls: CreatedRedirecturls) {
    try {
      return await this.prisma.redirecturls.create({ data: CreatedRedirecturls })
    } catch (error) {
      customHttpException(error)
    }
  }

   async updateRedirecturls(CreatedRedirecturls: UpdateRedirecturls) {
    try {
      const {id, ...updated} = CreatedRedirecturls
      return await this.prisma.redirecturls.update({ where:{id}, data: updated })
    } catch (error) {
      customHttpException(error)
    }
  }

   async findOneRedirecturls(endPoint:string) {
    try {
      return await this.prisma.redirecturls.findFirst({ where:{url:endPoint} })
    } catch (error) {
      customHttpException(error)
    }
  }

     async findAllRedirecturls() {
    try {
      return await this.prisma.redirecturls.findMany()
    } catch (error) {
      customHttpException(error)
    }
  }


   async deleteRedirecturls(endPoint:string) {
    try {
      return await this.prisma.redirecturls.delete({ where:{url:endPoint} })
    } catch (error) {
      customHttpException(error)
    }
  }

  





}
