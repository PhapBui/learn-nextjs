import { LayoutProps } from '@models/common'
import * as React from 'react'

export interface EmptyLayoutProps {}

export  function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>
}
