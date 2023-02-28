import { authAPi } from '@api/auth-api';
import * as React from 'react';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  async function handleLoginClick() {
    try {
      await authAPi.login({
        username: 'asdasd',
        password: 'asdkqwej',
      });
    } catch (error) {}
  }
  async function handleLogOutClick() {
    try {
      await authAPi.logout();
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
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogOutClick}>Logout</button>
      <button onClick={handleGetProfileClick}>profile</button>
    </div>
  );
}
