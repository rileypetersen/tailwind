'use client'

import { forwardRef, useEffect, useRef } from 'react'

import { classNames } from '../../lib/utils'

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  invalid?: boolean
  indeterminate?: boolean
}

const base =
  // Custom checkbox control aligned with Tailwind Plus Application UI form controls
  'peer block size-4 appearance-none rounded bg-white shadow-xs inset-ring inset-ring-gray-300 outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 checked:bg-indigo-600 checked:inset-ring-indigo-600 indeterminate:bg-indigo-600 indeterminate:inset-ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-60 dark:bg-white/10 dark:shadow-none dark:inset-ring-white/5 dark:focus-visible:outline-indigo-400 dark:checked:bg-indigo-500 dark:checked:inset-ring-indigo-500 dark:indeterminate:bg-indigo-500 dark:indeterminate:inset-ring-indigo-500 dark:disabled:bg-white/5'

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { className, invalid = false, indeterminate = false, ...props },
  forwardedRef,
) {
  const internalRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (!internalRef.current) return
    internalRef.current.indeterminate = Boolean(indeterminate)
  }, [indeterminate])

  return (
    <span className="relative inline-flex size-4 shrink-0">
      <input
        ref={(node) => {
          internalRef.current = node
          if (typeof forwardedRef === 'function') forwardedRef(node)
          else if (forwardedRef) forwardedRef.current = node
        }}
        type="checkbox"
        aria-invalid={invalid || undefined}
        className={classNames(
          base,
          invalid &&
            'inset-ring-red-300 focus-visible:outline-red-600 checked:bg-red-600 checked:inset-ring-red-600 indeterminate:bg-red-600 indeterminate:inset-ring-red-600 dark:inset-ring-red-500/40 dark:focus-visible:outline-red-400 dark:checked:bg-red-500 dark:checked:inset-ring-red-500 dark:indeterminate:bg-red-500 dark:indeterminate:inset-ring-red-500',
          className,
        )}
        {...props}
      />

      {/* Check */}
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="pointer-events-none absolute inset-0 m-auto size-3 text-white opacity-0 peer-checked:opacity-100 peer-indeterminate:opacity-0"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0Z"
          clipRule="evenodd"
        />
      </svg>

      {/* Indeterminate */}
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="pointer-events-none absolute inset-0 m-auto size-3 text-white opacity-0 peer-indeterminate:opacity-100"
      >
        <path fill="currentColor" d="M4 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
      </svg>
    </span>
  )
})


