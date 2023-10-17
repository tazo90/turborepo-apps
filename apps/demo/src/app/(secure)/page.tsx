'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { useUserService } from '@/services';
import { Spinner } from '@/components';

export default Home;

function Home() {
  const userService = useUserService();
  const user = userService.currentUser;

  useEffect(() => {
    userService.getCurrent();
  }, []);

  if (user) {
    return (
      <>
        <h1>Hi {user.firstName}!</h1>
        <p>You&apos;re logged in with Next.js & JWT!!</p>
        <p>
          <Link href='/users'>Manage Users</Link>
        </p>
      </>
    );
  } else {
    return <Spinner />;
  }
}
