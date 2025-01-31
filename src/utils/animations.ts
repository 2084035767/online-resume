export const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8, // 增加动画持续时间
      ease: 'easeOut', // 使用更平滑的缓动函数
    },
  },
}

// 优化动画配置
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4, // 增加子元素之间的延迟
      delayChildren: 0.6, // 增加初始延迟
      type: 'spring',
      stiffness: 50, // 降低弹性
      damping: 20, // 增加阻尼
      mass: 1.2, // 增加质量感
    },
  },
}
