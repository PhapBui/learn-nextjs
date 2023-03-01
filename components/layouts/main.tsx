import { LayoutProps } from '@models/common';
import * as React from 'react';
import { Stack, Box, Container } from '@mui/system';
import { Footer, Header } from '@components/Common';

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight={'100vh'}>
      <Header />
      <Box component="main" flex={1}>
        <Container maxWidth="md">{children}</Container>
      </Box>

      <Footer />
    </Stack>
  );
}
