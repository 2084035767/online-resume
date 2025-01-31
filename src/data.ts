import {
  Certificate,
  Education,
  Experience,
  GithubProject,
  Interest,
  Language,
  PersonalInfo,
  Project,
  SkillsData,
  TimelineProject,
} from '@/type'
import { BookOpen, Camera, Code2, Dumbbell, Music, Plane } from 'lucide-react'

export const skills: SkillsData = {
  前端开发: [
    'React',

    'Vue',
    'TypeScript',
    'Next.js',
    // ... 其他技能
  ],
  后端开发: [
    'Node.js',
    'Express',
    'MongoDB',
    // ... 其他技能
  ],
  // ... 其他类别
}
export const githubProjects: GithubProject[] = [
  {
    name: 'react-data-visualization',
    description: '基于 React 的数据可视化组件库，支持多种图表类型和自定义主题',
    stars: 128,
    forks: 45,
    language: 'TypeScript',
    url: 'https://github.com/yourusername/react-data-visualization',
    topics: ['react', 'typescript', 'data-viz', 'echarts'],
    lastUpdate: '2024-02-15',
  },
  {
    name: 'vue3-admin-template',
    description: '企业级中后台管理系统模板，包含权限管理、动态路由等功能',
    stars: 89,
    forks: 34,
    language: 'Vue',
    url: 'https://github.com/yourusername/vue3-admin-template',
    topics: ['vue3', 'typescript', 'admin', 'template'],
    lastUpdate: '2024-01-20',
  },
  {
    name: 'node-cms-server',
    description: '基于 Node.js 的内容管理系统后端，提供 RESTful API',
    stars: 67,
    forks: 23,
    language: 'JavaScript',
    url: 'https://github.com/yourusername/node-cms-server',
    topics: ['nodejs', 'express', 'mongodb', 'cms'],
    lastUpdate: '2024-03-01',
  },
]

export const education: Education[] = [
  {
    school: '某某大学',
    degree: '计算机科学与技术 · 本科',
    period: '2016.09 - 2020.06',
    details: [
      '主修课程：数据结构、算法分析、计算机网络、操作系统、数据库系统等',
      'GPA：3.8/4.0，专业排名前 10%',
      '获得校级优秀毕业生称号',
      '担任 ACM 程序设计协会技术组组长',
    ],
  },
]

export const projects: Project[] = [
  {
    title: '个人博客系统',
    description: '基于 Next.js 和 TailwindCSS 开发的现代化博客系统',
    techStack: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Prisma'],
    highlights: [
      '实现了响应式设计，支持多端适配',
      '集成 MDX 支持，提供富文本编辑体验',
      '使用 Vercel 实现自动化部署，访问量达到 3k+ PV/月',
    ],
    link: 'https://your-blog.com',
  },
]

export const personalInfo: PersonalInfo = {
  name: '张三',
  title: '高级前端工程师',
  email: '2087525252@qq.com',
  phone: '13800138000',
  location: '成都',
  experience: '3年工作经验',
  github: 'https://github.com/yourusername',
  introduction:
    '热衷于前端技术，擅长 React 和 TypeScript，对性能优化和工程化有深入研究。具有良好的团队协作能力和技术攻关能力，曾主导多个大型项目的开发。',
  avatar: '/images/avatar.jpg',
  gitee: 'https://gitee.com/yourusername',
  qq: '123456789',
  wechat: 'your_wechat_id',
  qqQrCode: '/images/qq-qrcode.png',
  wechatQrCode: '/images/wechat-qrcode.png',
}

export const experiences: Experience[] = [
  {
    company: '某科技有限公司',
    position: '高级前端开发工程师',
    period: '2021.06 - 至今',
    achievements: [
      '负责公司核心产品的前端架构设计和开发',
      '优化前端性能，提升用户体验',
      '指导初级开发人员，组织技术分享会',
      '将首屏加载时间减少 50%，用户留存提升 20%',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    company: '某网络科技公司',
    position: '前端开发工程师',
    period: '2019.07 - 2021.05',
    achievements: [
      '参与电商平台的前端开发',
      '实现复杂的交互功能和数据可视化',
      '开发和维护内部组件库',
    ],
    technologies: ['Vue.js', 'JavaScript', 'Less', 'Element UI'],
  },
]

export const timelineProjects: TimelineProject[] = [
  {
    title: '企业级中后台管理系统',
    date: '2023.06 - 至今',
    description:
      '基于 React + TypeScript 的现代化中后台解决方案，包含完整的权限管理、数据可视化、表单设计器等功能。',
    tags: ['React', 'TypeScript', 'Ant Design', '微前端'],
    status: 'ongoing' as const,
    link: 'https://github.com/your-project',
  },
  {
    title: '电商数据分析平台',
    date: '2023.01 - 2023.05',
    description:
      '整合多个数据源，提供实时数据分析和可视化功能，帮助商家做出更好的经营决策。',
    tags: ['Vue3', 'Vite', 'ECharts', 'WebSocket'],
    status: 'completed' as const,
    link: 'https://github.com/your-project',
  },
  {
    title: '跨平台移动应用',
    date: '2024.01 - 计划中',
    description:
      '计划开发一个支持 iOS 和 Android 的移动应用，提供离线优先的数据同步功能。',
    tags: ['React Native', 'TypeScript', 'GraphQL'],
    status: 'planned' as const,
  },
]

export const interests: Interest[] = [
  {
    title: '编程开源',
    icon: Code2,
    description: '热衷于参与开源项目，在 GitHub 上分享代码，关注最新技术动态。',
    color: 'text-blue-400',
  },
  {
    title: '摄影',
    icon: Camera,
    description: '喜欢用相机记录生活中的美好瞬间，偏爱风光和街拍。',
    color: 'text-purple-400',
  },
  {
    title: '阅读',
    icon: BookOpen,
    description: '经常阅读技术书籍和科技文章，保持学习和思考。',
    color: 'text-yellow-400',
  },
  {
    title: '健身',
    icon: Dumbbell,
    description: '坚持健身锻炼，保持良好的身心状态。',
    color: 'text-red-400',
  },
  {
    title: '音乐',
    icon: Music,
    description: '喜欢听各种类型的音乐，偶尔自己也会弹弹吉他。',
    color: 'text-green-400',
  },
  {
    title: '旅行',
    icon: Plane,
    description: '热爱探索新的地方，体验不同的文化和风景。',
    color: 'text-indigo-400',
  },
]

export const certificates: Certificate[] = [
  {
    title: '全栈工程师认证',
    issuer: '某知名在线教育平台',
    date: '2023年12月',
    description: '完成包括前端、后端、数据库等全栈开发课程，获得优秀毕业证书。',
    image: 'https://images.unsplash.com/photo-1496469888073-80de7e952517?w=500',
    link: 'https://example.com/cert1',
  },
  {
    title: 'AWS 解决方案架构师',
    issuer: 'Amazon Web Services',
    date: '2023年8月',
    description: '通过 AWS 认证考试，具备设计和部署可扩展系统的能力。',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500',
    link: 'https://example.com/cert2',
  },
  {
    title: 'Google 数据分析专业证书',
    issuer: 'Google',
    date: '2023年6月',
    description: '掌握数据分析工具和技术，能够进行数据驱动决策。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
  },
  {
    title: '最佳技术创新奖',
    issuer: '某技术大会',
    date: '2023年3月',
    description: '开发的开源项目在技术创新方面做出突出贡献。',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500',
    link: 'https://example.com/cert3',
  },
]

export const languages: Language[] = [
  {
    name: '英语',
    level: '熟练',
    score: 'CET-6 580',
    description:
      '能流畅阅读英文技术文档，参与英文技术讨论，撰写技术文档。日常交流无障碍。',
    certificates: ['托福 iBT 95分', '剑桥商务英语高级证书'],
  },
  {
    name: '日语',
    level: '良好',
    score: 'N2',
    description: '能阅读日文技术博客，观看技术会议视频，进行基本的技术交流。',
    certificates: ['JLPT N2'],
  },
  {
    name: '普通话',
    level: '精通',
    score: '一级甲等',
    description: '母语，具备出色的口头表达能力和写作能力。',
    certificates: ['普通话水平测试一级甲等'],
  },
  {
    name: '粤语',
    level: '良好',
    description: '能进行日常交流和简单的商务沟通。',
  },
]
