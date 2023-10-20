import { getDatabase } from '../database';

export class ItemsService {
  private knex: any;

  constructor(options) {
    this.knex = getDatabase();
  }

  async readOne(keys: [], query: {}) {
    const fields = query.fields ?? 'id';
    const _keys = keys.split(',');

    return this.knex.select(fields).from('user').whereIn('id', _keys);
  }
}
