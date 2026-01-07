import { forwardRef } from 'react'

import { classNames } from '../../lib/utils'

export type TableContainerProps = React.HTMLAttributes<HTMLDivElement>
export const TableContainer = forwardRef<HTMLDivElement, TableContainerProps>(function TableContainer(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={classNames('overflow-x-auto', className)} {...props} />
})

export type TableProps = React.TableHTMLAttributes<HTMLTableElement>
export const Table = forwardRef<HTMLTableElement, TableProps>(function Table({ className, ...props }, ref) {
  return <table ref={ref} className={classNames('min-w-full divide-y divide-gray-200 dark:divide-white/10', className)} {...props} />
})

export type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>
export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(function TableHead({ className, ...props }, ref) {
  return <thead ref={ref} className={classNames('bg-gray-50 dark:bg-white/5', className)} {...props} />
})

export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement> & { striped?: boolean }
export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(function TableBody(
  { className, striped = false, ...props },
  ref,
) {
  return (
    <tbody
      ref={ref}
      className={classNames(
        'divide-y divide-gray-200 bg-white dark:divide-white/10 dark:bg-transparent',
        striped && '[&>tr:nth-child(even)]:bg-gray-50/50 dark:[&>tr:nth-child(even)]:bg-white/5',
        className,
      )}
      {...props}
    />
  )
})

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>
export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(function TableRow({ className, ...props }, ref) {
  return <tr ref={ref} className={classNames('hover:bg-gray-50/50 dark:hover:bg-white/5', className)} {...props} />
})

export type TableHeaderCellProps = React.ThHTMLAttributes<HTMLTableCellElement>
export const TableHeaderCell = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(function TableHeaderCell(
  { className, ...props },
  ref,
) {
  return (
    <th
      ref={ref}
      scope="col"
      className={classNames(
        'px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-300',
        className,
      )}
      {...props}
    />
  )
})

export type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>
export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(function TableCell({ className, ...props }, ref) {
  return <td ref={ref} className={classNames('px-4 py-3 text-sm text-gray-900 dark:text-white', className)} {...props} />
})


