import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllTaskQuery } from './get-tasks.query';
import { PrismaService } from 'src/db/db.service';

@QueryHandler(GetAllTaskQuery)
export class GetAllTasksHandler implements IQueryHandler<GetAllTaskQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(): Promise<any[]> {
    return this.prisma.task.findMany();
  }
}
