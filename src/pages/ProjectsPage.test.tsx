import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { ProjectsPage } from './ProjectsPage'
import { useProjectsStore } from '../store/projects'
import { describe, it, expect, beforeEach } from 'vitest'

describe('ProjectsPage', () => {
  beforeEach(() => {
    useProjectsStore.setState({
      projects: [
        {
          id: '1',
          title: 'React Project',
          description: 'A React project',
          longDescription: 'Long',
          tags: ['React', 'TypeScript'],
          image: 'img1.jpg',
          featured: true,
          year: '2024',
        },
        {
          id: '2',
          title: 'Node Project',
          description: 'A Node project',
          longDescription: 'Long',
          tags: ['Node.js', 'Express'],
          image: 'img2.jpg',
          featured: false,
          year: '2023',
        },
      ],
      activeTag: null,
    })
  })

  it('renders page title', () => {
    render(
      <BrowserRouter>
        <ProjectsPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/Projetos/)).toBeInTheDocument()
  })

  it('renders all projects initially', () => {
    render(
      <BrowserRouter>
        <ProjectsPage />
      </BrowserRouter>
    )
    expect(screen.getByText('React Project')).toBeInTheDocument()
    expect(screen.getByText('Node Project')).toBeInTheDocument()
  })

  it('renders filter buttons', () => {
    render(
      <BrowserRouter>
        <ProjectsPage />
      </BrowserRouter>
    )
    expect(screen.getByRole('button', { name: /todos/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /react/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /node\.js/i })).toBeInTheDocument()
  })

  it('filters projects when tag is clicked', async () => {
    const user = userEvent.setup()
    render(
      <BrowserRouter>
        <ProjectsPage />
      </BrowserRouter>
    )

    await user.click(screen.getByRole('button', { name: /react/i }))
    
    expect(screen.getByText('React Project')).toBeInTheDocument()
    expect(screen.queryByText('Node Project')).not.toBeInTheDocument()
  })

  it('shows all projects when "Todos" is clicked', async () => {
    const user = userEvent.setup()
    useProjectsStore.getState().setActiveTag('React')
    
    render(
      <BrowserRouter>
        <ProjectsPage />
      </BrowserRouter>
    )

    await user.click(screen.getByRole('button', { name: /todos/i }))
    
    expect(screen.getByText('React Project')).toBeInTheDocument()
    expect(screen.getByText('Node Project')).toBeInTheDocument()
  })
})
