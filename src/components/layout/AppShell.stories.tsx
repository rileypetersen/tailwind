import type { Meta, StoryObj } from '@storybook/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { DropdownMenu } from '../ui/DropdownMenu'
import { AppShell } from './AppShell'

const meta: Meta<typeof AppShell> = {
  title: 'Layout/AppShell',
  component: AppShell,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AppShell>

export const SidebarAndHeader: Story = {
  render: () => (
    <AppShell
      sidebar={
        <div className="py-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-indigo-600 dark:bg-indigo-500" />
            <div className="text-sm font-semibold text-gray-900 dark:text-white">Acme</div>
          </div>

          <nav className="mt-8 grid gap-1">
            {[
              { label: 'Dashboard', current: true },
              { label: 'Projects' },
              { label: 'Team' },
              { label: 'Settings' },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className={[
                  item.current
                    ? 'bg-gray-50 text-gray-900 dark:bg-white/5 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white',
                  'rounded-md px-3 py-2 text-sm/6 font-medium',
                ].join(' ')}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      }
      header={
        <>
          <div className="flex items-center gap-3">
            <div className="text-sm/6 font-semibold text-gray-900 dark:text-white">Dashboard</div>
            <Badge variant="primary">New</Badge>
          </div>

          <div className="flex flex-1 items-center justify-end gap-3">
            <div className="relative hidden w-full max-w-sm sm:block">
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="pointer-events-none absolute left-2.5 top-1/2 size-5 -translate-y-1/2 text-gray-400"
              />
              <input
                placeholder="Search"
                className="block w-full rounded-md bg-white py-2 pl-9 pr-3 text-sm/6 text-gray-900 shadow-xs inset-ring inset-ring-gray-300 outline-hidden placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:placeholder:text-gray-500 dark:focus-visible:outline-indigo-400"
              />
            </div>

            <DropdownMenu
              button={<Button variant="secondary">Actions</Button>}
              items={[
                { label: 'New project', onSelect: () => {} },
                { label: 'Invite team', onSelect: () => {} },
                { label: 'Delete workspace', tone: 'danger', onSelect: () => {} },
              ]}
            />
          </div>
        </>
      }
    >
      <div className="grid gap-6">
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:inset-ring dark:inset-ring-white/10">
          <div className="text-base font-semibold text-gray-900 dark:text-white">Getting started</div>
          <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            This is the “drop in and ship” shell: sidebar + sticky header + content container.
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:inset-ring dark:inset-ring-white/10">
          <div className="text-sm font-medium text-gray-900 dark:text-white">Cards look good immediately</div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Compose screens by stacking sections like this.
          </div>
        </div>
      </div>
    </AppShell>
  ),
}


