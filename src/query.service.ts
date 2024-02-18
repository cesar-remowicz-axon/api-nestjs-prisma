import { PrismaClient } from "@prisma/client";
// import { PrismaService } from "./prisma.service";

interface IValues {
    badge: string;
}

export class QueryExecutor {

    // private prisma: PrismaService;
    // constructor(private prisma: PrismaService) { };

    async query(value: IValues) {
        const prisma = new PrismaClient();
        return await prisma.funcionarios.findMany({
            select: {
                CRACHA: true,
                FUNCIONARIO: true,
            },
            where: {
                CRACHA: value.badge,
            },
        });
    }

}