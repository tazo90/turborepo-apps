// Ref: https://medium.com/@sobinsunny/orm-console-with-repl-961ee264ed93

import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import repl from 'repl';

import { getKnex } from './knex';

const DATABASE_URL =
  'postgresql://gishere:gishere@localhost:5450/gishere_db_stage?schema=public';

dotenv.config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
});

const knex = getKnex(DATABASE_URL);
// const setupPaginator = require('knex-paginator');
// setupPaginator(Knex);

const r = repl.start('Shell> ');
const run = async () => {
  r.context.knex = await knex;
  r.context.prisma = await prisma;
};

run();
