import { InputField } from '@components/form';
import { LoginPayLoad } from '@models/auth';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, CircularProgress, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
export interface LoginFormProps {
  onSubmit?: (payload: LoginPayLoad) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required('Please enter username')
      .min(4, 'Username is required to have at least 4 characters'),
    password: yup
      .string()
      .required('Please enter password')
      .min(6, 'Password is required to have at least 4 characters'),
  });

  const [showPassword, setShowPasswork] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<LoginPayLoad>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  async function handleLoginSubmit(payload: LoginPayLoad) {
    await onSubmit?.(payload);
  }

  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name="username" label="User name" control={control} />
      <InputField
        type={showPassword ? 'text' : 'password'}
        name="password"
        label="Password"
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPasswork((x) => !x)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        startIcon={isSubmitting && <CircularProgress />}
        disabled={isSubmitting}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ my: 2 }}
      >
        Login
      </Button>
    </Box>
  );
}
