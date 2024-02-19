import { PrismaService } from "./prisma.service";
import { QueryStrings } from "./utils.query.strings";

interface IValues {
    badge: string;
}

// const y = await this.prisma.history_pointed.findMany({ select: { odfNumber: true }, where: { odfNumber: 2124340 } });
export class QueryExecutor {

    constructor() { }

    private prisma = new PrismaService();
    private strQuery = new QueryStrings({ odfNumber: 2124340, opNumber: 30 });

    async query(params: IValues) {

        const response = { employee: '' };

        try {
            const strQueryAlocation = `${this.strQuery.partsAlocation}`;
            const x = await this.prisma.$queryRaw`${strQueryAlocation}`


            const result = await this.prisma.employees.findMany({ select: { badge: true, employee: true }, where: { badge: params.badge } });

            if (result.length <= 0) {
                return null;
            }

            response.employee = result[0].employee;

        } catch (error) {
            console.log("Error", error)
        } finally {
            this.prisma.$disconnect();
        }

        return [response];
    }

}