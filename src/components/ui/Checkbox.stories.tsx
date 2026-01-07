import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    disabled: false,
    invalid: false,
    indeterminate: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Playground: Story = {
  render: (args) => (
    <label className="flex items-start gap-3">
      <Checkbox {...args} />
      <span className="text-sm text-gray-900 dark:text-white">Receive email updates</span>
    </label>
  ),
}

export const States: Story = {
  render: () => (
    <div className="grid max-w-sm gap-4">
      <label className="flex items-start gap-3">
        <Checkbox />
        <span className="text-sm text-gray-900 dark:text-white">Default</span>
      </label>
      <label className="flex items-start gap-3">
        <Checkbox defaultChecked />
        <span className="text-sm text-gray-900 dark:text-white">Checked</span>
      </label>
      <label className="flex items-start gap-3">
        <Checkbox indeterminate />
        <span className="text-sm text-gray-900 dark:text-white">Indeterminate</span>
      </label>
      <label className="flex items-start gap-3 opacity-60">
        <Checkbox disabled />
        <span className="text-sm text-gray-900 dark:text-white">Disabled</span>
      </label>
      <label className="flex items-start gap-3">
        <Checkbox invalid defaultChecked />
        <span className="text-sm text-gray-900 dark:text-white">Invalid</span>
      </label>
    </div>
  ),
}


