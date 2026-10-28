import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { router } from './routes'
import { useThemeStore } from './store/theme'

export default function App() {
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return <RouterProvider router={router} />
}
