import { forwardRef } from 'react'

import { classNames } from '../../lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const base =
  'inline-flex items-center justify-center rounded-md font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<ButtonVariant, string> = {
  // Matches Tailwind Plus Application UI button styling patterns closely
  primary:
    'bg-indigo-600 text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-400',
  secondary:
    'bg-white text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20',
  danger:
    'bg-red-600 text-white shadow-xs hover:bg-red-500 focus-visible:outline-red-600 dark:shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.2),0_1px_2px_0_rgb(0_0_0_/_0.05)]',
  ghost: 'bg-transparent text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/10',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-sm',
  lg: 'px-3.5 py-2.5 text-sm',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'primary', size = 'md', type = 'button', ...props },
  ref,
) {
  return <button ref={ref} type={type} className={classNames(base, variants[variant], sizes[size], className)} {...props} />
})


