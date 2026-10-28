import { create } from 'zustand'
import type { Theme } from '../types'
import { getFromStorage, saveToStorage } from '../utils/storage'

interface ThemeStore {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return getFromStorage<Theme>('theme', 'light')
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () =>
    set((state) => {
      const newTheme: Theme = state.theme === 'light' ? 'dark' : 'light'
      saveToStorage('theme', newTheme)
      return { theme: newTheme }
    }),
  setTheme: (theme) => {
    saveToStorage('theme', theme)
    set({ theme })
  },
}))
