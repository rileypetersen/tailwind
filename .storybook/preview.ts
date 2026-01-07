import type { Preview } from '@storybook/react'

// Use the source CSS entry so Storybook can hot-reload styles during development.
// This is processed via PostCSS (tailwindcss + autoprefixer).
import '../src/styles/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
  },
}

export default preview


