import * as React from 'react';
import useSWR from 'swr';

export interface StudentDetailProps {
  studentId: string;
}

const MILISECOND_PER_HOUR = 60 * 60 * 1000;

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: MILISECOND_PER_HOUR,
  });

  function handleMutateClick() {
    mutate({ name: 'Tzuyu' }, true);
  }

  return (
    <div>
      name: {data?.name || '--'} <button onClick={handleMutateClick}>mutate</button>
    </div>
  );
}
