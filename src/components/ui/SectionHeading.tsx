import { forwardRef } from 'react'

import { classNames } from '../../lib/utils'

export type SectionHeadingProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string
  description?: string
  actions?: React.ReactNode
}

export const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(function SectionHeading(
  { className, title, description, actions, ...props },
  ref,
) {
  return (
    <div ref={ref} className={classNames('flex items-start justify-between gap-4', className)} {...props}>
      <div className="min-w-0">
        <div className="text-base/7 font-semibold text-gray-900 dark:text-white">{title}</div>
        {description ? <div className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">{description}</div> : null}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </div>
  )
})


