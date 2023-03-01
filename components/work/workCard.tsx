import { Work } from '@models/work';
import { Chip } from '@mui/material';
import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import { format } from 'date-fns';
import { Divider } from '@mui/material';

export interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Stack direction={{ md: 'row', xs: 'column' }} spacing={2}>
      <Box width={{ xs: '100%', md: '246px' }} flexShrink={0} borderRadius={2} overflow="hidden">
        <Image
          src={work.thumbnailUrl}
          alt={work.title}
          layout="responsive"
          width={246}
          height={180}
        />
      </Box>
      <Box>
        <Typography component="h3" variant="h5" fontWeight="medium" py={1}>
          {work.title}
        </Typography>

        <Stack direction="row" my={2}>
          <Chip color="secondary" label={format(Number(work.createdAt), 'yyyy')} size="small" />
          <Typography ml={3} color="GrayText">
            {work.tagList?.join(', ')}
          </Typography>
        </Stack>

        <Typography color={'#333'}>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}
