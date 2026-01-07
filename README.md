# Tailwind component library (WIP)

This repo is evolving into a **plug-and-play React component library** authored with Tailwind CSS and documented in Storybook.

## Goals

- Publish **compiled CSS** so consumers do **not** need Tailwind configured
- Allow **simple overrides** via CSS variables (theme tokens)
- Keep everything verifiable via Storybook + CI

## What you get

- **Compiled styles**: choose one:
  - `@rileypetersen/tailwind/styles.css` (**no Preflight**, safest for embedding into existing apps)
  - `@rileypetersen/tailwind/styles-preflight.css` (**with Preflight**, best “looks right immediately” baseline)
- **Token-based theming**: override CSS vars like `--ds-bg`, `--ds-fg`, `--ds-primary`, etc.
- **No global reset by default**: the library intentionally does **not** ship Tailwind Preflight (`@tailwind base`) to avoid global conflicts

## Next.js 16.1 + Tailwind v4 integration checklist

1. **Install / link the package**

- Local dev: `npm link`/`pnpm link` is fine
- Or add it as a workspace package / file dependency

2. **Import the compiled CSS once**

- App Router (`app/layout.tsx`):

```ts
import '@rileypetersen/tailwind/styles.css'
// or:
// import '@rileypetersen/tailwind/styles-preflight.css'
```

- Pages Router (`pages/_app.tsx`):

```ts
import '@rileypetersen/tailwind/styles.css'
// or:
// import '@rileypetersen/tailwind/styles-preflight.css'
```

3. **Wrap your app (optional but recommended)**

Use the provider to set theme tokens + baseline surface without adding a global reset:

```tsx
import { DesignSystemProvider } from '@rileypetersen/tailwind'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DesignSystemProvider theme="light">{children}</DesignSystemProvider>
      </body>
    </html>
  )
}
```

4. **Render a quick smoke test page**

```tsx
import { Badge, Button, Input, Switch, Textarea } from '@rileypetersen/tailwind'

export default function Page() {
  return (
    <div className="space-y-4 p-6">
      <div className="flex items-center gap-3">
        <Button>Primary</Button>
        <Badge variant="primary">New</Badge>
      </div>

      <Input placeholder="Email address" />
      <Textarea placeholder="Message" rows={4} />

      <div className="flex items-center gap-3">
        <Switch defaultChecked />
        <span className="text-sm">Enable notifications</span>
      </div>
    </div>
  )
}
```


