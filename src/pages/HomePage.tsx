import { Hero } from '../components/sections/Hero'
import { AboutPreview } from '../components/sections/AboutPreview'
import { FeaturedProjects } from '../components/sections/FeaturedProjects'

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
    </>
  )
}
