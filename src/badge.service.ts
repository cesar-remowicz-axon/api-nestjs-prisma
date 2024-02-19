import { IApiResponse } from 'interfaces/interface.apiResponse';
import { QueryExecutor } from './query.service';
import { Injectable } from '@nestjs/common';
import { Message } from './utils.message';
import { Request } from 'express';

@Injectable()
export class BadgeService {

    constructor(private executor: QueryExecutor) { };

    async employee(req: Request): Promise<IApiResponse> {

        const apiResponse: IApiResponse = req.body;
        const { badge } = apiResponse;
        const message = new Message();

        try {
            const result = await this.executor.query({ badge });

            if (!result) {
                apiResponse.message = message.userNotFound;
                return apiResponse;
            }

            const { employee } = result[0];
            apiResponse.message = message.success;
            apiResponse.employee = employee;
            return apiResponse;

        } catch (error) {
            console.log("An error occurred in BadgeService.employee:", error)
            apiResponse.message = message.error;
            return apiResponse;
        }
    }
}
