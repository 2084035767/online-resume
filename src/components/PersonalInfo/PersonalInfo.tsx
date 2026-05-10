import { useTheme } from '@/contexts/ThemeContext'
import { PersonalInfoProps } from '@/type'
import { fadeInUp } from '@/utils/animations'
import {
  SiGitee,
  SiGithub,
  SiQq,
  SiWechat,
} from '@icons-pack/react-simple-icons'
import { motion } from 'framer-motion'
import { Calendar, Mail, MapPin, Phone } from 'lucide-react'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const PersonalInfo: FC<PersonalInfoProps> = ({ personalInfo }) => {
  const [showQRCode, setShowQRCode] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const { currentColor } = useTheme()
  const { t } = useTranslation()

  // 检测是否为移动设备
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // 处理二维码显示（移动端点击，桌面端悬停）
  const handleQRCodeEnter = (qrCode: string) => {
    if (!isMobile && qrCode) {
      setShowQRCode(qrCode)
    }
  }

  const handleQRCodeLeave = () => {
    if (!isMobile) {
      setShowQRCode(null)
    }
  }

  const toggleQRCode = (qrCode: string) => {
    setShowQRCode(showQRCode === qrCode ? null : qrCode)
  }

  return (
    <motion.section className="space-y-6" variants={fadeInUp}>
      {/* 响应式布局：移动端垂直排列，桌面端水平排列 */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* 头像 - 移动端在上，桌面端在右 */}
        <div className="relative flex-shrink-0 order-1 md:order-2">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative group">
            {/* 柔和的光晕效果 */}
            <div
              className="absolute inset-0 rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500"
              style={{
                background: `linear-gradient(to right, ${currentColor}4D, transparent)`,
              }}
            />
            <div
              className="absolute inset-0 rounded-full blur-xl scale-105 group-hover:scale-120 transition-transform duration-700"
              style={{
                background: `linear-gradient(to bottom right, ${currentColor}33, transparent, transparent)`,
              }}
            />

            {/* 头像图片 */}
            <div
              className="relative z-10 w-full h-full rounded-full p-1 backdrop-blur-sm"
              style={{
                background: `linear-gradient(to bottom right, ${currentColor}, ${currentColor}80, transparent)`,
              }}
            >
              <img
                src={personalInfo.avatar}
                alt="Avatar"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* 光晕边框效果 */}
            <div
              className="absolute inset-0 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"
              style={{ border: `1px solid ${currentColor}4D` }}
            />
            <div
              className="absolute inset-0 rounded-full scale-125 group-hover:scale-150 transition-transform duration-700"
              style={{ border: `1px solid ${currentColor}33` }}
            />
            <div
              className="absolute inset-0 rounded-full scale-150 group-hover:scale-[1.75] transition-transform duration-1000"
              style={{ border: `1px solid ${currentColor}1A` }}
            />

            {/* 微妙的环形光效 */}
            <div
              className="absolute inset-0 rounded-full rotate-45 scale-[1.15] group-hover:scale-[1.3] transition-transform duration-700"
              style={{
                background: `linear-gradient(to right, ${currentColor}0D, transparent)`,
              }}
            />
          </div>
        </div>

        {/* 信息区域 - 移动端在下，桌面端在左 */}
        <div className="flex-1 space-y-4 md:space-y-6 order-2 md:order-1 text-center md:text-left">
          {/* 名字和职位 */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <p
              className="text-xl sm:text-2xl mt-2 font-medium"
              style={{ color: currentColor }}
            >
              {personalInfo.title}
            </p>
          </div>

          {/* 基本信息 */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 text-gray-300 text-sm sm:text-base">
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" style={{ color: currentColor }} />
              {personalInfo.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4" style={{ color: currentColor }} />
              {personalInfo.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" style={{ color: currentColor }} />
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" style={{ color: currentColor }} />
              {personalInfo.experience}
            </span>
          </div>

          {/* 社交链接 */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 md:px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm md:text-base min-h-[44px]"
            >
              <SiGithub className="w-4 h-4 md:w-5 md:h-5" />
              <span>GitHub</span>
            </a>

            {personalInfo.gitee && (
              <a
                href={personalInfo.gitee}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 md:px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm md:text-base min-h-[44px]"
              >
                <SiGitee className="w-4 h-4 md:w-5 md:h-5" />
                <span>Gitee</span>
              </a>
            )}

            {personalInfo.qq && (
              <div 
                className="relative"
                onMouseEnter={() => personalInfo.qqQrCode && handleQRCodeEnter(personalInfo.qqQrCode)}
                onMouseLeave={handleQRCodeLeave}
              >
                <button
                  onClick={() => personalInfo.qqQrCode && toggleQRCode(personalInfo.qqQrCode)}
                  className="flex items-center gap-2 px-3 py-2 md:px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm md:text-base min-h-[44px]"
                >
                  <SiQq className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{t('personal.qq')}</span>
                </button>
                {showQRCode === personalInfo.qqQrCode && (
                  <div 
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white p-2 rounded-lg shadow-lg z-50 w-36 h-36 cursor-pointer transition-opacity duration-200 ${isMobile ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQRCodeLeave();
                    }}
                  >
                    <img
                      src={personalInfo.qqQrCode}
                      alt="QQ二维码"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                    <p className="text-xs text-gray-500 text-center mt-1 md:hidden">点击关闭</p>
                  </div>
                )}
              </div>
            )}

            {personalInfo.wechat && (
              <div 
                className="relative"
                onMouseEnter={() => personalInfo.wechatQrCode && handleQRCodeEnter(personalInfo.wechatQrCode)}
                onMouseLeave={handleQRCodeLeave}
              >
                <button
                  onClick={() => personalInfo.wechatQrCode && toggleQRCode(personalInfo.wechatQrCode)}
                  className="flex items-center gap-2 px-3 py-2 md:px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm md:text-base min-h-[44px]"
                >
                  <SiWechat className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{t('personal.wechat')}</span>
                </button>
                {showQRCode === personalInfo.wechatQrCode && (
                  <div 
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white p-2 rounded-lg shadow-lg z-50 w-36 h-36 cursor-pointer transition-opacity duration-200 ${isMobile ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQRCodeLeave();
                    }}
                  >
                    <img
                      src={personalInfo.wechatQrCode}
                      alt="微信二维码"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                    <p className="text-xs text-gray-500 text-center mt-1 md:hidden">点击关闭</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 个人介绍 */}
          <div className="space-y-2 md:space-y-3">
            <h2
              className="text-lg md:text-xl font-semibold"
              style={{ color: currentColor }}
            >
              {t('personal.aboutMe')}
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {personalInfo.introduction}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default PersonalInfo