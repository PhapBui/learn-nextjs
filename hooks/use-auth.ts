import { authAPi } from './../api-client/auth-api';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/_internal';

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

  async function login() {
    await authAPi.login({
      username: 'kakaka',
      password: '123kiasd',
    });

    await mutate();
  }
  async function logout() {
    await authAPi.logout();
    mutate({}, false);
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
