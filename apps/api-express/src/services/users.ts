// import prisma from '../database/prisma';
import { getDatabase } from '../database';
import { ItemsService } from './items';

function sanitizeQuery(query) {
  const q: any = {};

  if (query.fields) {
    q.fields = query.fields.split(',').map((i) => i.toString());
  }

  return q;
}

export class UsersService extends ItemsService {
  // private knex: any;

  // constructor(options) {
  //   this.knex = getDatabase();
  //   // this.prisma = prisma;
  // }

  public async getUserById(
    id: number,
    query: any,
  ): Promise<{ id: string; status: string }> {
    // const users = await prisma.user.findMany()
    // const users = await this.knex
    //   .select('id', 'name')
    //   .from('user')
    //   .where('id', '=', id);
    const q = sanitizeQuery(query);

    const users = await this.readOne(id, q);

    return users;
  }
}
