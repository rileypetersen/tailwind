import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Email address',
    size: 'md',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Playground: Story = {}

export const States: Story = {
  render: () => (
    <div className="grid max-w-sm gap-4">
      <div className="grid gap-1">
        <div className="text-sm font-medium text-gray-900 dark:text-white">Default</div>
        <Input placeholder="Email address" />
      </div>
      <div className="grid gap-1">
        <div className="text-sm font-medium text-gray-900 dark:text-white">With value</div>
        <Input defaultValue="riley@example.com" />
      </div>
      <div className="grid gap-1">
        <div className="text-sm font-medium text-gray-900 dark:text-white">Invalid</div>
        <Input invalid defaultValue="not-an-email" />
      </div>
      <div className="grid gap-1">
        <div className="text-sm font-medium text-gray-900 dark:text-white">Disabled</div>
        <Input disabled placeholder="Email address" />
      </div>
    </div>
  ),
}


