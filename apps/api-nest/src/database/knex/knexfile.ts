const knexConfig = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: './knex_migrations',
    },
  },
};

module.exports = knexConfig;
