import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaService } from 'src/PostgresDB/db.service';
import { CreateTaskHandler } from './commands/create-tast.handler';
import { GetAllTasksHandler } from './queries/get-tasks.handler';
import { TaskController } from './task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from 'src/MongoDB/schema/task.shema';
import { TaskCreatedHandler } from './event/TaskCreateHandler';

@Module({
  imports: [
    CqrsModule,

    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
  ],
  providers: [
    PrismaService,
    CreateTaskHandler,
    GetAllTasksHandler,
    TaskCreatedHandler,
  ],
  controllers: [TaskController],
})
export class TaskModule {}
