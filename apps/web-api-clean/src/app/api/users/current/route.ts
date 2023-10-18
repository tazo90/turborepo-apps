import { usersRepo } from '@/repositories';
import { apiHandler } from '@/lib/server/api';

module.exports = apiHandler({
  GET: getCurrent,
});

async function getCurrent() {
  return await usersRepo.getCurrent();
}
