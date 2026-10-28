import { useAbout } from '../../hooks/useAbout'
import { SocialLink } from '../ui/SocialIcon'
import { useSocials } from '../../hooks/useAbout'

export function Footer() {
  const about = useAbout()
  const socials = useSocials()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {about.name}. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <SocialLink key={social.label} social={social} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
