export class EnvVariables {

    constructor() { };

    public readonly badgeColumn = process.env['BADGE_COLUMN'];
    public readonly badgeEmployeeNameColumn = process.env['BADGE_EMPLOYEE_NAME_COLUMN'];
    public readonly tableBadge = process.env['BADGE_TABLE'];

}