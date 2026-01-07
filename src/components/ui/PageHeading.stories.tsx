import type { Meta, StoryObj } from '@storybook/react'

import PageHeading from './PageHeading'

const meta: Meta<typeof PageHeading> = {
  title: 'UI/PageHeading',
  component: PageHeading,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof PageHeading>

export const Default: Story = {}


