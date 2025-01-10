import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from './create-task.command';
import { PrismaService } from 'src/db/db.service';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: CreateTaskCommand) {
    const { title, description } = command;
    const data = await this.prisma.task.create({
      data: {
        title,
        description,
      },
    });
    return data;
  }
}
