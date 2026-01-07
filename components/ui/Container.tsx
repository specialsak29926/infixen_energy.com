'use client'

import { clsx } from 'clsx'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto w-full px-6 md:px-8 lg:px-12',
        {
          'max-w-7xl': size === 'default',
          'max-w-5xl': size === 'narrow',
          'max-w-8xl': size === 'wide',
        },
        className
      )}
    >
      {children}
    </div>
  )
}
