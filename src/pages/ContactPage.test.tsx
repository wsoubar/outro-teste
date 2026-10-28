import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ContactPage } from './ContactPage'
import { describe, it, expect } from 'vitest'

describe('ContactPage', () => {
  it('renders page title', () => {
    render(
      <BrowserRouter>
        <ContactPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/Vamos conversar/i)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(
      <BrowserRouter>
        <ContactPage />
      </BrowserRouter>
    )
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Twitter')).toBeInTheDocument()
  })

  it('renders email contact section', () => {
    render(
      <BrowserRouter>
        <ContactPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/Prefere email/i)).toBeInTheDocument()
  })
})
