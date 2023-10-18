// import prisma from 'lib/db/prisma'
import knex from '@/lib/db';

export async function GET() {
  const users = await knex('User').select('id', 'name');

  // const posts = await prisma.user.findMany({
  //   select: {
  //     id: true,
  //     name: true,
  //     email: true,
  //   },
  //   where: {
  //     id: 1
  //   },
  // })
  return new Response(JSON.stringify(users));
}
