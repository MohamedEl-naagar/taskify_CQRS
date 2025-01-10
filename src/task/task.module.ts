import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaService } from 'src/db/db.service';
import { CreateTaskHandler } from './commands/create-tast.handler';
import { GetAllTasksHandler } from './queries/get-tasks.handler';
import { TaskController } from './task.controller';

@Module({
  imports: [CqrsModule],
  providers: [PrismaService, CreateTaskHandler, GetAllTasksHandler],
  controllers: [TaskController],
})
export class TaskModule {}
