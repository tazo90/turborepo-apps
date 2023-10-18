'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAlertService } from '@/services';

export function Alert() {
  const pathname = usePathname();
  const alertService = useAlertService();
  const alert = alertService.alert;

  useEffect(() => {
    alertService.clear();
  }, [pathname]);

  if (!alert) return null;

  return (
    <div className='container'>
      <div className='m-3'>
        <div className={`alert alert-dismissible ${alert.type}`}>
          {alert.message}
          <button
            type='button'
            className='btn-close'
            onClick={alertService.clear}
          ></button>
        </div>
      </div>
    </div>
  );
}
