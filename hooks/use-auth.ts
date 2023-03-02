import { authAPi } from './../api-client/auth-api';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/_internal';
import { LoginPayLoad } from '@models/auth';

export function useAuth(option?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInteval: 3600000,
    revalidateOnFocus: false,
    ...option,
  });

  const firstLoading = profile === undefined && error === undefined;

  async function login(payload: LoginPayLoad) {
    console.log(payload);

    await authAPi.login(payload);

    await mutate();
  }
  async function logout() {
    await authAPi.logout();
    mutate({}, false);
  }
  console.log(profile);

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
