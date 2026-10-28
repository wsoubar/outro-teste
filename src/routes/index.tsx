import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { ProjectDetailPage } from '../pages/ProjectDetailPage'
import { ContactPage } from '../pages/ContactPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'sobre',
        element: <AboutPage />,
      },
      {
        path: 'projetos',
        element: <ProjectsPage />,
      },
      {
        path: 'projetos/:id',
        element: <ProjectDetailPage />,
      },
      {
        path: 'contato',
        element: <ContactPage />,
      },
    ],
  },
])
