export const fadeInUp = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// 滚动触发动画 - 进入视口时触发
export const fadeInUpOnScroll = {
  initial: { y: 30, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  viewport: { once: true, margin: '-100px' },
}

// 从左侧滑入
export const slideInLeft = {
  initial: { x: -50, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  viewport: { once: true, margin: '-100px' },
}

// 从右侧滑入
export const slideInRight = {
  initial: { x: 50, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  viewport: { once: true, margin: '-100px' },
}

// 缩放进入
export const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  whileInView: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  viewport: { once: true, margin: '-100px' },
}

// 交错容器 - 用于子元素依次动画
export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.5,
    },
  },
}

// 滚动触发的交错容器
export const staggerContainerOnScroll = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  viewport: { once: true, margin: '-50px' },
}

// 卡片悬停效果
export const cardHover = {
  scale: 1.02,
  y: -5,
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
}

// 按钮点击效果
export const buttonTap = {
  scale: 0.95,
}
