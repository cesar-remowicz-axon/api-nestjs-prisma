import { PrismaService } from "./prisma.service";

interface IValues {
    badge: string;
}

interface IQueryResponse {
    employee: string;
    badge: string;
}

export class QueryExecutor {

    private prisma = new PrismaService();
    constructor() { }

    async query(params: IValues) {

        const respose = { employee: '' }

        try {
            const x = await this.prisma.employees.findMany({ select: { badge: true, employee: true }, where: { badge: params.badge } });
            console.log("x", x)

            respose.employee = x[0].employee;

            // const y = await this.prisma.history_pointed.findMany({ select: { odfNumber: true }, where: { odfNumber: 2124340 } });
            // console.log("ye", y)
            return [respose]
        } catch (error) {
            console.log("Error", error)
        }

        return [respose]
    }

}