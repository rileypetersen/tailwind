/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--ds-bg) / <alpha-value>)',
        fg: 'hsl(var(--ds-fg) / <alpha-value>)',
        muted: 'hsl(var(--ds-muted) / <alpha-value>)',
        primary: 'hsl(var(--ds-primary) / <alpha-value>)',
        'primary-fg': 'hsl(var(--ds-primary-fg) / <alpha-value>)',
        danger: 'hsl(var(--ds-danger) / <alpha-value>)',
        'danger-fg': 'hsl(var(--ds-danger-fg) / <alpha-value>)',
        ring: 'hsl(var(--ds-ring) / <alpha-value>)',
      },
      borderRadius: {
        sm: 'var(--ds-radius-sm)',
        md: 'var(--ds-radius-md)',
        lg: 'var(--ds-radius-lg)',
      },
      boxShadow: {
        sm: 'var(--ds-shadow-sm)',
        md: 'var(--ds-shadow-md)',
      },
    },
  },
  plugins: [],
}


