import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { SectionHeading } from './SectionHeading'

const meta: Meta<typeof SectionHeading> = {
  title: 'UI/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
  args: {
    title: 'Profile',
    description: 'This information will be displayed publicly so be careful what you share.',
  },
}

export default meta
type Story = StoryObj<typeof SectionHeading>

export const Playground: Story = {}

export const WithActions: Story = {
  render: () => (
    <SectionHeading
      title="Billing"
      description="Manage your subscription and payment methods."
      actions={
        <div className="flex items-center gap-3">
          <Button variant="secondary">Cancel</Button>
          <Button>Save</Button>
        </div>
      }
    />
  ),
}


