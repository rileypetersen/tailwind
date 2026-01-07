import type { Meta, StoryObj } from '@storybook/react'
import { Cog6ToothIcon, FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline'

import { Badge } from '../ui/Badge'
import { AppShell } from './AppShell'
import { AppShellNav } from './AppShellNav'

const meta: Meta<typeof AppShellNav> = {
  title: 'Layout/AppShellNav',
  component: AppShellNav,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AppShellNav>

export const InAppShell: Story = {
  render: () => (
    <AppShell
      sidebar={
        <div className="py-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-indigo-600 dark:bg-indigo-500" />
            <div className="text-sm font-semibold text-gray-900 dark:text-white">Acme</div>
          </div>

          <AppShellNav
            sections={[
              {
                items: [
                  { label: 'Dashboard', href: '#', current: true, icon: HomeIcon },
                  { label: 'Projects', href: '#', icon: FolderIcon, badge: <Badge size="sm">12</Badge> },
                  { label: 'Team', href: '#', icon: UsersIcon },
                ],
              },
              {
                heading: 'Admin',
                items: [{ label: 'Settings', href: '#', icon: Cog6ToothIcon }],
              },
            ]}
          />
        </div>
      }
      header={<div className="text-sm/6 font-semibold text-gray-900 dark:text-white">Dashboard</div>}
    >
      <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:inset-ring dark:inset-ring-white/10">
        <div className="text-base font-semibold text-gray-900 dark:text-white">Content</div>
        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">This story shows AppShellNav inside AppShell.</div>
      </div>
    </AppShell>
  ),
}


