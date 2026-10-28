import aboutData from '../data/about.json'
import socialsData from '../data/socials.json'
import type { About, Social } from '../types'

export function useAbout(): About {
  return aboutData as About
}

export function useSocials(): Social[] {
  return socialsData as Social[]
}
