import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import  * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'admin',
      database: process.env.DB_NAME || 'desafio_hubbi',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
