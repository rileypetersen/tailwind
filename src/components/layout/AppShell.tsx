'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { classNames } from '../../lib/utils'

export type AppShellProps = {
  /**
   * Optional sidebar content. When provided, the shell becomes responsive:
   * - mobile: off-canvas dialog
   * - desktop: fixed sidebar
   */
  sidebar?: ReactNode
  /**
   * Top bar content (e.g. title, search, actions).
   */
  header?: ReactNode
  /**
   * Main content.
   */
  children: ReactNode
  /**
   * Controls whether the header is rendered.
   */
  showHeader?: boolean
  /**
   * Optional className applied to the root wrapper.
   */
  className?: string
  /**
   * Optional className applied to the main content container.
   */
  contentClassName?: string
}

/**
 * Opinionated app shell aligned with Tailwind Plus "Application UI" patterns.
 *
 * Notes:
 * - We intentionally keep it slot-based (you provide sidebar/header content).
 * - Sidebar width is fixed to `w-72` to keep layout predictable.
 */
export function AppShell({ sidebar, header, children, showHeader = true, className, contentClassName }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const hasSidebar = Boolean(sidebar)

  return (
    <>
      {hasSidebar ? (
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>

              <div className="flex grow flex-col overflow-y-auto bg-white px-6 pb-4 shadow-sm dark:bg-gray-900 dark:shadow-none dark:inset-ring dark:inset-ring-white/10">
                {sidebar}
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      ) : null}

      <div className={classNames('min-h-full', className)}>
        {hasSidebar ? (
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <div className="flex grow flex-col overflow-y-auto bg-white px-6 pb-4 shadow-sm dark:bg-gray-900 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-y-0 dark:after:right-0 dark:after:w-px dark:after:bg-white/10">
              {sidebar}
            </div>
          </div>
        ) : null}

        <div className={classNames(hasSidebar && 'lg:pl-72')}>
          {showHeader ? (
            <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-gray-900 dark:shadow-none">
              {hasSidebar ? (
                <>
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(true)}
                    className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 lg:hidden dark:text-gray-400 dark:hover:text-white"
                  >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                  </button>

                  <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden dark:bg-white/10" />
                </>
              ) : null}

              <div className="flex flex-1 items-center justify-between gap-x-4">{header}</div>
            </div>
          ) : null}

          <main className="py-10">
            <div className={classNames('px-4 sm:px-6 lg:px-8', contentClassName)}>{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}


