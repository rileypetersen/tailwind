import type { Meta, StoryObj } from '@storybook/react'
import { InboxIcon } from '@heroicons/react/24/outline'

import { Button } from './Button'
import { EmptyState } from './EmptyState'

const meta: Meta<typeof EmptyState> = {
  title: 'UI/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  args: {
    title: 'No projects',
    description: 'Get started by creating a new project.',
  },
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Playground: Story = {}

export const WithIconAndAction: Story = {
  render: () => (
    <EmptyState
      icon={InboxIcon}
      title="No messages"
      description="Once you receive messages, they’ll show up here."
      action={<Button>Create message</Button>}
    />
  ),
}


