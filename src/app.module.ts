import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './PostgresDB/db.module';
import { TaskModule } from './task/task.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { RedisModule as RedisModulsServ } from './redis/redis.module';
import { MongoModule } from './MongoDB/mongo.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DbModule,
    MongoModule,
    TaskModule,
    RedisModulsServ,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
