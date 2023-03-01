import * as React from 'react';
import { Typography, Icon, Stack, Box } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

export interface FooterProps {}

export function Footer(props: FooterProps) {
  const socialList = [
    { icon: Facebook, url: 'https://google.com.vn' },
    { icon: Instagram, url: 'https://google.com.vn' },
    { icon: Twitter, url: 'https://google.com.vn' },
    { icon: LinkedIn, url: 'https://google.com.vn' },
  ];

  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction={'row'} justifyContent="center">
        {socialList.map((item, idx) => (
          <Box
            component={'a'}
            key={idx}
            href={item.url}
            p={1}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon component={item.icon} fontSize="large" />
          </Box>
        ))}
      </Stack>
      <Typography>Copy right © {new Date().getFullYear()} All rights reserved</Typography>
    </Box>
  );
}
