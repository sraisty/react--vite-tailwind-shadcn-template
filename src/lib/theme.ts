import type {ThemeType} from './useTheme'

// src/lib/theme.ts
export function setTheme(theme: ThemeType) {
  const root = window.document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
  localStorage.setItem('theme', theme)
}

export function initTheme() {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = savedTheme ?? (prefersDark ? 'dark' : 'light')
  setTheme(theme)
}
