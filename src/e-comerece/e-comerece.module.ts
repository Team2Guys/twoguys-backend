import { Module } from '@nestjs/common';
import { EComereceService } from './e-comerece.service';
import { EComereceResolver } from './e-comerece.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [EComereceResolver, EComereceService],
  imports:[PrismaModule]
})
export class EComereceModule {}
