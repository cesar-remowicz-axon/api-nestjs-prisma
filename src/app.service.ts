import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {

  async getHello(): Promise<Record<string, string>> {
    const prisma = new PrismaClient();
    const employee = await prisma.funcionarios.findMany({
      select: {
        CRACHA: true,
        FUNCIONARIO: true,
      },
      where: {
        CRACHA: '004067',
      }
    })
    console.log('employee', employee)
    return {message : 'Success'};
  }
}
