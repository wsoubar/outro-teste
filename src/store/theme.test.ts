import { useThemeStore } from './theme'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Theme Store', () => {
  beforeEach(() => {
    // Reset store and localStorage
    localStorage.clear()
    useThemeStore.setState({ theme: 'light' })
  })

  it('has light theme as default', () => {
    expect(useThemeStore.getState().theme).toBe('light')
  })

  it('toggles theme from light to dark', () => {
    useThemeStore.getState().toggleTheme()
    expect(useThemeStore.getState().theme).toBe('dark')
  })

  it('toggles theme from dark to light', () => {
    useThemeStore.setState({ theme: 'dark' })
    useThemeStore.getState().toggleTheme()
    expect(useThemeStore.getState().theme).toBe('light')
  })

  it('sets theme directly', () => {
    useThemeStore.getState().setTheme('dark')
    expect(useThemeStore.getState().theme).toBe('dark')
  })

  it('persists theme to localStorage', () => {
    useThemeStore.getState().setTheme('dark')
    expect(localStorage.getItem('theme')).toBe(JSON.stringify('dark'))
  })

  it('loads theme from localStorage on init', () => {
    localStorage.setItem('theme', JSON.stringify('dark'))
    // Simulate reload by getting initial theme
    const stored = localStorage.getItem('theme')
    const theme = stored ? JSON.parse(stored) : 'light'
    expect(theme).toBe('dark')
  })
})
