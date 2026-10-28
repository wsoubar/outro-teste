import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from './HomePage'
import { describe, it, expect } from 'vitest'

describe('HomePage', () => {
  it('renders hero section', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    expect(screen.getByText(/Seu Nome/)).toBeInTheDocument()
  })

  it('renders about preview section', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    expect(screen.getByText(/Sobre Mim/)).toBeInTheDocument()
  })

  it('renders featured projects section', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    expect(screen.getByText(/Projetos em Destaque/)).toBeInTheDocument()
  })

  it('renders call to action buttons', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    expect(screen.getByRole('link', { name: /ver projetos/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /entrar em contato/i })).toBeInTheDocument()
  })
})
