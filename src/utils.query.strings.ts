import { EnvVariables } from "./utils.env";

interface IQueryParams {
    odfNumber: number;
    opNumber: number;
}

export class QueryStrings {

    constructor(private params: IQueryParams) { };

    private env = new EnvVariables();

    public partsAlocation = `SELECT DISTINCT 
        PCP.${this.env.odfNumberColumn} AS odfNumber, 
        OP.NUMITE AS part, 
        OP.NUMSEQ AS opNumber, 
        CAST(LTRIM(OP.NUMOPE) AS INT) AS op, 
        CAST(OP.EXECUT AS INT) AS needForExecution,
        CAST(E.SALDOREAL AS INT) AS storage, 
        CAST(((E.SALDOREAL - COALESCE(
                (SELECT COALESCE(SUM(QUANTIDADE),0) 
                FROM ${this.env.alocationTable} CA
                WHERE CA.CODIGO_FILHO = E.CODIGO AND CA.ODF = PCP.${this.env.odfNumberColumn}), 0)
            ) / COALESCE(OP.EXECUT, 0)) AS INT
        ) AS QTD_LIBERADA_PRODUZIR,
        COALESCE(
            (SELECT COALESCE(SUM(QUANTIDADE),0) 
            FROM ${this.env.alocationTable} CA 
            WHERE CA.CODIGO_FILHO = E.CODIGO AND CA.ODF = PCP.${this.env.odfNumberColumn}), 0
        ) AS reserved
    FROM PROCESSO PRO 
    INNER JOIN OPERACAO OP ON OP.RECNO_PROCESSO = PRO.R_E_C_N_O_
    INNER JOIN ESTOQUE E ON E.CODIGO = OP.NUMITE 
    INNER JOIN PCP_PROGRAMACAO_PRODUCAO PCP ON PCP.CODIGO_PECA = OP.NUMPEC
    WHERE 1 = 1 
        AND PRO.ATIVO ='S' 
        AND PRO.CONCLUIDO ='T' 
        AND OP.CONDIC ='P' 
        AND PCP.${this.env.odfNumberColumn} = ${this.params.odfNumber}
        AND OP.NUMSEQ = ${this.params.opNumber};`


}