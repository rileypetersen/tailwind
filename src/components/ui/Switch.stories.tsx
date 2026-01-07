import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    checked: false,
    disabled: false,
    size: 'md',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md'] },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Playground: Story = {
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs()

    return (
      <label className="flex items-center gap-3">
        <Switch
          {...args}
          checked={Boolean(checked)}
          onCheckedChange={(next) => updateArgs({ checked: next })}
        />
        <span className="text-sm text-gray-900 dark:text-white">Enable notifications</span>
      </label>
    )
  },
}

export const States: Story = {
  render: () => (
    <div className="grid max-w-sm gap-4">
      <label className="flex items-center gap-3">
        <Switch defaultChecked={false} />
        <span className="text-sm text-gray-900 dark:text-white">Off</span>
      </label>
      <label className="flex items-center gap-3">
        <Switch defaultChecked />
        <span className="text-sm text-gray-900 dark:text-white">On</span>
      </label>
      <label className="flex items-center gap-3 opacity-60">
        <Switch disabled defaultChecked />
        <span className="text-sm text-gray-900 dark:text-white">Disabled</span>
      </label>
      <label className="flex items-center gap-3">
        <Switch size="sm" defaultChecked />
        <span className="text-sm text-gray-900 dark:text-white">Small</span>
      </label>
    </div>
  ),
}


