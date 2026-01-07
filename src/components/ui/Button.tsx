import { forwardRef } from 'react'

import { classNames } from '../../lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary px-3 py-2 text-primary-fg hover:bg-primary/90',
  secondary: 'bg-white px-3 py-2 text-fg ring-1 ring-inset ring-black/10 hover:bg-black/5',
  danger: 'bg-danger px-3 py-2 text-danger-fg hover:bg-danger/90',
  ghost: 'bg-transparent px-3 py-2 text-fg hover:bg-black/5',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'text-sm',
  md: 'text-sm',
  lg: 'text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'primary', size = 'md', type = 'button', ...props },
  ref,
) {
  return <button ref={ref} type={type} className={classNames(base, variants[variant], sizes[size], className)} {...props} />
})


