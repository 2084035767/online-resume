import { themeColors, useTheme } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'
import { Check, Palette } from 'lucide-react'
import { FC, useState } from 'react'

const ThemeToggle: FC = () => {
  const { accentColor, setAccentColor, currentColor } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

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
        <Palette className="w-4 h-4" style={{ color: currentColor }} />
      </motion.button>

      {/* 下拉面板 */}
      {isOpen && (
        <>
          {/* 遮罩层 - 点击关闭 */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full right-0 mt-2 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl z-50 min-w-[200px]"
            style={{ borderColor: `${currentColor}30` }}
          >
            {/* 主题色选择 */}
            <div>
              <h3 className="text-sm font-medium text-white/80 mb-2">主题颜色</h3>
              <div className="grid grid-cols-5 gap-2">
                {Object.entries(themeColors).map(([key, color]) => (
                  <button
                    key={key}
                    onClick={() => setAccentColor(key as keyof typeof themeColors)}
                    className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${
                      accentColor === key
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-black/50'
                        : ''
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  >
                    {accentColor === key && (
                      <Check className="w-4 h-4 text-white mx-auto" />
                    )}
                  </button>
                ))}
              </div>
              <p className="text-xs text-white/50 mt-2 text-center">
                {themeColors[accentColor].name}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </div>
  )
}

export default ThemeToggle
