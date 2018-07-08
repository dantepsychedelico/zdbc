
import { DbClient, DbConfig } from '../abstract';
import { DB_TYPE } from '../../utils';

export class PgDbConfig implements DbConfig {
    database: DB_TYPE = DB_TYPE.postgres
    constructor(
        private _config: DbConfig
    ) {}
}
