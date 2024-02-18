import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';

interface IBadge {
  employee: string;
  badge: string;
  message: string;
  isSupervisor: boolean;
}

@Injectable()
export class BadgeService {

  constructor(private prisma: PrismaService) { };

  async checkEmployee(req: Request): Promise<IBadge> {
    const apiResponse: IBadge = req.body;
    const { badge } = apiResponse;
    const isEmployee = await this.prisma.funcionarios.findMany({
      select: {
        CRACHA: true,
        FUNCIONARIO: true,
      },
      where: {
        CRACHA: badge,
      },
    });
    apiResponse.message = 'Success';
    return apiResponse;
  }
}
