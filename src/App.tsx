import { LanguageSwitch, ScrollProgress, ThemeToggle } from '@/components'
import { useTheme } from '@/contexts/ThemeContext'
import { useTranslation } from 'react-i18next'
import { usePreload } from '@/hooks/usePreload'
import { staggerContainer } from '@/utils/animations'
import { generatePDF } from '@/utils/pdfGenerator'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { FC, Suspense } from 'react'

import {
  certificates,
  education,
  experiences,
  getCertificates,
  getEducation,
  getExperiences,
  getGithubProjects,
  getInterests,
  getLanguages,
  getPersonalInfo,
  getProjects,
  getTimelineProjects,
  githubProjects,
  interests,
  languages,
  personalInfo,
  projects,
  skills,
  timelineProjects,
} from '@/data'

import {
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
  importCertificates,
  importEducation,
  importExperience,
  importGithubProjects,
  importInterests,
  importLanguages,
  importPersonalInfo,
  importProjects,
  importProjectTimeline,
  importSkills,
} from '@/components'

// 加载占位组件
const LoadingFallback = () => (
  <div className="flex items-center justify-center p-8">
    <div
      className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
      style={{ borderColor: 'var(--accent-color)', borderTopColor: 'transparent' }}
    />
  </div>
)

const App: FC = () => {
  const { currentColor, bgGradient } = useTheme()
  const { t } = useTranslation()

  // 使用翻译后的数据
  const translatedPersonalInfo = getPersonalInfo(t)
  const translatedEducation = getEducation(t)
  const translatedProjects = getProjects(t)
  const translatedExperiences = getExperiences(t)
  const translatedTimelineProjects = getTimelineProjects(t)
  const translatedInterests = getInterests(t)
  const translatedCertificates = getCertificates(t)
  const translatedLanguages = getLanguages(t)
  const translatedGithubProjects = getGithubProjects(t)

  // 使用预加载 Hook - 按优先级顺序预加载组件
  usePreload('personal', importPersonalInfo, 0)
  usePreload('skills', importSkills, 100)
  usePreload('education', importEducation, 200)
  usePreload('projects', importProjects, 300)
  usePreload('experience', importExperience, 1000)
  usePreload('github', importGithubProjects, 2000)
  usePreload('projectTimeline', importProjectTimeline, 3000)
  usePreload('interests', importInterests, 4000)
  usePreload('certificates', importCertificates, 5000)
  usePreload('languages', importLanguages, 6000)

  // 预加载关键图片资源
  usePreload('avatar', () => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve(true)
      img.src = personalInfo.avatar
    })
  }, 100)

  return (
    <>
      {/* 滚动进度条 */}
      <ScrollProgress />

      <main
        className="min-h-screen text-white p-4 sm:p-6 md:p-8 relative overflow-hidden scroll-smooth"
        style={{
          background: `linear-gradient(to bottom, ${bgGradient[0]}, ${bgGradient[1]})`,
        }}
      >
        {/* 语言切换和主题切换按钮 */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
          <LanguageSwitch />
          <ThemeToggle />
        </div>

      {/* 操作按钮组 */}
      <div className="fixed bottom-4 right-4 flex gap-2 z-40 no-print">
        {/* PDF 下载按钮 */}
        <button
          onClick={() => generatePDF()}
          className="flex items-center gap-2 text-white px-3 py-2 md:px-4 rounded-lg shadow-lg transition-all duration-300 opacity-100 md:opacity-0 md:hover:opacity-100 text-sm md:text-base"
          style={{ backgroundColor: currentColor }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${currentColor}dd`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = currentColor
          }}
          aria-label={t('app.downloadPDF')}
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">{t('app.downloadPDF')}</span>
        </button>

        {/* 打印按钮 */}
        <button
          onClick={() => window.print()}
          className="text-white px-3 py-2 md:px-4 rounded-lg shadow-lg transition-all duration-300 opacity-100 md:opacity-0 md:hover:opacity-100 text-sm md:text-base"
          style={{ backgroundColor: currentColor }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${currentColor}dd`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = currentColor
          }}
          aria-label={t('app.print')}
        >
          {t('app.print')}
        </button>
      </div>

      <motion.div
        id="resume-content"
        className="relative z-10 max-w-5xl mx-auto space-y-8 md:space-y-12 pt-8 md:pt-16"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
          <Suspense fallback={<LoadingFallback />}>
            <section id="personal">
              <PersonalInfo personalInfo={translatedPersonalInfo} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="skills">
              <Skills skills={skills} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="education">
              <Education education={translatedEducation} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="projects">
              <Projects projects={translatedProjects} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="github">
              <GithubProjects projects={translatedGithubProjects} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="experience">
              <Experience experience={translatedExperiences} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="projectTimeline">
              <ProjectTimeline projects={translatedTimelineProjects} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="interests">
              <Interests interests={translatedInterests} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="certificates">
              <Certificates certificates={translatedCertificates} />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id="languages">
              <Languages languages={translatedLanguages} />
            </section>
          </Suspense>
        </div>
      </motion.div>
      </main>
    </>
  )
}

export default App
