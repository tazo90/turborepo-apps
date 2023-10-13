## Prisma

- Generate client
npx prisma generate

- Create migration
npx prisma migrate dev --name init

- Prisma studio
npx prisma studio

## Database 

- Run database shell (REPL) via knex or prisma
`yarn db:shell` or `ts-node --transpile-only packages/lib/db/knex-shell.ts`

`await knex('User').select('id', 'name')`

## Knex

- Knex models
`https://itnext.io/crafting-database-models-with-knex-js-and-postgresql-b3a74e789794`

## Node modules

- Delete all node_modules in project
find . -path '*/node_modules/*' -delete