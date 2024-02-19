export class EnvVariables {

    constructor() { };

    private env = process.env;

    public readonly mode = this.env['MODE'];
    public readonly alocationTable = this.env['ALOCATION_TABLE'];
    public readonly odfNumberColumn = this.env['ODF_NUMBER_COLUMN'];

}