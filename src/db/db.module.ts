import { Module, NestMiddleware } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './db.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DbModule  {
  constructor() {
    console.log('data base connected.....');
  }
}
