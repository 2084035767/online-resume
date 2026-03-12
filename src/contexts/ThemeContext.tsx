import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

// 主题色配置
export const themeColors = {
  green: {
    name: '翠绿',
    value: '#42B883',
    twColor: 'emerald',
    bgGradient: ['#242826', '#374743'] as const, // 带绿调的灰
  },
  blue: {
    name: '蔚蓝',
    value: '#3B82F6',
    twColor: 'blue',
    bgGradient: ['#1a202c', '#2d3748'] as const, // 带蓝调的灰
  },
  purple: {
    name: '紫罗兰',
    value: '#8B5CF6',
    twColor: 'violet',
    bgGradient: ['#261c2e', '#3d2f4a'] as const, // 带紫调的灰
  },
  orange: {
    name: '橙红',
    value: '#F97316',
    twColor: 'orange',
    bgGradient: ['#2c241f', '#4a3f35'] as const, // 带橙调的灰
  },
  pink: {
    name: '粉红',
    value: '#EC4899',
    twColor: 'pink',
    bgGradient: ['#2c2028', '#4a3540'] as const, // 带粉调的灰
  },
}

export type ThemeColor = keyof typeof themeColors

interface ThemeContextType {
  accentColor: ThemeColor
  setAccentColor: (color: ThemeColor) => void
  currentColor: string
  bgGradient: readonly [string, string]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [accentColor, setAccentColorState] = useState<ThemeColor>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('accentColor') as ThemeColor
      return saved || 'green'
    }
    return 'green'
  })

  // 当主题色变化时更新 CSS 变量
  useEffect(() => {
    const color = themeColors[accentColor].value
    document.documentElement.style.setProperty('--accent-color', color)

    // 更新 theme-color meta 标签
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', color)
    }

    localStorage.setItem('accentColor', accentColor)
  }, [accentColor])

  const setAccentColor = (color: ThemeColor) => {
    setAccentColorState(color)
  }

  return (
    <ThemeContext.Provider
      value={{
        accentColor,
        setAccentColor,
        currentColor: themeColors[accentColor].value,
        bgGradient: themeColors[accentColor].bgGradient,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
