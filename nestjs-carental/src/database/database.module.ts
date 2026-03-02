import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '../components/cars/entities/car';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Car],
      synchronize: true,
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false, // required for Render's PostgreSQL
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}