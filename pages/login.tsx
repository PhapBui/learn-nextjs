import { authAPi } from '@/api';
import { LoginForm } from '@components/auth';
import { useAuth } from '@hooks/use-auth';
import { LoginPayLoad } from '@models/auth';
import { Box, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  const router = useRouter();

  async function handleLoginSubmitClick(payload: LoginPayLoad) {
    try {
      await login(payload);
    } catch (error) {
      console.log('Failed to login: ', error);
    }
  }

  return (
    <Box>
      <Paper elevation={4} sx={{ mt: 4, p: 2, mx: 'auto', maxWidth: '480px', textAlign: 'center' }}>
        <Typography component={'h1'} variant="h3">
          Login Page
        </Typography>
        <LoginForm onSubmit={handleLoginSubmitClick} />
      </Paper>
    </Box>
  );
}
