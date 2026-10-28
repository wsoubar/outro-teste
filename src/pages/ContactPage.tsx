import { motion } from 'framer-motion'
import { SocialLink } from '../components/ui/SocialIcon'
import { useSocials } from '../hooks/useAbout'

export function ContactPage() {
  const socials = useSocials()

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Vamos conversar?</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Estou sempre aberto a novas oportunidades e colaborações. Entre em contato por uma das
          redes abaixo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <SocialLink social={social} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">Prefere email?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Você pode me enviar uma mensagem diretamente para:
          </p>
          <a
            href="mailto:seu@email.com"
            className="text-2xl text-primary-600 dark:text-primary-400 font-semibold hover:underline"
          >
            seu@email.com
          </a>
        </div>
      </motion.div>
    </div>
  )
}
