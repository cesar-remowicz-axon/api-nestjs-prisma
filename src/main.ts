import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { BadgeModule } from './badge.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(BadgeModule, new FastifyAdapter(),);
  await app.listen(process.env['PORT']);
}

bootstrap();
