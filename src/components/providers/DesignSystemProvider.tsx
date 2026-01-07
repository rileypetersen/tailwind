import type { ReactNode } from 'react'

import { classNames } from '../../lib/utils'

export type DesignSystemProviderProps = {
  children: ReactNode
  /**
   * Sets `[data-theme]` for token-driven light/dark theming.
   * Defaults to "light".
   */
  theme?: 'light' | 'dark'
  /**
   * Optional className applied to the root wrapper.
   */
  className?: string
}

/**
 * A scoped design-system surface that provides consistent baseline styling
 * without shipping a global CSS reset (Preflight).
 */
export function DesignSystemProvider({ children, theme = 'light', className }: DesignSystemProviderProps) {
  return (
    <div
      data-theme={theme}
      className={classNames(
        // baseline surface
        'min-h-full bg-bg text-fg antialiased',
        // typography defaults
        'font-sans text-sm leading-6',
        className,
      )}
    >
      {children}
    </div>
  )
}


