import { getKnex } from './knex';

export function getDatabase() {
  const knex = getKnex(process.env.DATABASE_URL);

  return knex;
}
