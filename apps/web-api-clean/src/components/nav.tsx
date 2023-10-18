'use client';

import { useState } from 'react';
import { NavLink } from './nav-link';
import { useUserService } from '@/services';

export function Nav() {
  const [loggingOut, setLoggingOut] = useState<boolean>(false);
  const userService = useUserService();

  async function logout() {
    setLoggingOut(false);
    await userService.logout();
  }

  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark px-3'>
      <div className='navbar-nav'>
        <NavLink href='/' exact className='nav-item nav-link'>
          Home
        </NavLink>
        <NavLink href='/users' className='nav-item nav-link'>
          Users
        </NavLink>
        <button
          onClick={logout}
          className='btn btn-link nav-item nav-link'
          style={{ width: '67px' }}
          disabled={loggingOut}
        >
          {loggingOut ? (
            <span className='spinner-border spinner-border-sm'></span>
          ) : (
            <span>Logout</span>
          )}
        </button>
      </div>
    </nav>
  );
}
