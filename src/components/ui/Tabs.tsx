'use client'

import { Fragment, forwardRef } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

import { classNames } from '../../lib/utils'

export type TabsItem = {
  key: string
  label: string
  badge?: React.ReactNode
  content: React.ReactNode
  disabled?: boolean
}

export type TabsProps = {
  items: TabsItem[]
  defaultIndex?: number
  className?: string
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs({ items, defaultIndex = 0, className }, ref) {
  return (
    <TabGroup ref={ref} defaultIndex={defaultIndex} className={classNames(className)}>
      <TabList className="border-b border-gray-200 dark:border-white/10">
        <div className="-mb-px flex gap-6">
          {items.map((item) => (
            <Tab key={item.key} disabled={item.disabled} as={Fragment}>
              {(tab) => (
                <button
                  type="button"
                  className={classNames(
                    'group inline-flex items-center gap-2 border-b-2 px-1 py-3 text-sm/6 font-medium outline-hidden transition',
                    tab.selected
                      ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-white/20 dark:hover:text-white',
                    tab.disabled && 'cursor-not-allowed opacity-60',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400',
                  )}
                >
                  <span>{item.label}</span>
                  {item.badge ? <span className="text-xs text-gray-500 dark:text-gray-400">{item.badge}</span> : null}
                </button>
              )}
            </Tab>
          ))}
        </div>
      </TabList>

      <TabPanels className="mt-6">
        {items.map((item) => (
          <TabPanel key={item.key} className="outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400">
            {item.content}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
})


