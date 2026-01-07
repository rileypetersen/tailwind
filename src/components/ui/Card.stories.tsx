import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './Card'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Basic: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Getting started</CardTitle>
          <CardDescription>Drop in a card to establish consistent surface + spacing.</CardDescription>
        </div>
        <Button variant="secondary" size="sm">
          Action
        </Button>
      </CardHeader>

      <div className="text-sm text-gray-600 dark:text-gray-400">
        Cards are a high-leverage building block for dashboards, settings pages, and forms.
      </div>

      <CardFooter>
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
}

export const Unpadded: Story = {
  render: () => (
    <Card padded={false}>
      <div className="p-6">
        <CardTitle>Unpadded</CardTitle>
        <CardDescription>Use this when you want custom internal layout.</CardDescription>
      </div>
      <div className="border-t border-gray-100 p-6 dark:border-white/10">
        <div className="text-sm text-gray-600 dark:text-gray-400">Body content</div>
      </div>
    </Card>
  ),
}


