import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from './create-task.command';
import { PrismaService } from 'src/PostgresDB/db.service';
import { EventBus } from '@nestjs/cqrs';
import { TaskCreatedEvent } from '../event/TastCreateEvent';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateTaskCommand) {
    const { title, description } = command;
    const data = await this.prisma.task.create({
      data: {
        title,
        description,
      },
    });

    // Emit event to sync with MongoDB
    this.eventBus.publish(new TaskCreatedEvent(title, description));

    return data;
  }
}
