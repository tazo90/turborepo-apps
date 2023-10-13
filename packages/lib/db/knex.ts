import knex from 'knex';

let cached = global.pg;

if (!cached) {
  cached = global.pg = {};
}

export function getKnex(databaseUrl: string) {
  if (!cached.instance) {
    cached.instance = knex({
      client: 'pg',
      connection: databaseUrl,
    });
  }

  return cached.instance;
}
