import { Test, TestingModule } from '@nestjs/testing';
import { BadgeController } from './badge.controller';
import { BadgeService } from './badge.service';
import { Request } from 'express';
import { PrismaService } from './prisma.service';

describe('BadgeController', () => {
  let app: TestingModule;

  beforeAll(async () => {

    app = await Test.createTestingModule({
      controllers: [BadgeController],
      providers: [BadgeService, PrismaService],
    }).compile();

  });

  describe('getEmployeeCheck', () => {
    it('should return "Success"', async (req: Request) => {
      const badgeController = app.get(BadgeController);
      const response = await badgeController.getEmployeeCheck(req);
      expect(response).toBe("Success")
    });
  });

});
