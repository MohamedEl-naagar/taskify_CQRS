import { Injectable } from '@nestjs/common';
import { PrismaService } from './db/db.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async getHello() {
    return await this.prisma.user.findMany();
  }

  async AddData(name: string, email: string) {
    return await this.prisma.user.create({
      data: { name: name, email: email },
    });
  }

  async updateUser(id, name: string, email: string) {
    const userId = parseInt(id, 10);
    return await this.prisma.user.update({
      where: { id: userId },
      data: { name: name, email: email },
    });
  }
}
