import { ProjectTimelineProps } from '@/type'
import { statusColors, statusText } from '@/utils/constants'
import { motion } from 'framer-motion'
import { FC } from 'react'

const ProjectTimeline: FC<ProjectTimelineProps> = ({ projects }) => {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">项目时间线</h2>
      <div className="relative space-y-8">
        {/* 时间线轴线 */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#42B883] via-[#42B883]/50 to-transparent" />

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative pl-20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* 时间线节点 */}
            <div
              className={`absolute left-7 w-3 h-3 rounded-full ${
                statusColors[project.status]
              } transform -translate-x-1/2 mt-1.5`}
            >
              <div
                className={`absolute inset-0 rounded-full ${
                  statusColors[project.status]
                } animate-ping opacity-75`}
              />
            </div>

            {/* 项目卡片 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-[#42B883]">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">{project.date}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      statusColors[project.status]
                    }/20 text-${
                      statusColors[project.status].split('-')[0]
                    }-400`}
                  >
                    {statusText[project.status]}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-sm bg-[#42B883]/20 text-[#42B883] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#42B883] hover:text-[#42B883]/80 transition-colors inline-flex items-center gap-1"
                >
                  查看项目
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectTimeline
