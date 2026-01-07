/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class', '[data-theme="dark"]'],
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
                // Tailwind Plus "Application UI" blocks frequently use shadow-xs
                xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                sm: 'var(--ds-shadow-sm)',
                md: 'var(--ds-shadow-md)',
            },
        },
    },
    plugins: [
        function insetRingPlugin({ matchUtilities, addUtilities, theme }) {
            // Implements Tailwind Plus-style `inset-ring` utilities (similar to `ring-1 ring-inset`)
            // so snippets that use `inset-ring inset-ring-gray-300` work as expected.
            addUtilities({
                '.inset-ring': {
                    '--tw-ring-inset': 'inset',
                    '--tw-ring-offset-width': '0px',
                    '--tw-ring-offset-color': '#fff',
                    '--tw-ring-color': 'rgb(0 0 0 / 0.05)',
                    '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                    '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                    boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
                },
            })

            matchUtilities({
                'inset-ring': (value) => ({
                    '--tw-ring-color': value,
                }),
            }, { values: theme('colors') }, )
        },
    ],
}