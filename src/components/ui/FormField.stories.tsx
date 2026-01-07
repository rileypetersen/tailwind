import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'
import { Select } from './Select'
import { Textarea } from './Textarea'
import { FormField } from './FormField'

const meta: Meta<typeof FormField> = {
  title: 'UI/FormField',
  component: FormField,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormField>

export const TextInput: Story = {
  render: () => (
    <div className="max-w-sm">
      <FormField label="Email" description="We’ll never share your email." required>
        {({ id, describedBy, invalid }) => (
          <Input id={id} aria-describedby={describedBy} invalid={invalid} placeholder="riley@example.com" />
        )}
      </FormField>
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="max-w-sm">
      <FormField label="Email" error="Please enter a valid email address.">
        {({ id, describedBy, invalid }) => (
          <Input id={id} aria-describedby={describedBy} invalid={invalid} defaultValue="not-an-email" />
        )}
      </FormField>
    </div>
  ),
}

export const SelectField: Story = {
  render: () => {
    type Team = 'engineering' | 'design' | 'marketing'
    const options = [
      { value: 'engineering', label: 'Engineering' },
      { value: 'design', label: 'Design' },
      { value: 'marketing', label: 'Marketing' },
    ] as const

    const [team, setTeam] = useState<Team>('engineering')

    return (
      <div className="max-w-sm">
        <FormField label="Team" description="Used for routing and permissions.">
          {({ describedBy }) => (
            <Select options={options as any} value={team} onChange={setTeam} />
          )}
        </FormField>
        {/* Note: Select already renders its own label/description in its own API; FormField is best for simple inputs. */}
      </div>
    )
  },
}

export const TextareaField: Story = {
  render: () => (
    <div className="max-w-lg">
      <FormField label="Message" description="Keep it short and specific.">
        {({ id, describedBy, invalid }) => (
          <Textarea id={id} aria-describedby={describedBy} invalid={invalid} rows={4} placeholder="Write a message…" />
        )}
      </FormField>
    </div>
  ),
}


