import { useProjectsStore } from './projects'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Projects Store', () => {
  beforeEach(() => {
    localStorage.clear()
    useProjectsStore.setState({
      projects: [
        {
          id: '1',
          title: 'Project 1',
          description: 'Desc 1',
          longDescription: 'Long 1',
          tags: ['React', 'TypeScript'],
          image: 'img1.jpg',
          featured: true,
          year: '2024',
        },
        {
          id: '2',
          title: 'Project 2',
          description: 'Desc 2',
          longDescription: 'Long 2',
          tags: ['Node.js', 'Express'],
          image: 'img2.jpg',
          featured: false,
          year: '2023',
        },
        {
          id: '3',
          title: 'Project 3',
          description: 'Desc 3',
          longDescription: 'Long 3',
          tags: ['React', 'Next.js'],
          image: 'img3.jpg',
          featured: true,
          year: '2024',
        },
      ],
      activeTag: null,
    })
  })

  it('loads initial projects', () => {
    expect(useProjectsStore.getState().projects).toHaveLength(3)
  })

  it('returns all projects when no tag is active', () => {
    const filtered = useProjectsStore.getState().getFilteredProjects()
    expect(filtered).toHaveLength(3)
  })

  it('filters projects by tag', () => {
    useProjectsStore.getState().setActiveTag('React')
    const filtered = useProjectsStore.getState().getFilteredProjects()
    expect(filtered).toHaveLength(2)
    expect(filtered.every(p => p.tags.includes('React'))).toBe(true)
  })

  it('returns empty array when no projects match tag', () => {
    useProjectsStore.getState().setActiveTag('Vue')
    const filtered = useProjectsStore.getState().getFilteredProjects()
    expect(filtered).toHaveLength(0)
  })

  it('gets all unique tags', () => {
    const tags = useProjectsStore.getState().getAllTags()
    expect(tags).toContain('React')
    expect(tags).toContain('TypeScript')
    expect(tags).toContain('Node.js')
    expect(tags).toContain('Next.js')
    expect(tags).toContain('Express')
  })

  it('sets active tag', () => {
    useProjectsStore.getState().setActiveTag('React')
    expect(useProjectsStore.getState().activeTag).toBe('React')
  })

  it('clears active tag', () => {
    useProjectsStore.getState().setActiveTag('React')
    useProjectsStore.getState().setActiveTag(null)
    expect(useProjectsStore.getState().activeTag).toBeNull()
  })
})
