import { Injectable } from '@nestjs/common';
import { contactUsEmailInput, CreateOrderInput, orderEmailInput, PaymentQueryDto, ProductInput } from './dto/create-sales-product.input';
import { customHttpException } from '../utils/helper';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { contactusEmail, sendEmailHandler } from 'utils/EmailHanlders';
import { count } from 'console';
import { MonthlyAppointmentStats, paymentStatus } from './entities/sales-product.entity';

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



  // Charts Queries

  async getMonthlyOrders() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const orders = await this.prisma.salesProducts.findMany({
    where: {
      paymentStatus: true,
      checkoutDate: {
        gte: new Date(currentYear, 0, 1),
        lt: new Date(currentYear, currentMonth + 1, 1),
      },
    },
  });

  const monthlyData = orders.reduce(
    (acc, order) => {
      const date = new Date(order.checkoutDate);
      const year = date.getFullYear();
      const month = date.getMonth(); // 0-based
      const key = `${year}-${month}`;

      if (!acc[key]) {
        acc[key] = {
          year,
          month,
          totalRevenue: 0,
          totalOrders: 0,
        };
      }

      acc[key].totalRevenue += Number(order.totalPrice);
      acc[key].totalOrders += 1;

      return acc;
    },
    {} as Record<
      string,
      {
        year: number;
        month: number;
        totalRevenue: number;
        totalOrders: number;
      }
    >,
  );

  const result = Object.values(monthlyData).map((data) => ({
    year: data.year,
    month: data.month + 1, // 1-based for readability
    totalRevenue: data.totalRevenue,
    totalOrders: data.totalOrders,
  }));

  result.sort((a, b) => a.year - b.year || a.month - b.month);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const completeMonthlyData = Array.from({ length: currentMonth + 1 }, (_, index) => ({
    month: `${monthNames[index]} ${currentYear}`,
    Revenue: 0,
    Orders: 0,
  }));

  result.forEach((order) => {
    const index = order.month - 1;
    completeMonthlyData[index] = {
      month: `${monthNames[index]} ${order.year}`,
      Revenue: order.totalRevenue,
      Orders: order.totalOrders,
    };
  });

  return completeMonthlyData;
}

async getMonthlyAppointments() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0-based

  // Fetch appointments from Jan 1st to end of current month
  const appointments = await this.prisma.appointments.findMany({
    where: {
      createdAt: {
        gte: new Date(currentYear, 0, 1),
        lt: new Date(currentYear, currentMonth + 1, 1),
      },
    },
  });

  // Group appointments by year and month
  const monthlyData = appointments.reduce(
    (acc, appointment) => {
      const date = new Date(appointment?.createdAt ?? "");
      const year = date.getFullYear();
      const month = date.getMonth(); 
      const key = `${year}-${month}`;

      if (!acc[key]) {
        acc[key] = {
          year,
          month,
          count: 0,
        };
      }

      acc[key].count += 1;

      return acc;
    },
    {} as Record<string, { year: number; month: number; count: number }>,
  );

  const result = Object.values(monthlyData).map((data:any) => ({
    year: data.year,
    month: data.month + 1,
    count: data.count,
  }));

  // Sort by year/month
  result.sort((a, b) => a.year - b.year || a.month - b.month);

  // Generate a complete array with all months till current one
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const completeMonthlyData = Array.from({ length: currentMonth + 1 }, (_, i) => ({
    month: `${monthNames[i]} ${currentYear}`,
    Appointments: 0,
  }));

  // Fill in the counts
  result.forEach((item) => {
    const index = item.month - 1;
    completeMonthlyData[index] = {
      month: `${monthNames[index]} ${item.year}`,
      Appointments: item.count,
    };
  });

  let orders = await this.getMonthlyOrders()
console.log(orders, "orders")

  return {appointments: completeMonthlyData, orders};
}


async getLast7DaysStats() {
  const today = new Date();
  const startDate = new Date();
  startDate.setDate(today.getDate() - 6); // last 7 days including today

  const dateKeys = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    return d.toISOString().split('T')[0]; // e.g., "2025-06-23"
  });

  // Fetch orders
  const orders = await this.prisma.salesProducts.findMany({
    where: {
      paymentStatus: true,
      checkoutDate: {
        gte: startDate,
        lte: today,
      },
    },
  });

  const dailyOrdersMap = orders.reduce((acc, order) => {
    const key = new Date(order.checkoutDate).toISOString().split('T')[0];
    if (!acc[key]) {
      acc[key] = { Revenue: 0, Orders: 0 };
    }
    acc[key].Revenue += Number(order.totalPrice);
    acc[key].Orders += 1;
    return acc;
  }, {} as Record<string, { Revenue: number; Orders: number }>);

  // Fetch appointments
  const appointments = await this.prisma.appointments.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lte: today,
      },
    },
  });

  const dailyAppointmentsMap = appointments.reduce((acc, appointment) => {
    const key = new Date(appointment?.createdAt ?? "").toISOString().split('T')[0];
    if (!acc[key]) acc[key] = 0;
    acc[key] += 1;
    return acc;
  }, {} as Record<string, number>);

  // Merge data with day name
  const finalStats = dateKeys.map((dateStr) => {
    const dateObj = new Date(dateStr);
    const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' }); // "Mon", "Tue", etc.

    return {
      date: dateStr,
      day: dayName,
      Appointments: dailyAppointmentsMap[dateStr] || 0,
      Orders: dailyOrdersMap[dateStr]?.Orders || 0,
      Revenue: dailyOrdersMap[dateStr]?.Revenue || 0,
    };
  });

  console.log(finalStats, "finalStats");
  return finalStats;
}




}
