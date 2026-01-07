import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableHeaderCell, TableRow } from './Table'

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Table>

const rows = [
  { name: 'Acme Inc.', title: 'Engineering', email: 'team@acme.com', role: 'Owner' },
  { name: 'Globex', title: 'Design', email: 'design@globex.com', role: 'Member' },
  { name: 'Initech', title: 'Marketing', email: 'hello@initech.com', role: 'Member' },
]

export const Basic: Story = {
  render: () => (
    <Card padded={false}>
      <TableContainer>
        <Table>
          <TableHead>
            <tr>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Team</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
            </tr>
          </TableHead>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.email}>
                <TableCell className="font-medium">{r.name}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">{r.title}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">{r.email}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">{r.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  ),
}

export const Striped: Story = {
  render: () => (
    <Card padded={false}>
      <TableContainer>
        <Table>
          <TableHead>
            <tr>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Team</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
            </tr>
          </TableHead>
          <TableBody striped>
            {rows.map((r) => (
              <TableRow key={r.email}>
                <TableCell className="font-medium">{r.name}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">{r.title}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">{r.email}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">{r.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  ),
}


