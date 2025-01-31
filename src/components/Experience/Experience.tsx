import { ExperienceProps } from '@/type'
import { fadeInUp } from '@/utils/animations'
import { motion } from 'framer-motion'
import { FC } from 'react'

const Experience: FC<ExperienceProps> = ({ experience }) => {
  return (
    <motion.section variants={fadeInUp} className="space-y-6">
      <h2 className="text-2xl font-bold">工作经验</h2>
      {experience.map((item, index) => (
        <motion.div
          key={index}
          className="backdrop-blur-sm bg-white/5 rounded-lg p-6"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-[#42B883]">
                  {item.company}
                </h3>
                <p className="text-lg text-gray-300">{item.position}</p>
              </div>
              <span className="text-sm text-gray-400">{item.period}</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {item.achievements.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>

            {item.technologies && (
              <div className="flex flex-wrap gap-2 mt-2">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-sm bg-[#42B883]/20 text-[#42B883] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.section>
  )
}
export default Experience
