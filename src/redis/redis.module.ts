import { Module, Global } from '@nestjs/common';
import { RedisService } from './redis.service';
import Redis from 'ioredis';

@Global()
@Module({
  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: () => {
        return new Redis({
          host: 'localhost', // Replace with your Redis host
          port: 6379, // Default Redis port
        });
      },
    },
    RedisService,
  ],
  exports: ['REDIS_CLIENT'],
})
export class RedisModule {}
