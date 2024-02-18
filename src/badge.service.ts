import { IApiResponse } from 'interfaces/interface.apiResponse';
import { QueryExecutor } from './query.service';
import { Injectable } from '@nestjs/common';
import { Message } from './utils.message';
import { Request } from 'express';

@Injectable()
export class BadgeService {

    async employee(req: Request): Promise<IApiResponse> {

        const apiResponse: IApiResponse = req.body;
        const { badge } = apiResponse;
        const message = new Message();

        try {
            const isEmployee = await new QueryExecutor().query({ badge });

            if (isEmployee.length <= 0) {
                apiResponse.message = message.userNotFound;
                return apiResponse;
            }

            apiResponse.message = message.success;
            return apiResponse;

        } catch (error) {
            apiResponse.message = message.error;
            return apiResponse;
        }
    }
}
