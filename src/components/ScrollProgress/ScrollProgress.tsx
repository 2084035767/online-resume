import { useTheme } from '@/contexts/ThemeContext'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FC } from 'react'

const ScrollProgress: FC = () => {
  const { scrollYProgress } = useScroll()
  const { currentColor } = useTheme()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{
        scaleX,
        backgroundColor: currentColor,
      }}
    />
  )
}

export default ScrollProgress
