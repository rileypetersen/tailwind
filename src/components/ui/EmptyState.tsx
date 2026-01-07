import { forwardRef } from 'react'
import type { ComponentType, SVGProps } from 'react'

import { classNames } from '../../lib/utils'

export type EmptyStateProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string
  description?: string
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  action?: React.ReactNode
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(function EmptyState(
  { className, title, description, icon: Icon, action, ...props },
  ref,
) {
  return (
    <div ref={ref} className={classNames('text-center', className)} {...props}>
      {Icon ? (
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-gray-50 dark:bg-white/5">
          <Icon aria-hidden="true" className="size-6 text-gray-400 dark:text-gray-500" />
        </div>
      ) : null}
      <div className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">{title}</div>
      {description ? <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</div> : null}
      {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
    </div>
  )
})


