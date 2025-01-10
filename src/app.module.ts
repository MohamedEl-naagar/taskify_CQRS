import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { TaskModule } from './task/task.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { RedisModule as RedisModulsServ } from './redis/redis.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DbModule,
    TaskModule,
    RedisModulsServ,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
