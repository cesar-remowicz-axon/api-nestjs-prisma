import { BadgeController } from './badge.controller';
import { QueryExecutor } from './query.service';
import { BadgeService } from './badge.service';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [BadgeController],
  providers: [BadgeService, QueryExecutor],
})

export class BadgeModule { }
