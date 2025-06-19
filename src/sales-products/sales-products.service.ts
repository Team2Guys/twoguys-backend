import { Injectable } from '@nestjs/common';
import { contactUsEmailInput, CreateOrderInput, orderEmailInput, PaymentQueryDto, ProductInput } from './dto/create-sales-product.input';
import { customHttpException } from '../utils/helper';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { contactusEmail, sendEmailHandler } from 'utils/EmailHanlders';
import { count } from 'console';
import { paymentStatus } from './entities/sales-product.entity';

@Injectable()
export class SalesProductsService {
  constructor(private prisma: PrismaService) { }

  async create(createSalesProductInput: CreateOrderInput) {
    try {
      const { totalPrice, products, ...billing_data } = createSalesProductInput;
      const orderId = `ORD-${Date.now()}`;
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Token ${process.env.PAYMOB_SECRET_KEY}`);
      myHeaders.append("Content-Type", "application/json");

      const totalAmount = [{ name: 'tax Fee', amount: Math.ceil(totalPrice * 100) }];


      let raw = JSON.stringify({
        "amount": Math.ceil(totalPrice * 100),
        "currency": process.env.PAYMOD_CURRENCY,
        "payment_methods": [
          57660,
          52375,
          52374,
          52172
        ],
        "items": totalAmount,
        "billing_data": {
          ...billing_data,
          first_name: billing_data.firstName,
          last_name: billing_data.lastName,
          email: billing_data.email,
          phone_number: billing_data.phone

        },
        "special_reference": orderId,
        "redirection_url": "http:localhost:3000/thank-you" as RequestRedirect
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as RequestRedirect
      };


      let response = await fetch("https://uae.paymob.com/v1/intention/", requestOptions)
      console.log(response, "response")

      let result = await response.json();

      console.log(result.intention_order_id, "intention id")
      if (!result.intention_order_id) return customHttpException("Order Id not found ", 'NOT_FOUND');

      await this.prisma.salesProducts.create({
        data: {
          ...createSalesProductInput,
          orderId: String(result.intention_order_id),
          checkout: true,
          currency: 'AED',
          products: createSalesProductInput.products,
        }
      })

      console.log(result, "result")
      return { paymentKey: result };
    } catch (error) {
      console.log(error, "error")
      customHttpException(error.message, 'INTERNAL_SERVER_ERROR');
    }

  }

  async findAll() {
    try {
      return await this.prisma.salesProducts.findMany()
    } catch (error) {
      customHttpException(error.message, 'INTERNAL_SERVER_ERROR');

    }
  }

  async findOne(id: string) {
    try {

      return await this.prisma.salesProducts.findFirst({
        where: { orderId: id }
      })
    } catch (error) {
      customHttpException(error.message, 'INTERNAL_SERVER_ERROR');

    }
  }

  async findOrderByMail(email: string) {
    try {
      console.log(email, "email")
      let users = await this.prisma.salesProducts.findMany({ where: { email } })
      console.log(users, "users")
      return users;
    } catch (error) {
      customHttpException(error.message, 'INTERNAL_SERVER_ERROR');

    }
  }


  async get_all_records() {
    try {
      let totalProducts = await this.prisma.products.count({});
      let totalCategories = await this.prisma.categories.count({});
      let totalSubCategories = await this.prisma.subCategories.count({});
      let totalUsers = await this.prisma.user.count({});
      let totalAdmins = await this.prisma.admins.count({});
      let totalAccessories = await this.prisma.ecomereceProducts.count({});
      let appointments = await this.prisma.appointments.count({});
      let totalorders = await this.prisma.salesProducts.count({ where: { paymentStatus: true } });
      let Total_abandant_order = await this.prisma.salesProducts.count({ where: { paymentStatus: false } });
      let ecomereceProducts = await this.prisma.ecomereceProducts.count({});
      let redirecturls = await this.prisma.redirecturls.count({});
      let blogs = await this.prisma.blogs.count({});
      let blogs_comments = await this.prisma.blogs_comments.count({});
      let jobs = await this.prisma.jobs.count({});
      let jobApplication = await this.prisma.jobApplication.count({});
      return {
        totalSubCategories,
        totalProducts,
        totalCategories,
        totalAdmins,
        totalorders,
        totalUsers,
        Total_abandant_order,
        totalAccessories,
        appointments,
        ecomereceProducts,
        redirecturls,
        blogs,
        blogs_comments,
        jobs,
        jobApplication
      };
    } catch (error) {
      customHttpException(error.message, 'INTERNAL_SERVER_ERROR');
    }
  }


  async postpaymentStatus(postpayment: PaymentQueryDto) {
    try {
      const { orderId } = postpayment;

      let existingOrder = await this.prisma.salesProducts.findFirst({ where: { orderId } })
      if (!existingOrder) {
        customHttpException("Order not found", 'NOT_FOUND');
        return;
      }

      if (existingOrder.paymentStatus) {
        console.log(existingOrder.paymentStatus, "existingOrder.paymentStatus")
        return customHttpException("Payment status already updated", 'BAD_REQUEST');
      }


      const paymentStatus = await this.prisma.salesProducts.update({
        where: { orderId },
        data: { ...postpayment, checkout: false, paymentStatus: true, transactionDate: new Date() },
      });

      const products: ProductInput[] = JSON.parse(JSON.stringify(existingOrder.products)) as ProductInput[];

      if (Array.isArray(products) && products.length > 0) {
        for (const prod of products) {
          const existingProduct = await this.prisma.ecomereceProducts.findUnique({
            where: { id: Number(prod.id) },
          });

          if (!existingProduct) continue;

          const hasVariants = !!prod.variant;
          const hasSizes = !!prod.sizes;

          // Handle size or variant stock update
          if (hasVariants || hasSizes) {
            const key = hasSizes ? 'sizes' : 'variant';

            const updatedItems = existingProduct[key].map((item: any) => {
              if (item.name === prod.sizes || prod.variant) {
                return {
                  ...item,
                  stock: item.stock - prod.quantity,
                };
              }
              return item;
            });

            // Save the updated array back
            await this.prisma.ecomereceProducts.update({
              where: { id: Number(prod.id) },
              data: {
                [key]: updatedItems,
              },
            });
          } else {
            // Simple product with no variants/sizes
            await this.prisma.ecomereceProducts.update({
              where: { id: Number(prod.id) },
              data: {
                stock: {
                  decrement: prod.quantity,
                },
              },
            });
          }
        }
      }

      sendEmailHandler(existingOrder as orderEmailInput, existingOrder.email,);
      sendEmailHandler(existingOrder as orderEmailInput,);

      return paymentStatus;
    } catch (error) {
      customHttpException(error.message, 'INTERNAL_SERVER_ERROR');
    }

  }

  async contactUs(userDetails: contactUsEmailInput) {
    try {
      await contactusEmail(userDetails);

      return {
        'message': "Email sent successfully"
      }
    }
    catch (error) {
      customHttpException(error.message, 'INTERNAL_SERVER_ERROR');
    }
  }






}
