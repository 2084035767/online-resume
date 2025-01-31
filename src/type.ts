import { LucideIcon } from 'lucide-react'
export interface SkillsData {
  [category: string]: string[]
}
export interface SkillsProps {
  skills: SkillsData
}

export interface GithubProject {
  name: string
  description: string
  stars: number
  forks: number
  language: keyof typeof languageColors
  url: string

  topics: string[]
  lastUpdate: string
}
export interface GithubProjectsProps {
  projects: Array<GithubProject>
}

export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  experience: string
  github: string
  gitee?: string
  qq?: string
  wechat?: string
  avatar: string
  introduction: string
  qqQrCode?: string
  wechatQrCode?: string
}
export interface PersonalInfoProps {
  personalInfo: PersonalInfo
}

export interface Education {
  school: string
  degree: string

  period: string
  details: string[]
}

export interface EducationProps {
  education: Array<Education>
}

export interface Project {
  title: string
  description: string
  techStack: string[]
  highlights: string[]
  link: string
}

export interface ProjectProps {
  projects: Array<Project>
}

export interface Experience {
  company: string
  technologies: string[]
  position: string
  period: string
  achievements: string[]
}
export interface ExperienceProps {
  experience: Array<Experience>
}

export const languageColors = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-500',
  Vue: 'bg-emerald-500',
  Python: 'bg-blue-600',
  Java: 'bg-red-500',
} as const

export interface Certificate {
  title: string
  issuer: string
  date: string
  description: string
  link?: string
  image?: string
}

export interface CertificatesProps {
  certificates: Certificate[]
}

export interface Interest {
  title: string
  icon: LucideIcon
  description: string
  color: string
}

export interface InterestsProps {
  interests: Interest[]
}

export interface Language {
  name: string
  level: string
  score?: string
  description: string
  certificates?: string[]
}

export interface LanguagesProps {
  languages: Language[]
}

export interface TimelineProject {
  title: string
  date: string
  description: string
  tags: string[]
  link?: string
  status: 'completed' | 'ongoing' | 'planned'
}

export interface ProjectTimelineProps {
  projects: TimelineProject[]
}

export const personalInfo: PersonalInfo = {
  name: 'John Doe',
  title: 'Software Engineer',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'New York, NY',
  experience: '5 years of experience',
  github: 'johndoe',
  qqQrCode:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&h=500&fit=crop',
  wechatQrCode:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&h=500&fit=crop',
  avatar: 'https://example.com/john-doe.jpg',
  introduction:
    "I'm a software engineer with a passion for building scalable and efficient systems.",
}
