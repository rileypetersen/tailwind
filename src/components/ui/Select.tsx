'use client'

import { Fragment, forwardRef } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Label } from '@headlessui/react'
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid'

import { classNames } from '../../lib/utils'

export type SelectSize = 'sm' | 'md' | 'lg'

export type SelectOption<T> = {
  value: T
  label: string
  disabled?: boolean
}

export type SelectProps<T> = {
  label?: string
  description?: string
  options: Array<SelectOption<T>>
  value: T
  onChange: (value: T) => void
  placeholder?: string
  size?: SelectSize
  disabled?: boolean
  invalid?: boolean
  className?: string
}

const labelCls = 'text-sm font-medium text-gray-900 dark:text-white'
const descriptionCls = 'text-sm text-gray-500 dark:text-gray-400'

const buttonBase =
  'relative w-full rounded-md bg-white text-left text-gray-900 shadow-xs inset-ring inset-ring-gray-300 outline-hidden placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:focus-visible:outline-indigo-400 dark:disabled:bg-white/5 dark:disabled:text-white/60'

const sizes: Record<SelectSize, string> = {
  sm: 'py-1.5 pl-2.5 pr-10 text-sm/6',
  md: 'py-2 pl-3 pr-10 text-sm/6',
  lg: 'py-2.5 pl-3.5 pr-10 text-base/6 sm:text-sm/6',
}

export const Select = forwardRef(function SelectInner<T>(
  { label, description, options, value, onChange, placeholder = 'Select…', size = 'md', disabled, invalid, className }: SelectProps<T>,
  _ref: React.ForwardedRef<HTMLDivElement>,
) {
  const selected = options.find((o) => Object.is(o.value, value))

  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <div className={classNames('grid gap-1', className)}>
        {label && <Label className={labelCls}>{label}</Label>}
        {description && <div className={descriptionCls}>{description}</div>}

        <div className="relative">
          <ListboxButton
            className={classNames(
              buttonBase,
              sizes[size],
              invalid &&
                'inset-ring-red-300 focus-visible:outline-red-600 dark:inset-ring-red-500/40 dark:focus-visible:outline-red-400',
            )}
          >
            <span className={classNames('block truncate', !selected && 'text-gray-500 dark:text-gray-400')}>
              {selected ? selected.label : placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronUpDownIcon className="size-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
            </span>
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg outline outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
          >
            {options.map((opt) => (
              <ListboxOption
                key={String(opt.label)}
                value={opt.value}
                disabled={opt.disabled}
                className="group relative cursor-pointer select-none py-2 pl-9 pr-3 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden data-disabled:cursor-not-allowed data-disabled:opacity-60 dark:text-white dark:data-focus:bg-white/5"
              >
                {({ selected }) => (
                  <Fragment>
                    <span className={classNames('block truncate', selected ? 'font-semibold' : 'font-normal')}>{opt.label}</span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600 dark:text-indigo-400">
                        <CheckIcon className="size-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </Fragment>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </div>
    </Listbox>
  )
}) as <T>(props: SelectProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }) => React.ReactElement


