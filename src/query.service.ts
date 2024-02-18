import { PrismaClient } from "@prisma/client";
import { EnvVariables } from "./utils.env";

interface IValues {
    badge: string;
}

export class QueryExecutor {

    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async query(params: IValues) {

        const env = new EnvVariables();
        const { badgeEmployeeNameColumn, badgeColumn, tableBadge } = env;

        const variables = {
            employee: '',
        }

        const variablesInacess = {
            badgeCode: badgeColumn,
        }

        const table = this.prisma[tableBadge];
        const str = { select: { [badgeColumn]: true, [badgeEmployeeNameColumn]: true, }, where: { [badgeColumn]: params.badge } };
        const result = await table.findMany(str);

        for (const obj of result) {
            for (const key in obj) {
                variables.employee = key === badgeEmployeeNameColumn ? obj[key] : '';
            }
        }

        return [variables];
    }

}