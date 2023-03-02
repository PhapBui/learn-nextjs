import { authAPi } from '@/api';
import { LoginForm } from '@components/auth';
import { useAuth } from '@hooks/use-auth';
import { LoginPayLoad } from '@models/auth';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  const router = useRouter();

  async function handleLoginClick() {
    try {
      await login({
        username: 'kakaka',
        password: '123kiasd',
      });
    } catch (error) {}
  }
  async function handleLoginSubmitClick(payload: LoginPayLoad) {
    try {
      await login(payload);
    } catch (error) {}
  }
  async function handleLogOutClick() {
    try {
      await logout();
    } catch (error) {}
  }
  async function handleGetProfileClick() {
    try {
      await authAPi.getProfile();
    } catch (error) {}
  }

  return (
    <div>
      Login Page
      <h2>Profile</h2>
      <LoginForm onSubmit={handleLoginSubmitClick} />
      <p>{JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogOutClick}>Logout</button>
      <button onClick={() => router.push('/about')}>Go About</button>
    </div>
  );
}
