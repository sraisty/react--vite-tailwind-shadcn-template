import {useEffect, useState} from 'react'
import {setTheme} from './theme'

export type ThemeType = 'light' | 'dark'

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    return (localStorage.getItem('theme') as ThemeType) ?? 'light'
  })

  useEffect(() => {
    setTheme(theme)
  }, [theme])

  return {
    theme,
    setTheme: (newTheme: ThemeType) => {
      setThemeState(newTheme)
    },
  }
}
