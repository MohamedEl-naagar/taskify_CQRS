import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return await this.appService.getHello();
  }

  @Get('AddData/:name/:email')
  async AddData(@Param('name') name: string, @Param('email') email: string) {
    return await this.appService.AddData(name, email);
  }

  @Get('updateData/:id')
  async updateData(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('email') email: string,
  ) {
    return await this.appService.updateUser(id, name, email);
  }
}
