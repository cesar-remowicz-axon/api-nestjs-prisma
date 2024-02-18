import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { BadgeModule } from '../src/badge.module';
import { INestApplication } from '@nestjs/common';

describe('BadgeController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [BadgeModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/')
      .expect(200)
      .expect('Success');
  });
});
