import { useAuth } from '@hooks/use-auth';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';

export interface AuthProps {
  children: any;
}

export function Auth({ children }: AuthProps) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();

  useEffect(() => {
    if (!firstLoading && !profile?.username) router.push('/login');
  }, [firstLoading, router, profile]);

  if (!profile?.username) return <div>loading</div>;
  return <div>{children}</div>;
}
