import { GithubProjectsProps } from '@/type'
import { fadeInUp } from '@/utils/animations'
import { cn } from '@/utils/cn'
import { languageColors } from '@/utils/constants'
import { motion } from 'framer-motion'
import { FC } from 'react'

const GithubProjects: FC<GithubProjectsProps> = ({ projects }) => {
  return (
    <motion.section className="space-y-6" variants={fadeInUp}>
      <div className="flex items-center space-x-3">
        <h2 className="text-2xl font-bold">开源项目</h2>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-sm flex items-center space-x-1"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>查看更多</span>
        </a>
      </div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition',
              'border border-white/10 space-y-3'
            )}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-[#42B883]">
                {project.name}
              </h3>
              <div className="flex items-center space-x-3 text-gray-400">
                <span className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
                  </svg>
                  <span>{project.stars}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                  </svg>
                  <span>{project.forks}</span>
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.topics.map(topic => (
                <span
                  key={topic}
                  className="px-2 py-1 text-xs  rounded-full bg-[#42B883]/20 text-[#42B883]"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span
                  className={cn(
                    'w-3 h-3 rounded-full',
                    languageColors[project.language]
                  )}
                ></span>
                <span>{project.language}</span>
              </div>
              <span>更新于 {project.lastUpdate}</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  )
}
export default GithubProjects
