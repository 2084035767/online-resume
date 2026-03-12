import { useTheme } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { CertificatesProps } from '@/type'

const Certificates: FC<CertificatesProps> = ({ certificates }) => {
  const { currentColor } = useTheme()
  const { t } = useTranslation()
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold">{t('sections.certificates')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="group bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* 证书图片 */}
            {cert.image && (
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            )}

            {/* 证书内容 */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3
                    className="text-lg font-semibold flex items-center gap-2"
                    style={{ color: currentColor }}
                  >
                    <Award className="w-5 h-5" style={{ color: currentColor }} />
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:opacity-80"
                    style={{ color: currentColor }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-300">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Certificates
