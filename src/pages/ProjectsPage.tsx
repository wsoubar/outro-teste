import { motion } from 'framer-motion'
import { ProjectCard } from '../components/ui/ProjectCard'
import { useProjectsStore } from '../store/projects'

export function ProjectsPage() {
  const activeTag = useProjectsStore((state) => state.activeTag)
  const setActiveTag = useProjectsStore((state) => state.setActiveTag)
  const getFilteredProjects = useProjectsStore((state) => state.getFilteredProjects)
  const getAllTags = useProjectsStore((state) => state.getAllTags)

  const filteredProjects = getFilteredProjects()
  const allTags = getAllTags()

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-center">Projetos</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12">
          Conheça alguns dos meus trabalhos
        </p>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTag === null
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Todos
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTag === tag
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              layout
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Nenhum projeto encontrado com essa tag.
            </p>
            <button
              onClick={() => setActiveTag(null)}
              className="mt-4 text-primary-600 dark:text-primary-400 hover:underline"
            >
              Ver todos os projetos
            </button>
          </div>
        )}
      </motion.div>
    </div>
  )
}
