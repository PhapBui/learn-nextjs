import * as React from 'react';
import { Box } from '@mui/system';
import { Typography, Button, Container, Stack } from '@mui/material';
import Image from 'next/image';
import png from '@images/avatar.png';
export function HeroSection() {
  return (
    <Box component={'section'} pt={{ md: 18, xs: 4 }} pb={{ md: 9, xs: 7 }}>
      <Container>
        <Stack
          spacing={8}
          direction={{ md: 'row', xs: 'column-reverse' }}
          justifyContent={{ md: 'flex-start', xs: 'center' }}
          alignItems="center"
          textAlign={{ md: 'left', xs: 'center' }}
        >
          <Box>
            <Typography component={'h1'} variant="h3" fontWeight="bold" mb={{ md: 5, xs: 3.5 }}>
              Hi, I am Phap,
              <br /> Creative Technologist
            </Typography>
            <Typography mb={5}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button variant="contained">Download Resume</Button>
          </Box>

          <Box
            sx={{
              minWidth: '240px',
              boxShadow: '-5px 13px ',
              color: 'secondary.light',
              borderRadius: '50%',
            }}
          >
            <Image src={png} layout="responsive" alt="avatar" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
