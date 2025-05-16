import type {ThemeType} from './useTheme'

const isBrowser = typeof window !== 'undefined'

export function setTheme(theme: ThemeType) {
  if (!isBrowser) return
  const root = window.document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
  localStorage.setItem('theme', theme)
}

export function initTheme() {
  if (!isBrowser) return
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = savedTheme ?? (prefersDark ? 'dark' : 'light')
  setTheme(theme)
}
