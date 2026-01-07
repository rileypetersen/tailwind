import { forwardRef } from 'react'

import { classNames } from '../../lib/utils'

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger'
export type BadgeSize = 'sm' | 'md'

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
  size?: BadgeSize
}

const base = 'inline-flex items-center rounded-md font-medium ring-1 ring-inset'

const variants: Record<BadgeVariant, string> = {
  neutral: 'bg-gray-50 text-gray-700 ring-gray-600/10 dark:bg-white/5 dark:text-white/80 dark:ring-white/10',
  primary: 'bg-indigo-50 text-indigo-700 ring-indigo-600/10 dark:bg-indigo-500/10 dark:text-indigo-300 dark:ring-indigo-400/20',
  success: 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-300 dark:ring-green-400/20',
  warning: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-500/10 dark:text-yellow-200 dark:ring-yellow-400/20',
  danger: 'bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-500/10 dark:text-red-300 dark:ring-red-400/20',
}

const sizes: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, variant = 'neutral', size = 'md', ...props },
  ref,
) {
  return <span ref={ref} className={classNames(base, variants[variant], sizes[size], className)} {...props} />
})


