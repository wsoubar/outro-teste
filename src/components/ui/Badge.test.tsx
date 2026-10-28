import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'
import { describe, it, expect } from 'vitest'

describe('Badge', () => {
  it('renders with children', () => {
    render(<Badge>React</Badge>)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('applies default variant styles', () => {
    render(<Badge>Default</Badge>)
    const badge = screen.getByText('Default')
    expect(badge.className).toContain('bg-gray-100')
  })

  it('applies primary variant styles', () => {
    render(<Badge variant="primary">Primary</Badge>)
    const badge = screen.getByText('Primary')
    expect(badge.className).toContain('bg-primary-100')
  })

  it('applies custom className', () => {
    render(<Badge className="custom-class">Custom</Badge>)
    const badge = screen.getByText('Custom')
    expect(badge.className).toContain('custom-class')
  })
})
