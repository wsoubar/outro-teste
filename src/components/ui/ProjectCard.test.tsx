import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ProjectCard } from './ProjectCard'
import type { Project } from '../../types'
import { describe, it, expect } from 'vitest'

const mockProject: Project = {
  id: 'test-project',
  title: 'Test Project',
  description: 'A test project description',
  longDescription: 'Long description',
  tags: ['React', 'TypeScript', 'Tailwind'],
  image: 'https://example.com/image.jpg',
  liveUrl: 'https://example.com',
  repoUrl: 'https://github.com/test',
  featured: true,
  year: '2024',
}

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    )
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders project description', () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    )
    expect(screen.getByText('A test project description')).toBeInTheDocument()
  })

  it('renders project year', () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    )
    expect(screen.getByText('2024')).toBeInTheDocument()
  })

  it('renders first 3 tags', () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    )
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Tailwind')).toBeInTheDocument()
  })

  it('shows +N badge when more than 3 tags', () => {
    const projectWithMoreTags: Project = {
      ...mockProject,
      tags: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'],
    }
    render(
      <BrowserRouter>
        <ProjectCard project={projectWithMoreTags} />
      </BrowserRouter>
    )
    expect(screen.getByText('+2')).toBeInTheDocument()
  })

  it('renders project image', () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    )
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  it('links to project detail page', () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/projetos/test-project')
  })
})
