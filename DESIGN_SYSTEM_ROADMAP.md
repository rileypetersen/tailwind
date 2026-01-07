# Design system roadmap (Tailwind Plus Application UI–style)

This repo is optimized for **shipping beautiful SaaS UIs fast** with:
- a **compiled CSS** dependency (no Tailwind config required in consuming apps)
- **token-based theming** (`--ds-*`)
- optional **Preflight** via `styles-preflight.css`

## Layer model (how to think about scope)
- **Foundation**: tokens + CSS entrypoints
- **Primitives**: low-level UI controls (Button/Input/etc.)
- **Compound controls**: primitives + behavior (Select/Listbox, Tabs)
- **Composition helpers**: wrappers for wiring + layout (FormField/FieldRow)
- **Blocks**: page-ready patterns (tables, cards, empty states, shells)

## Current coverage (high level)
- **Foundation**: tokens + `styles.css` (no preflight) + `styles-preflight.css` (opt-in)
- **Primitives**: Button, Input, Textarea, Badge, Checkbox, Switch
- **Compound controls**: Select, RadioGroup, DropdownMenu
- **Composition helpers**: FormField, FieldRow
- **Layouts/Blocks (some)**: AppShell, AppShellNav + existing Tailwind Plus-derived blocks

## v1 (ship now): 80/20 for most app screens
Goal: enable “build a dashboard/settings CRUD app in hours” using a small, stable set of blocks.

- **Card**: consistent container (header/body/footer patterns)
- **SectionHeading**: title/description/actions row for pages/sections
- **EmptyState**: no-data/first-run placeholder with optional action
- **Tabs**: common navigation/content switching pattern
- **Table (basic)**: readable, responsive table primitives (container + cells)

## v2 (next): completes most “real app” needs
- **Toast**: global feedback pattern
- **Spinner + Skeleton**: loading states
- **Drawer / SlideOver**: details/edit panels
- **Breadcrumbs + Pagination**: navigation utilities
- **Avatar + AvatarGroup**: identity patterns
- **InputGroup**: add-ons/leading icons/trailing actions

## v3 (later): advanced/enterprise
- **Combobox / MultiSelect**: searchable tagging controls
- **Date/Time picker**: single + range
- **Command palette**: Cmd+K global actions
- **Data table (advanced)**: sorting/filtering/selection
- **File upload**: dropzone + list
- **Stepper/Wizard**: multi-step flows


