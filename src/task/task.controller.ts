import {
  Body,
  Controller,
  Get,
  Injectable,
  Module,
  Post,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from './commands/create-task.command';
import { GetAllTaskQuery } from './queries/get-tasks.query';

@Controller('task')
export class TaskController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() commandDto: CreateTaskCommand): Promise<void> {
    return await this.commandBus.execute(
      new CreateTaskCommand(commandDto.title, commandDto.description),
    );
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.queryBus.execute(new GetAllTaskQuery());
  }
}
