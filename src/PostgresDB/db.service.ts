import { Global, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, PrismaClient } from '@prisma/client';

@Global()
@Injectable()
export class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, 'query' | 'error' | 'beforeExit'> {
    constructor(private readonly configService: ConfigService) {
        super({
            datasources: {
                db: {
                    url: configService.get<string>('DATABASE_URL'),
                },
            },
        });
        this.$on('error', (e) => {
            console.error('Prisma error:', e.message);
        });
    }
    
}
