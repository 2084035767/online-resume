import { fadeInUp } from '@/utils/animations'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { SkillsProps } from '@/type'

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <motion.section className="space-y-4" variants={fadeInUp}>
      <h2 className="text-2xl font-bold">技能清单</h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
            whileHover={{
              scale: 1.02,
              borderColor: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            <h3 className="text-[#42B883] mb-3 capitalize font-medium">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((item: string) => (
                <li
                  key={item}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#42B883]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Skills
