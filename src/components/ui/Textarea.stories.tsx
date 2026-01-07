import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Write a message…',
    size: 'md',
    rows: 4,
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Playground: Story = {}

export const States: Story = {
  render: () => (
    <div className="grid max-w-lg gap-4">
      <div className="grid gap-1">
        <div className="text-sm font-medium text-gray-900 dark:text-white">Default</div>
        <Textarea placeholder="Write a message…" rows={4} />
      </div>
      <div className="grid gap-1">
        <div className="text-sm font-medium text-gray-900 dark:text-white">With value</div>
        <Textarea defaultValue="Hello there!" rows={4} />
      </div>
      <div className="grid gap-1">
        <div className="text-sm font-medium text-gray-900 dark:text-white">Invalid</div>
        <Textarea invalid defaultValue="Missing required content" rows={4} />
      </div>
      <div className="grid gap-1">
        <div className="text-sm font-medium text-gray-900 dark:text-white">Disabled</div>
        <Textarea disabled placeholder="Write a message…" rows={4} />
      </div>
    </div>
  ),
}


