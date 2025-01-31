import { motion } from 'framer-motion'

import { FC } from 'react'

import { InterestsProps } from '@/type'

const Interests: FC<InterestsProps> = ({ interests }) => {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold">兴趣爱好</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, index) => {
          const Icon = interest.icon
          return (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* 背景装饰 */}
              <div
                className={`absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity ${interest.color}`}
              >
                <Icon size={32} />
              </div>

              {/* 内容 */}
              <div className="relative space-y-3">
                <div className={`${interest.color}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#42B883]">
                  {interest.title}
                </h3>
                <p className="text-gray-300 text-sm">{interest.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Interests
