'use client'

import { Fragment, forwardRef } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { classNames } from '../../lib/utils'

export type DropdownMenuItem = {
  label: string
  onSelect?: () => void
  href?: string
  disabled?: boolean
  tone?: 'default' | 'danger'
}

export type DropdownMenuProps = {
  /**
   * The trigger content.
   */
  button: React.ReactNode
  items: DropdownMenuItem[]
  align?: 'start' | 'end'
  widthClassName?: string
  className?: string
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(function DropdownMenu(
  { button, items, align = 'end', widthClassName = 'w-48', className },
  ref,
) {
  return (
    <Menu as="div" ref={ref} className={classNames('relative inline-block text-left', className)}>
      <MenuButton className="outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400">
        {button}
      </MenuButton>

      <MenuItems
        transition
        className={classNames(
          'absolute z-10 mt-2 origin-top-right rounded-md bg-white py-2 shadow-lg outline outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10',
          align === 'end' ? 'right-0' : 'left-0',
          widthClassName,
        )}
      >
        {items.map((item) => (
          <MenuItem key={item.label} disabled={item.disabled} as={Fragment}>
            {(menuItem) => {
              const cls = classNames(
                'block w-full px-3 py-1 text-left text-sm/6 outline-hidden',
                item.tone === 'danger'
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-gray-900 dark:text-white',
                menuItem.focus && 'bg-gray-50 dark:bg-white/5',
                item.disabled && 'cursor-not-allowed opacity-60',
              )

              if (item.href) {
                return (
                  <a href={item.href} className={cls} onClick={item.disabled ? (e) => e.preventDefault() : undefined}>
                    {item.label}
                  </a>
                )
              }

              return (
                <button
                  type="button"
                  className={cls}
                  onClick={() => {
                    if (item.disabled) return
                    item.onSelect?.()
                  }}
                >
                  {item.label}
                </button>
              )
            }}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
})


