export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
}

export type Theme = typeof THEMES[keyof typeof THEMES]
