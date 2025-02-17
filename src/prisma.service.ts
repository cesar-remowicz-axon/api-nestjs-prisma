import { Global, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
@Global()
export class PrismaService extends PrismaClient implements OnModuleInit {
    // constructor() {
    //     super();
    // };

    async onModuleInit() {
        await this.$connect();
    }

    // async enableShutdownHooks(app: INestApplication) {
    //     this.$on("beforeExit", async () => {
    //         await app.close()
    //     })
    // }

}