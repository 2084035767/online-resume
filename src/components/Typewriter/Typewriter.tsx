import { useTheme } from '@/contexts/ThemeContext'
import { FC, useEffect, useState } from 'react'

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  showCursor?: boolean
}

const Typewriter: FC<TypewriterProps> = ({
  text,
  speed = 50,
  delay = 500,
  className = '',
  showCursor: showCursorProp = true,
}) => {
  const [displayText, setDisplayText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const [started, setStarted] = useState(false)
  const { currentColor } = useTheme()

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!started) return

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1))
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [displayText, text, speed, started])

  // 光标闪烁效果
  useEffect(() => {
    if (!showCursorProp) return

    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    return () => clearInterval(interval)
  }, [showCursorProp])

  return (
    <span className={className}>
      {displayText}
      {showCursorProp && displayText.length < text.length && (
        <span
          className="inline-block w-0.5 h-[1em] ml-0.5 align-middle"
          style={{
            backgroundColor: currentColor,
            opacity: cursorVisible ? 1 : 0,
            transition: 'opacity 0.1s',
          }}
        />
      )}
    </span>
  )
}

export default Typewriter
