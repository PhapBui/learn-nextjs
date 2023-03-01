import { Link as MuiLink } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Link from 'next/link';
import { ROUTE_LIST } from './routes';
import { useRouter } from 'next/router';
import clsx from 'clsx';
export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
  const router = useRouter();

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Stack direction={'row'} justifyContent="flex-end">
        {ROUTE_LIST.map((route) => (
          <Link key={route.path} href={route.path} passHref>
            <MuiLink
              sx={{ ml: 2, fontWeight: 'medium' }}
              className={clsx({ active: router.pathname === route.path })}
            >
              {route.label}
            </MuiLink>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}