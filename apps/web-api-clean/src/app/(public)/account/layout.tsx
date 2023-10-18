import { redirect } from 'next/navigation';

import { auth } from '@/lib/server';
import { Alert } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  // if logged in redirect to home page
  if (auth.isAuthenticated()) {
    redirect('/');
  }

  return (
    <>
      <Alert />
      <div className='col-md-6 offset-md-3 mt-5'>{children}</div>
    </>
  );
}
