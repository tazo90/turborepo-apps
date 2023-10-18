'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { AddEdit } from '@/components/users';
import { Spinner } from '@/components';
import { useUserService } from '@/services';

export default function Edit({ params: { id } }: any) {
  const router = useRouter();
  const userService = useUserService();
  const user = userService.user;

  useEffect(() => {
    if (!id) return;

    // fetch user for add/edit form
    userService.getById(id);
  }, [router]);

  return user ? <AddEdit title='Edit User' user={user} /> : <Spinner />;
}
