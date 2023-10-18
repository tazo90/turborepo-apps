import { cookies } from 'next/headers';

import { apiHandler } from '@/lib/server/api';

module.exports = apiHandler({
  POST: logout,
});

function logout() {
  cookies().delete('authorization');
}
