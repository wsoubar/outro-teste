import { NavLink, Link } from 'react-router-dom'
import { ThemeToggle } from '../ui/ThemeToggle'
import { useAbout } from '../../hooks/useAbout'

export function Header() {
  const about = useAbout()

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {about.name}
          </Link>

          <nav className="flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`
              }
            >
              Sobre
            </NavLink>
            <NavLink
              to="/projetos"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`
              }
            >
              Projetos
            </NavLink>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`
              }
            >
              Contato
            </NavLink>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
