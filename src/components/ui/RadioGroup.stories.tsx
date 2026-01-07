import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RadioGroup>

type Plan = 'startup' | 'business' | 'enterprise'

const options = [
  { value: 'startup', label: 'Startup', description: 'Best for small teams' },
  { value: 'business', label: 'Business', description: 'For growing companies' },
  { value: 'enterprise', label: 'Enterprise', description: 'Advanced controls and support', disabled: true },
] as const

export const Playground: Story = {
  render: () => {
    const [value, setValue] = useState<Plan>('startup')

    return (
      <div className="max-w-md">
        <RadioGroup
          label="Plan"
          description="Choose the plan that fits your needs."
          value={value}
          onChange={setValue}
          options={options as any}
        />
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [sm, setSm] = useState<Plan>('startup')
    const [md, setMd] = useState<Plan>('business')

    return (
      <div className="grid max-w-2xl gap-6">
        <div className="grid gap-2">
          <div className="text-sm font-medium text-gray-900 dark:text-white">Small</div>
          <RadioGroup value={sm} onChange={setSm} options={options as any} size="sm" />
        </div>
        <div className="grid gap-2">
          <div className="text-sm font-medium text-gray-900 dark:text-white">Medium</div>
          <RadioGroup value={md} onChange={setMd} options={options as any} size="md" />
        </div>
      </div>
    )
  },
}


