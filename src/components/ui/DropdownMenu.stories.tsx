import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { DropdownMenu } from './DropdownMenu'

const meta: Meta<typeof DropdownMenu> = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Basic: Story = {
  render: () => (
    <DropdownMenu
      button={<Button variant="secondary">Actions</Button>}
      items={[
        { label: 'View profile', href: '#' },
        { label: 'Settings', href: '#' },
        { label: 'New team', onSelect: () => {} },
        { label: 'Delete', onSelect: () => {}, tone: 'danger' },
      ]}
    />
  ),
}

export const DisabledItems: Story = {
  render: () => (
    <DropdownMenu
      button={<Button variant="secondary">Actions</Button>}
      items={[
        { label: 'Edit', onSelect: () => {} },
        { label: 'Duplicate', onSelect: () => {}, disabled: true },
        { label: 'Archive', onSelect: () => {} },
      ]}
    />
  ),
}


