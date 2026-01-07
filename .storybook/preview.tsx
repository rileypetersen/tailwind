import type { Preview } from '@storybook/react'

// Use the source CSS entry so Storybook can hot-reload styles during development.
// This is processed via PostCSS (tailwindcss + autoprefixer).
import '../src/styles/index.css'

import { DesignSystemProvider } from '../src/components/providers/DesignSystemProvider'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Design system theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as 'light' | 'dark'

      return (
        <DesignSystemProvider theme={theme} className="p-6">
          <Story />
        </DesignSystemProvider>
      )
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
  },
}

export default preview


