import { IApiResponse } from 'interfaces/interface.apiResponse';
import { Controller, Post, Req, Res } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { Request } from 'express';

@Controller('badge')
export class BadgeController {

  constructor(private readonly badgeService: BadgeService) { }

  @Post('employee')
  async getEmployeeCheck(@Req() req: Request): Promise<IApiResponse> {
    return this.badgeService.employee(req);
  }

}
