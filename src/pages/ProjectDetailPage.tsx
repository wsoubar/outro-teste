import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { useProjectsStore } from '../store/projects'

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const projects = useProjectsStore((state) => state.projects)
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          O projeto que você está procurando não existe.
        </p>
        <Link
          to="/projetos"
          className="text-primary-600 dark:text-primary-400 hover:underline"
        >
          ← Voltar para projetos
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Voltar para projetos
        </Link>

        {/* Imagem */}
        <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-3">
            <span>{project.year}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="primary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Descrição completa */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            {project.longDescription}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver Demo
            </Button>
          )}
          {project.repoUrl && (
            <Button href={project.repoUrl} variant="secondary">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Ver Código
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  )
}
