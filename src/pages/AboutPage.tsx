import { motion } from 'framer-motion'
import { Avatar } from '../components/ui/Avatar'
import { useAbout } from '../hooks/useAbout'

export function AboutPage() {
  const about = useAbout()

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Cover image + Avatar */}
        <div className="relative max-w-3xl mx-auto mb-12">
          <div className="h-48 md:h-64 rounded-xl overflow-hidden">
            <img
              src={about.coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <Avatar src={about.avatar} alt={about.name} size="lg" />
          </div>
        </div>

        <div className="pt-8 text-center">
          <h1 className="text-4xl font-bold mb-2">{about.name}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            {about.role}
          </p>
        </div>

        {/* Bio */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Minha História</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            {about.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.skills.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Experiência</h2>
          <div className="space-y-8">
            {about.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-primary-500 pl-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formação</h2>
          <div className="space-y-4">
            {about.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}
