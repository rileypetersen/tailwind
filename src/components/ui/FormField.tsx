'use client'

import { useId } from 'react'

import { classNames } from '../../lib/utils'

export type FormFieldRenderProps = {
  id: string
  describedBy?: string
  invalid: boolean
  disabled: boolean
}

export type FormFieldProps = {
  label?: string
  description?: string
  error?: string
  required?: boolean
  disabled?: boolean
  /**
   * Provide a stable id for SSR / form integrations. If omitted, one is generated.
   */
  id?: string
  className?: string
  /**
   * Render your actual control. You receive `id`, `describedBy`, etc.
   *
   * Example:
   * `({ id, describedBy, invalid }) => <Input id={id} aria-describedby={describedBy} invalid={invalid} />`
   */
  children: (props: FormFieldRenderProps) => React.ReactNode
}

export function FormField({
  label,
  description,
  error,
  required = false,
  disabled = false,
  id: idProp,
  className,
  children,
}: FormFieldProps) {
  const reactId = useId()
  const id = idProp ?? `field-${reactId}`

  const descriptionId = description ? `${id}-description` : undefined
  const errorId = error ? `${id}-error` : undefined

  const describedBy = [descriptionId, errorId].filter(Boolean).join(' ') || undefined
  const invalid = Boolean(error)

  return (
    <div className={classNames('grid gap-1.5', className)}>
      {label ? (
        <label htmlFor={id} className="text-sm font-medium text-gray-900 dark:text-white">
          {label}
          {required ? <span className="ml-1 text-red-600 dark:text-red-400">*</span> : null}
        </label>
      ) : null}

      {children({ id, describedBy, invalid, disabled })}

      {description ? (
        <div id={descriptionId} className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </div>
      ) : null}
      {error ? (
        <div id={errorId} className="text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
      ) : null}
    </div>
  )
}


