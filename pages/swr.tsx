import { StudentDetail } from '@components/swr';
import React, { useState } from 'react';

export interface SWRProps {}

export default function SWR(props: SWRProps) {
  const [detailList, setDetailList] = useState([]);
  return (
    <div>
      <h2>Students List</h2>
      <ul>
        <li>
          <StudentDetail studentId="lea2aa9l7x3a5v0" />
        </li>
        <li>
          <StudentDetail studentId="lea2aa9l7x3a5v1" />
        </li>
        <li>
          <StudentDetail studentId="lea2aa9l7x3a5v2" />
        </li>
      </ul>
    </div>
  );
}
