'use client'

import { useId } from 'react'

import { classNames } from '../../lib/utils'

export type FieldRowRenderProps = {
  id: string
  labelId: string
  describedBy?: string
  invalid: boolean
  disabled: boolean
}

export type FieldRowProps = {
  label: string
  description?: string
  error?: string
  disabled?: boolean
  /**
   * Provide a stable id for SSR / form integrations. If omitted, one is generated.
   */
  id?: string
  className?: string
  /**
   * Render your actual control (Checkbox/Switch/etc).
   *
   * Example (Checkbox):
   * `({ id, describedBy, invalid }) => <Checkbox id={id} aria-describedby={describedBy} invalid={invalid} />`
   *
   * Example (Switch):
   * `({ labelId, describedBy }) => <Switch aria-labelledby={labelId} aria-describedby={describedBy} />`
   */
  control: (props: FieldRowRenderProps) => React.ReactNode
}

export function FieldRow({ label, description, error, disabled = false, id: idProp, className, control }: FieldRowProps) {
  const reactId = useId()
  const id = idProp ?? `field-${reactId}`

  const labelId = `${id}-label`
  const descriptionId = description ? `${id}-description` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [descriptionId, errorId].filter(Boolean).join(' ') || undefined
  const invalid = Boolean(error)

  return (
    <div className={classNames('flex gap-3', className)}>
      <div className="flex h-6 shrink-0 items-center">{control({ id, labelId, describedBy, invalid, disabled })}</div>

      <div className="min-w-0 text-sm/6">
        <div id={labelId} className="font-medium text-gray-900 dark:text-white">
          {label}
        </div>
        {description ? (
          <div id={descriptionId} className="text-gray-500 dark:text-gray-400">
            {description}
          </div>
        ) : null}
        {error ? (
          <div id={errorId} className="text-red-600 dark:text-red-400">
            {error}
          </div>
        ) : null}
      </div>
    </div>
  )
}


