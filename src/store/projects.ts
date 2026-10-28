import { create } from 'zustand'
import type { Project } from '../types'
import projectsData from '../data/projects.json'
import { getFromStorage, saveToStorage } from '../utils/storage'

interface ProjectsStore {
  projects: Project[]
  activeTag: string | null
  setActiveTag: (tag: string | null) => void
  getFilteredProjects: () => Project[]
  getAllTags: () => string[]
}

function getInitialProjects(): Project[] {
  if (typeof window === 'undefined') return projectsData as Project[]
  return getFromStorage<Project[]>('projects', projectsData as Project[])
}

export const useProjectsStore = create<ProjectsStore>((set, get) => ({
  projects: getInitialProjects(),
  activeTag: null,
  setActiveTag: (tag) => set({ activeTag: tag }),
  getFilteredProjects: () => {
    const { projects, activeTag } = get()
    if (!activeTag) return projects
    return projects.filter((p) => p.tags.includes(activeTag))
  },
  getAllTags: () => {
    const { projects } = get()
    const tags = new Set<string>()
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
    return Array.from(tags).sort()
  },
}))

export function syncProjectsToStorage(): void {
  if (typeof window === 'undefined') return
  const projects = useProjectsStore.getState().projects
  saveToStorage('projects', projects)
}
