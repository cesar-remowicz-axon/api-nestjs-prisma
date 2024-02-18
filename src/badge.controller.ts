import { Controller, Post, Req } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { Request } from 'express';

interface ApiResponse {
  employee: string;
  badge: string;
  message: string;
}

@Controller('badge')
export class BadgeController {

  constructor(private readonly badgeService: BadgeService) { }

  @Post('employee')
  async getEmployeeCheck(@Req() req: Request): Promise<ApiResponse> {
    return this.badgeService.checkEmployee(req);
  }

}
