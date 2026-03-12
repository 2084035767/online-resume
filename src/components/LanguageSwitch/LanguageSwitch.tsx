import { useTheme } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'
import { Check, Globe } from 'lucide-react'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitch: FC = () => {
  const { i18n, t } = useTranslation()
  const { currentColor } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
  ]

  const currentLanguage = languages.find((lang) => lang.code === i18n.language)

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      {/* 主按钮 */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ borderColor: `${currentColor}40` }}
      >
        <Globe className="w-4 h-4" style={{ color: currentColor }} />
        <span className="text-sm hidden sm:inline">
          {currentLanguage?.label}
        </span>
      </motion.button>

      {/* 下拉面板 */}
      {isOpen && (
        <>
          {/* 遮罩层 */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full right-0 mt-2 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl z-50 min-w-[150px]"
            style={{ borderColor: `${currentColor}30` }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
                {i18n.language === lang.code && (
                  <Check
                    className="w-4 h-4 ml-auto"
                    style={{ color: currentColor }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  )
}

export default LanguageSwitch
