import * as React from 'react';
import { Box } from '@mui/system';

export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <Box component="footer" py={2}>
      Cho nay co footer
    </Box>
  );
}
