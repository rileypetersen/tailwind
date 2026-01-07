import { forwardRef } from 'react'

import { classNames } from '../../lib/utils'

export type InputSize = 'sm' | 'md' | 'lg'

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: InputSize
  invalid?: boolean
}

const base =
  // Base field styling aligned with Tailwind Plus Application UI form controls
  'block w-full rounded-md bg-white text-gray-900 shadow-xs inset-ring inset-ring-gray-300 outline-hidden placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:placeholder:text-gray-500 dark:focus-visible:outline-indigo-400 dark:disabled:bg-white/5 dark:disabled:text-white/60'

const sizes: Record<InputSize, string> = {
  sm: 'px-2.5 py-1.5 text-sm/6',
  md: 'px-3 py-2 text-sm/6',
  lg: 'px-3.5 py-2.5 text-base/6 sm:text-sm/6',
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, size = 'md', invalid = false, type = 'text', ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      aria-invalid={invalid || undefined}
      className={classNames(
        base,
        sizes[size],
        invalid &&
          'inset-ring-red-300 focus-visible:outline-red-600 dark:inset-ring-red-500/40 dark:focus-visible:outline-red-400',
        className,
      )}
      {...props}
    />
  )
})


