import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  // Allow requests from the React frontend
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  });

  const port = process.env.PORT || 9000;
  await app.listen(port);

  console.log(`\n🚀 Server:    http://localhost:${port}`);
  console.log(`📊 GraphQL:   http://localhost:${port}/graphql\n`);
}
bootstrap();