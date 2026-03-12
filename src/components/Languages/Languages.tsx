import { useTheme } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'
import { Globe2, MessageCircle } from 'lucide-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { LanguagesProps } from '@/type'

const Languages: FC<LanguagesProps> = ({ languages }) => {
  const { currentColor } = useTheme()
  const { t } = useTranslation()
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Globe2 style={{ color: currentColor }} />
        {t('sections.languages')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3
                  className="text-lg font-semibold flex items-center gap-2"
                  style={{ color: currentColor }}
                >
                  <MessageCircle className="w-5 h-5" style={{ color: currentColor }} />
                  {lang.name}
                </h3>
                <p className="text-sm text-gray-400">{lang.level}</p>
              </div>
              {lang.score && (
                <span
                  className="text-lg font-semibold"
                  style={{ color: currentColor }}
                >
                  {lang.score}
                </span>
              )}
            </div>

            <p className="text-sm text-gray-300 mb-4">{lang.description}</p>

            {lang.certificates && lang.certificates.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-400">{t('languages.certificates')}</h4>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  {lang.certificates.map((cert, certIndex) => (
                    <li key={certIndex}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 进度条 */}
            <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full"
                style={{
                  background: `linear-gradient(to right, ${currentColor}, ${currentColor}99)`,
                }}
                initial={{ width: 0 }}
                animate={{
                  width: lang.level.includes('精通')
                    ? '95%'
                    : lang.level.includes('熟练')
                    ? '80%'
                    : lang.level.includes('良好')
                    ? '65%'
                    : '50%',
                }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Languages
