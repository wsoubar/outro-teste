export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  liveUrl?: string
  repoUrl?: string
  featured: boolean
  year: string
}

export interface About {
  name: string
  role: string
  tagline: string
  avatar: string
  coverImage: string
  bio: string[]
  skills: { category: string; items: string[] }[]
  experience: {
    company: string
    role: string
    period: string
    description: string
  }[]
  education: {
    institution: string
    degree: string
    period: string
  }[]
}

export interface Social {
  label: string
  url: string
  icon: string
}

export interface SiteConfig {
  about: About
  socials: Social[]
  projects: Project[]
}

export type Theme = 'light' | 'dark'
