import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllTaskQuery } from './get-tasks.query';
import { PrismaService } from 'src/PostgresDB/db.service';
import { Inject } from '@nestjs/common';
import Redis from 'ioredis';
import { InjectModel } from '@nestjs/mongoose';
import { TaskDocument } from 'src/MongoDB/schema/task.shema';
import { Model } from 'mongoose';

@QueryHandler(GetAllTaskQuery)
export class GetAllTasksHandler implements IQueryHandler<GetAllTaskQuery> {
  constructor(
    @InjectModel('Task')
    private TaskModel: Model<TaskDocument>,

    @Inject('REDIS_CLIENT') private readonly redisClient: Redis,
  ) {}

  async execute(): Promise<any[]> {
    const cacheKey = 'tasks:all';

    // Check if data is cached
    const cachedData = await this.redisClient.get(cacheKey);
    if (cachedData) {
      console.log('Returning cached tasks');
      return JSON.parse(cachedData);
    }

    // Fetch from ----- Mongo ---- database
    const tasks = await this.TaskModel.find();

    // Cache the result
    await this.redisClient.set(cacheKey, JSON.stringify(tasks), 'EX', 60); // Cache for 60 seconds

    return tasks;
  }
}
