'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useAlertService, useUserService } from '@/services';

export function AddEdit({ title, user }: { title: string; user?: any }) {
  const router = useRouter();
  const alertService = useAlertService();
  const userService = useUserService();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: user,
  });
  const { errors } = formState;

  const fields = {
    fieldName: register('firstName', { required: 'First Name is required' }),
    lastName: register('lastName', { required: 'Last name is required ' }),
    username: register('username', { required: 'Username is required' }),
    password: register('password', {
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters',
      },
      // password only required in add mode
      validate: (value) =>
        !user && !value ? 'Password is required' : undefined,
    }),
  };

  async function onSubmit(data: any) {
    alertService.clear();

    try {
      let message;

      if (user) {
        await userService.update(user.id, data);
        message = 'User updated';
      } else {
        await userService.create(data);
        message = 'User added';
      }

      router.push('/users');
      alertService.success(message, true);
    } catch (error: any) {
      alertService.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{title}</h1>
      <div className='row'>
        <div className='mb-3 col'>
          <label className='form-label'>First Name</label>
          <input
            {...fields.firstName}
            type='text'
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
          />
          <div className='invalid-feedback'>
            {errors.lastName?.message?.toString()}
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='mb-3 col'>
          <label className='form-label'>Username</label>
          <input
            {...fields.username}
            type='text'
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          <div className='invalid-feedback'>
            {errors.username?.message?.toString()}
          </div>
        </div>
        <div className='mb-3 col'>
          <label className='form-label'>
            Password
            {user && (
              <em className='ms-1'>(Leave blank to keep the same password)</em>
            )}
          </label>
          <input
            {...fields.password}
            type='password'
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className='invalid-feedback'>
            {errors.password?.message?.toString()}
          </div>
        </div>
      </div>
      <div className='mb-3'>
        <button
          type='submit'
          disabled={formState.isSubmitting}
          className='btn btn-primary me-2'
        >
          {formState.isSubmitting && (
            <span className='spinner-border spinner-border-sm me-1'></span>
          )}
          Save
        </button>
        <button
          onClick={() => reset()}
          type='button'
          disabled={formState.isSubmitting}
          className='btn btn-secondary'
        >
          Reset
        </button>
        <Link href='/users' className='btn btn-link'>
          Cancel
        </Link>
      </div>
    </form>
  );
}
