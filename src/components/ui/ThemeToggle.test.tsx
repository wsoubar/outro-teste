import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeToggle } from './ThemeToggle'
import { useThemeStore } from '../../store/theme'
import { describe, it, expect, beforeEach } from 'vitest'

describe('ThemeToggle', () => {
  beforeEach(() => {
    // Reset store before each test
    useThemeStore.setState({ theme: 'light' })
  })

  it('renders sun icon in light mode', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button', { name: /alternar tema/i })
    expect(button).toBeInTheDocument()
  })

  it('toggles theme when clicked', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)
    
    const button = screen.getByRole('button', { name: /alternar tema/i })
    expect(useThemeStore.getState().theme).toBe('light')
    
    await user.click(button)
    expect(useThemeStore.getState().theme).toBe('dark')
    
    await user.click(button)
    expect(useThemeStore.getState().theme).toBe('light')
  })
})
