'use client'

import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { Switch as HeadlessSwitch } from '@headlessui/react'

import { classNames } from '../../lib/utils'

export type SwitchSize = 'sm' | 'md'

export type SwitchProps = Omit<
  React.ComponentPropsWithoutRef<typeof HeadlessSwitch>,
  'checked' | 'onChange' | 'children' | 'className'
> & {
  /**
   * Controlled checked state.
   */
  checked?: boolean
  /**
   * Uncontrolled initial checked state.
   */
  defaultChecked?: boolean
  /**
   * Called when checked state changes.
   */
  onCheckedChange?: (checked: boolean) => void
  size?: SwitchSize
  className?: string
}

const rootBase =
  'group inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-60 dark:focus-visible:outline-indigo-400'

const rootVariants =
  'bg-gray-200 data-[checked]:bg-indigo-600 dark:bg-white/10 dark:data-[checked]:bg-indigo-500'

const thumbBase =
  'pointer-events-none inline-block transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out'

const sizes: Record<SwitchSize, { root: string; thumb: string }> = {
  sm: { root: 'h-5 w-9 p-0.5', thumb: 'size-4 translate-x-0 group-data-[checked]:translate-x-4' },
  md: { root: 'h-6 w-11 p-0.5', thumb: 'size-5 translate-x-0 group-data-[checked]:translate-x-5' },
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { checked, defaultChecked, onCheckedChange, size = 'md', className, disabled, ...props },
  forwardedRef,
) {
  const isControlled = checked !== undefined
  const [uncontrolledChecked, setUncontrolledChecked] = useState(Boolean(defaultChecked))

  const checkedValue = isControlled ? Boolean(checked) : uncontrolledChecked

  const onCheckedChangeRef = useRef(onCheckedChange)
  useEffect(() => {
    onCheckedChangeRef.current = onCheckedChange
  }, [onCheckedChange])

  const handleChange = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledChecked(next)
      onCheckedChangeRef.current?.(next)
    },
    [isControlled],
  )

  return (
    <HeadlessSwitch
      ref={forwardedRef}
      disabled={disabled}
      checked={checkedValue}
      onChange={handleChange}
      className={classNames(rootBase, rootVariants, sizes[size].root, className)}
      {...props}
    >
      <span aria-hidden="true" className={classNames(thumbBase, sizes[size].thumb)} />
    </HeadlessSwitch>
  )
})


