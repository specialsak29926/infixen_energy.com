'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { buttonHover, buttonTap } from '@/lib/animations'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
  onClick?: () => void
  disabled?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles = clsx(
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full',
    'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background',
    {
      // Variants
      'bg-primary text-background hover:bg-primary-dark': variant === 'primary',
      'bg-surface-light text-text-primary hover:bg-surface border border-border':
        variant === 'secondary',
      'border border-border text-text-primary hover:bg-surface-light hover:border-text-muted':
        variant === 'outline',
      'text-text-secondary hover:text-text-primary hover:bg-surface-light': variant === 'ghost',
      // Sizes
      'px-4 py-2 text-sm': size === 'sm',
      'px-6 py-3 text-base': size === 'md',
      'px-8 py-4 text-lg': size === 'lg',
      // Disabled
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  )

  const MotionComponent = href ? motion.a : motion.button

  return (
    <MotionComponent
      href={href}
      onClick={disabled ? undefined : onClick}
      className={baseStyles}
      whileHover={disabled ? undefined : buttonHover}
      whileTap={disabled ? undefined : buttonTap}
      disabled={disabled}
    >
      {children}
    </MotionComponent>
  )
}
