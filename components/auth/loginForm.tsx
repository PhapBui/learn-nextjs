import { InputField } from '@components/form';
import { LoginPayLoad } from '@models/auth';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export interface LoginFormProps {
  onSubmit?: (payload: LoginPayLoad) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [showPassword, setShowPasswork] = useState(false);

  const { control, handleSubmit } = useForm<LoginPayLoad>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  function handleLoginSubmit(payload: LoginPayLoad) {
    console.log(payload);
    onSubmit?.(payload);
  }

  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name="username" control={control} />
      <InputField
        type={showPassword ? 'text' : 'password'}
        name="password"
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
      <Button type="submit">Login</Button>
    </Box>
  );
}
