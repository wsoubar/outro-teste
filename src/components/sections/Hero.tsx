import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Avatar } from '../ui/Avatar'
import { useAbout } from '../../hooks/useAbout'

export function Hero() {
  const about = useAbout()

  return (
    <section className="py-20 md:py-32">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        >
          <Avatar src={about.avatar} alt={about.name} size="lg" />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          {about.name}
        </h1>

        <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-4">
          {about.role}
        </p>

        <p className="text-xl text-gray-500 dark:text-gray-500 mb-8 max-w-2xl mx-auto">
          {about.tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/projetos" variant="primary">
            Ver Projetos
          </Button>
          <Button href="/contato" variant="secondary">
            Entrar em Contato
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
