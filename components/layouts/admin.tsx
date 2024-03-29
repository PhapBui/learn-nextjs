import * as React from 'react';
import Link from 'next/link';
import { LayoutProps } from '@models/common';
import { Auth } from '@components/Common';

export interface AdminLayoutProps {}

export function AdminLayout({ children }: LayoutProps) {
  return (
    <Auth>
      <h1>Main layout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>About</a>
      </Link>
      <div>{children}</div>
    </Auth>
  );
}
