import { PrismaService } from "./prisma.service";

interface IValues {
    badge: string;
}

export class QueryExecutor {

    private prisma = new PrismaService();
    constructor() { }

    async query(params: IValues) {

        const response = { employee: '' };

        try {
            const x = await this.prisma.employees.findMany({ select: { badge: true, employee: true }, where: { badge: params.badge } });
            console.log("x", x);

            response.employee = x[0].employee;

            // const y = await this.prisma.history_pointed.findMany({ select: { odfNumber: true }, where: { odfNumber: 2124340 } });
            // console.log("ye", y)
            return [response]
        } catch (error) {
            console.log("Error", error)
        }

        return [response]
    }

}