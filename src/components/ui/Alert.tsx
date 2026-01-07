import { forwardRef } from 'react'
import type { ComponentType, SVGProps } from 'react'

import { classNames } from '../../lib/utils'

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger'

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string
  variant?: AlertVariant
  icon?: ComponentType<SVGProps<SVGSVGElement>>
}

const base = 'rounded-md p-4'

const variants: Record<
  AlertVariant,
  { root: string; title: string; body: string; icon: string }
> = {
  info: {
    root: 'bg-blue-50 text-blue-900 dark:bg-blue-500/10 dark:text-blue-100',
    title: 'text-blue-900 dark:text-blue-100',
    body: 'text-blue-800/90 dark:text-blue-200/90',
    icon: 'text-blue-600 dark:text-blue-300',
  },
  success: {
    root: 'bg-green-50 text-green-900 dark:bg-green-500/10 dark:text-green-100',
    title: 'text-green-900 dark:text-green-100',
    body: 'text-green-800/90 dark:text-green-200/90',
    icon: 'text-green-600 dark:text-green-300',
  },
  warning: {
    root: 'bg-yellow-50 text-yellow-900 dark:bg-yellow-500/10 dark:text-yellow-100',
    title: 'text-yellow-900 dark:text-yellow-100',
    body: 'text-yellow-800/90 dark:text-yellow-200/90',
    icon: 'text-yellow-600 dark:text-yellow-300',
  },
  danger: {
    root: 'bg-red-50 text-red-900 dark:bg-red-500/10 dark:text-red-100',
    title: 'text-red-900 dark:text-red-100',
    body: 'text-red-800/90 dark:text-red-200/90',
    icon: 'text-red-600 dark:text-red-300',
  },
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { className, title, variant = 'info', icon: Icon, children, ...props },
  ref,
) {
  const v = variants[variant]

  return (
    <div ref={ref} role="status" className={classNames(base, v.root, className)} {...props}>
      <div className="flex gap-3">
        {Icon ? (
          <div className="shrink-0">
            <Icon aria-hidden="true" className={classNames('size-5', v.icon)} />
          </div>
        ) : null}

        <div className="grid gap-1">
          {title ? <div className={classNames('text-sm font-medium', v.title)}>{title}</div> : null}
          {children ? <div className={classNames('text-sm', v.body)}>{children}</div> : null}
        </div>
      </div>
    </div>
  )
})


