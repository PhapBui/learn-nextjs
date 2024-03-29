import { Work } from '@models/work';
import * as React from 'react';
import { Box, Divider } from '@mui/material';
import { Fragment } from 'react';
import Image from 'next/image';
import { WorkCard } from './workCard';

export interface WorkListProps {
  workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
  if (workList.length === 0) return null;
  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </Box>
  );
}
