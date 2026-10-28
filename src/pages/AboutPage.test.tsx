import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { describe, it, expect } from 'vitest'

describe('AboutPage', () => {
  it('renders page title', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/Seu Nome/)).toBeInTheDocument()
  })

  it('renders bio section', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/Minha História/)).toBeInTheDocument()
  })

  it('renders skills section', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/Habilidades/)).toBeInTheDocument()
  })

  it('renders experience section', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/Experiência/)).toBeInTheDocument()
  })

  it('renders education section', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/Formação/)).toBeInTheDocument()
  })
})
