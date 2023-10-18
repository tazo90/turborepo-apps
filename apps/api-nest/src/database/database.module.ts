import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';

import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        pool: {
          min: 2,
          max: 10,
        },
        migrations: {
          tableName: './knex_migrations',
        },
      },
    }),
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
