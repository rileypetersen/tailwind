import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'
import { FieldRow } from './FieldRow'
import { Switch } from './Switch'

const meta: Meta<typeof FieldRow> = {
  title: 'UI/FieldRow',
  component: FieldRow,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FieldRow>

export const CheckboxRow: Story = {
  render: () => (
    <div className="max-w-lg">
      <FieldRow
        label="Comments"
        description="Get notified when someone posts a comment."
        control={({ id, describedBy, invalid, disabled }) => (
          <Checkbox id={id} aria-describedby={describedBy} invalid={invalid} disabled={disabled} />
        )}
      />
    </div>
  ),
}

export const SwitchRow: Story = {
  render: () => (
    <div className="max-w-lg space-y-4">
      <FieldRow
        label="Enable notifications"
        description="We’ll only send important updates."
        control={({ labelId, describedBy, disabled }) => (
          <Switch aria-labelledby={labelId} aria-describedby={describedBy} disabled={disabled} defaultChecked />
        )}
      />

      <FieldRow
        label="Marketing emails"
        description="Occasional product updates."
        error="You must accept marketing emails to continue."
        control={({ labelId, describedBy, disabled }) => (
          <Switch aria-labelledby={labelId} aria-describedby={describedBy} disabled={disabled} />
        )}
      />
    </div>
  ),
}


