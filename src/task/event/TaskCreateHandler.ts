import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TaskCreatedEvent } from './TastCreateEvent';
import { InjectModel } from '@nestjs/mongoose';
import { TaskDocument } from 'src/MongoDB/schema/task.shema';
import { Model } from 'mongoose';

@EventsHandler(TaskCreatedEvent)
export class TaskCreatedHandler implements IEventHandler<TaskCreatedEvent> {
  constructor(
    @InjectModel('Task')
    private readonly taskModel: Model<TaskDocument>,
  ) {}

  async handle(event: TaskCreatedEvent) {
    const { title, description } = event;

    // Save to MongoDB
    return await this.taskModel.create({ title, description });
  }
}
