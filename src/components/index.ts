import { lazy } from 'react'
// 组件导入函数
const importPersonalInfo = () =>
  import('@/components/PersonalInfo/PersonalInfo')
const importSkills = () => import('@/components/Skills/Skills')
const importEducation = () => import('@/components/Education/Education')
const importProjects = () => import('@/components/Projects/Projects')
const importGithubProjects = () =>
  import('@/components/GithubProjects/GithubProjects')
const importExperience = () => import('@/components/Experience/Experience')
const importProjectTimeline = () =>
  import('@/components/ProjectTimeline/ProjectTimeline')
const importInterests = () => import('@/components/Interests/Interests')
const importCertificates = () =>
  import('@/components/Certificates/Certificates')
const importLanguages = () => import('@/components/Languages/Languages')
// 懒加载组件
const PersonalInfo = lazy(importPersonalInfo)
const Skills = lazy(importSkills)
const Education = lazy(importEducation)
const Projects = lazy(importProjects)
const GithubProjects = lazy(importGithubProjects)
const Experience = lazy(importExperience)
const ProjectTimeline = lazy(importProjectTimeline)
const Interests = lazy(importInterests)
const Certificates = lazy(importCertificates)
const Languages = lazy(importLanguages)

export {
  Certificates,
  Education,
  Experience,
  GithubProjects,
  Interests,
  Languages,
  PersonalInfo,
  Projects,
  ProjectTimeline,
  Skills,
}
