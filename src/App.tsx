import { usePreload } from '@/hooks/usePreload'
import { staggerContainer } from '@/utils/animations'
import { motion } from 'framer-motion'
import { FC, lazy, Suspense } from 'react'

// 组件导入函数
const importPersonalInfo = () =>
  import('@/components/PersonalInfo/PersonalInfo')
const importSkills = () => import('@/components/Skills/Skills')
const importEducation = () => import('@/components/Education/Education')
const importProjects = () => import('@/components/Projects/Projects')
// const importGithubProjects = () =>
//   import('@/components/GithubProjects/GithubProjects')
// const importExperience = () => import('@/components/Experience/Experience')
// const importProjectTimeline = () =>
//   import('@/components/ProjectTimeline/ProjectTimeline')
// const importInterests = () => import('@/components/Interests/Interests')
// const importCertificates = () =>
//   import('@/components/Certificates/Certificates')
// const importLanguages = () => import('@/components/Languages/Languages')
// 懒加载组件
const PersonalInfo = lazy(importPersonalInfo)
const Skills = lazy(importSkills)
const Education = lazy(importEducation)
const Projects = lazy(importProjects)
// const GithubProjects = lazy(importGithubProjects)
// const Experience = lazy(importExperience)
// const ProjectTimeline = lazy(importProjectTimeline)
// const Interests = lazy(importInterests)
// const Certificates = lazy(importCertificates)
// const Languages = lazy(importLanguages)

import {
  // certificates,
  // interests,
  // languages,
  education,
  // experiences,
  // githubProjects,
  personalInfo,
  projects,
  skills,
} from '@/data'

// 加载占位组件
const LoadingFallback = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-8 h-8 border-4 border-[#42B883] border-t-transparent rounded-full animate-spin" />
  </div>
)

const App: FC = () => {
  // 使用预加载 Hook
  usePreload('personal', importPersonalInfo, 0)
  usePreload('skills', importSkills, 1000)
  usePreload('education', importEducation, 2000)
  usePreload('projects', importProjects, 3000)
  // usePreload('github', importGithubProjects, 4000)
  // usePreload('experience', importExperience, 5000)
  // usePreload('projectTimeline', importProjectTimeline, 6000)
  // usePreload('interests', importInterests, 7000)
  // usePreload('certificates', importCertificates, 8000)
  // usePreload('languages', importLanguages, 9000)
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#242826] to-[#374743] text-white p-8 relative overflow-hidden scroll-smooth">
      <button
        onClick={() => window.print()}
        className="fixed bottom-4 right-4 bg-[#42B883] hover:bg-[#3aa876] text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 opacity-0 hover:opacity-100 no-print"
        aria-label="打印简历"
      >
        打印简历
      </button>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto space-y-12 pt-16"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
          <Suspense fallback={<LoadingFallback />}>
            <section id="personal">
              <PersonalInfo personalInfo={personalInfo} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="skills">
              <Skills skills={skills} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="education">
              <Education education={education} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="projects">
              <Projects projects={projects} />
            </section>
          </Suspense>

          {/*<Suspense fallback={<LoadingFallback />}>
            <section id="github">
              <GithubProjects projects={githubProjects} />
            </section>
          </Suspense>
          */}

          {/* <Suspense fallback={<LoadingFallback />}>
            <section id="experience">
              <Experience experience={experiences} />
            </section>
          </Suspense> */}

          {/* <Suspense fallback={<LoadingFallback />}>
            <section id="projectTimeline">
              <ProjectTimeline projects={timelineProjects} />
            </section>
          </Suspense> */}

          {/* <Suspense fallback={<LoadingFallback />}>
            <section id="interests">
              <Interests interests={interests} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="certificates">
              <Certificates certificates={certificates} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="languages">
              <Languages languages={languages} />
            </section>
          </Suspense> */}
        </div>
      </motion.div>
    </main>
  )
}

export default App
