import type { Meta, StoryObj } from '@storybook/react'

import { Card, CardDescription, CardTitle } from './Card'
import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Underline: Story = {
  render: () => (
    <Tabs
      items={[
        {
          key: 'overview',
          label: 'Overview',
          content: (
            <Card>
              <CardTitle>Overview</CardTitle>
              <CardDescription className="mt-1">This is a simple underline tabs pattern.</CardDescription>
            </Card>
          ),
        },
        {
          key: 'activity',
          label: 'Activity',
          badge: '12',
          content: (
            <Card>
              <CardTitle>Activity</CardTitle>
              <CardDescription className="mt-1">Recent events will appear here.</CardDescription>
            </Card>
          ),
        },
        {
          key: 'settings',
          label: 'Settings',
          disabled: true,
          content: (
            <Card>
              <CardTitle>Settings</CardTitle>
              <CardDescription className="mt-1">Disabled in this example.</CardDescription>
            </Card>
          ),
        },
      ]}
    />
  ),
}


