'use client'

import type { ComponentType, ReactNode, SVGProps } from 'react'

import { classNames } from '../../lib/utils'

export type AppShellNavItem = {
  label: string
  href: string
  current?: boolean
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  badge?: ReactNode
}

export type AppShellNavSection = {
  heading?: string
  items: AppShellNavItem[]
}

export type AppShellNavProps = {
  sections: AppShellNavSection[]
  className?: string
}

export function AppShellNav({ sections, className }: AppShellNavProps) {
  return (
    <nav className={classNames('mt-8 flex flex-1 flex-col', className)}>
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        {sections.map((section, idx) => (
          <li key={section.heading ?? idx}>
            {section.heading ? (
              <div className="text-xs/6 font-semibold text-gray-500 dark:text-gray-400">{section.heading}</div>
            ) : null}

            <ul role="list" className={classNames('-mx-2 space-y-1', section.heading && 'mt-2')}>
              {section.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-gray-50 text-gray-900 dark:bg-white/5 dark:text-white'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white',
                      'group flex items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                    )}
                  >
                    {item.icon ? (
                      <item.icon
                        aria-hidden="true"
                        className={classNames(
                          item.current
                            ? 'text-gray-900 dark:text-white'
                            : 'text-gray-400 group-hover:text-gray-900 dark:text-gray-500 dark:group-hover:text-white',
                          'size-5 shrink-0',
                        )}
                      />
                    ) : null}

                    <span className="truncate">{item.label}</span>

                    {item.badge ? <span className="ml-auto">{item.badge}</span> : null}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}


