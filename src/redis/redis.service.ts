import { Injectable, Inject } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@Inject('REDIS_CLIENT') private readonly redisClient: Redis) {}

  async setKey(key: string, value: string): Promise<void> {
    await this.redisClient.set(key, value);
  }

  async getKey(key: string): Promise<string | null> {
    return this.redisClient.get(key);
  }
}
