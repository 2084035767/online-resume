import { useTheme } from '@/contexts/ThemeContext'
import { EducationProps } from '@/type'
import { fadeInUp } from '@/utils/animations'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Education: FC<EducationProps> = ({ education }) => {
  const { currentColor } = useTheme()
  const { t } = useTranslation()

  return (
    <motion.section className="space-y-6" variants={fadeInUp}>
      <h2 className="text-2xl font-bold">{t('sections.education')}</h2>
      {education.map((edu, index) => (
        <motion.div
          key={index}
          className="space-y-2 p-4 rounded-lg bg-white/5"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <span className="text-gray-400">{edu.period}</span>
          </div>
          <p style={{ color: currentColor }}>{edu.degree}</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {edu.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  )
}

export default Education
