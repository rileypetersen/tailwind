import type { Meta, StoryObj } from '@storybook/react'
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'

import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    title: 'Heads up!',
    variant: 'info',
    children: 'This is an alert message you can use for important context.',
  },
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="grid max-w-lg gap-3">
      <Alert variant="info" title="Info" icon={InformationCircleIcon}>
        A short informational message.
      </Alert>
      <Alert variant="success" title="Success" icon={CheckCircleIcon}>
        Your changes have been saved.
      </Alert>
      <Alert variant="warning" title="Warning" icon={ExclamationTriangleIcon}>
        Double-check your inputs before continuing.
      </Alert>
      <Alert variant="danger" title="Error" icon={XCircleIcon}>
        Something went wrong. Please try again.
      </Alert>
    </div>
  ),
}


