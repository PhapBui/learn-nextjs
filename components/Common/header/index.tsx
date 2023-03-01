import * as React from 'react';
import { HeaderDesktop } from './headerDesktop';
import { HeaderMobile } from './headerMobile';

export interface HeaderProps {}

export function Header() {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
}
