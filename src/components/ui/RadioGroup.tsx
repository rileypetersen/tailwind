'use client'

import { forwardRef } from 'react'
import { RadioGroup as HeadlessRadioGroup, Radio as HeadlessRadio, Label as HeadlessLabel } from '@headlessui/react'

import { classNames } from '../../lib/utils'

export type RadioGroupOption<T extends string> = {
  value: T
  label: string
  description?: string
  disabled?: boolean
}

export type RadioGroupSize = 'sm' | 'md'

export type RadioGroupProps<T extends string> = {
  value: T
  onChange: (value: T) => void
  options: Array<RadioGroupOption<T>>
  label?: string
  description?: string
  name?: string
  size?: RadioGroupSize
  disabled?: boolean
  className?: string
}

const groupLabel = 'text-sm font-medium text-gray-900 dark:text-white'
const groupDescription = 'text-sm text-gray-500 dark:text-gray-400'

const sizes: Record<RadioGroupSize, { card: string; title: string; desc: string }> = {
  sm: { card: 'p-3', title: 'text-sm/6', desc: 'text-sm/6' },
  md: { card: 'p-4', title: 'text-sm/6', desc: 'text-sm/6' },
}

export const RadioGroup = forwardRef(function RadioGroupInner<T extends string>(
  { value, onChange, options, label, description, name, size = 'md', disabled = false, className }: RadioGroupProps<T>,
  _ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <HeadlessRadioGroup
      value={value}
      onChange={onChange}
      name={name}
      disabled={disabled}
      className={classNames('grid gap-3', className)}
    >
      {(label || description) && (
        <div className="grid gap-1">
          {label && <HeadlessLabel className={groupLabel}>{label}</HeadlessLabel>}
          {description && <div className={groupDescription}>{description}</div>}
        </div>
      )}

      <div className="grid gap-2">
        {options.map((opt) => (
          <HeadlessRadio
            key={opt.value}
            value={opt.value}
            disabled={opt.disabled}
            className={classNames(
              // Card container
              'group relative flex cursor-pointer rounded-md bg-white shadow-xs inset-ring inset-ring-gray-300 outline-hidden transition hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60 dark:bg-white/10 dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20 dark:focus-visible:outline-indigo-400',
              // Selected state
              'data-[checked]:inset-ring-indigo-600 dark:data-[checked]:inset-ring-indigo-400/40',
              sizes[size].card,
            )}
          >
            <span className="flex flex-1 items-start gap-3">
              <span
                aria-hidden="true"
                className={classNames(
                  'mt-0.5 flex size-4 items-center justify-center rounded-full bg-white shadow-xs inset-ring inset-ring-gray-300 transition dark:bg-white/10 dark:shadow-none dark:inset-ring-white/10',
                  'group-data-[checked]:inset-ring-indigo-600 group-data-[checked]:bg-indigo-600 dark:group-data-[checked]:inset-ring-indigo-500 dark:group-data-[checked]:bg-indigo-500',
                )}
              >
                <span className="size-1.5 rounded-full bg-white opacity-0 group-data-[checked]:opacity-100" />
              </span>

              <span className="grid">
                <span className={classNames('font-medium text-gray-900 dark:text-white', sizes[size].title)}>{opt.label}</span>
                {opt.description && (
                  <span className={classNames('text-gray-500 dark:text-gray-400', sizes[size].desc)}>{opt.description}</span>
                )}
              </span>
            </span>
          </HeadlessRadio>
        ))}
      </div>
    </HeadlessRadioGroup>
  )
}) as <T extends string>(props: RadioGroupProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }) => React.ReactElement


