import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Select>

type Team = 'engineering' | 'design' | 'marketing'

const options = [
  { value: 'engineering', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing', disabled: true },
] as const

export const Playground: Story = {
  render: () => {
    const [value, setValue] = useState<Team>('engineering')

    return (
      <div className="max-w-sm">
        <Select
          label="Team"
          description="Used for routing and permissions."
          options={options as any}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
}

export const States: Story = {
  render: () => {
    const [value, setValue] = useState<Team>('design')

    return (
      <div className="grid max-w-sm gap-5">
        <Select options={options as any} value={value} onChange={setValue} label="Default" />
        <Select options={options as any} value={value} onChange={setValue} label="Invalid" invalid />
        <Select options={options as any} value={value} onChange={setValue} label="Disabled" disabled />
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [sm, setSm] = useState<Team>('engineering')
    const [md, setMd] = useState<Team>('engineering')
    const [lg, setLg] = useState<Team>('engineering')

    return (
      <div className="grid max-w-sm gap-5">
        <Select options={options as any} value={sm} onChange={setSm} label="Small" size="sm" />
        <Select options={options as any} value={md} onChange={setMd} label="Medium" size="md" />
        <Select options={options as any} value={lg} onChange={setLg} label="Large" size="lg" />
      </div>
    )
  },
}


