import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "../../generated/prisma";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }

  async onModuleInit() {
    console.log("✅ Connected to the database");
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
