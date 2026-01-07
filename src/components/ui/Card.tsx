import { forwardRef } from 'react'

import { classNames } from '../../lib/utils'

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  padded?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card({ className, padded = true, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={classNames(
        'rounded-lg bg-white shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:inset-ring dark:inset-ring-white/10',
        padded && 'p-6',
        className,
      )}
      {...props}
    />
  )
})

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(function CardHeader({ className, ...props }, ref) {
  return <div ref={ref} className={classNames('mb-4 flex items-start justify-between gap-4', className)} {...props} />
})

export type CardTitleProps = React.HTMLAttributes<HTMLDivElement>
export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(function CardTitle({ className, ...props }, ref) {
  return <div ref={ref} className={classNames('text-base font-semibold text-gray-900 dark:text-white', className)} {...props} />
})

export type CardDescriptionProps = React.HTMLAttributes<HTMLDivElement>
export const CardDescription = forwardRef<HTMLDivElement, CardDescriptionProps>(function CardDescription(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={classNames('mt-1 text-sm text-gray-600 dark:text-gray-400', className)} {...props} />
})

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(function CardFooter({ className, ...props }, ref) {
  return <div ref={ref} className={classNames('mt-6 flex items-center justify-end gap-3', className)} {...props} />
})


