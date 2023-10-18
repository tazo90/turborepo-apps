import { getKnex } from 'lib/db/knex';

console.log('KNEX LOCAL', process.env.DATABASE_URL);
export default getKnex(process.env.DATABASE_URL);
