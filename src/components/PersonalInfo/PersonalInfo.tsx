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
import { FC, useState } from 'react'

const PersonalInfo: FC<PersonalInfoProps> = ({ personalInfo }) => {
  const [showQRCode, setShowQRCode] = useState<string | null>(null)

  return (
    <motion.section className="space-y-6" variants={fadeInUp}>
      <div className="flex items-start justify-between gap-12">
        {/* 左侧信息 */}
        <div className="flex-1 space-y-6">
          {/* 名字和职位 */}
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <p className="text-2xl mt-2 text-[#42B883] font-medium">
              {personalInfo.title}
            </p>
          </div>

          {/* 基本信息 */}
          <div className="flex flex-wrap gap-4 text-gray-300">
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#42B883]" />
              {personalInfo.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#42B883]" />
              {personalInfo.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#42B883]" />
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#42B883]" />
              {personalInfo.experience}
            </span>
          </div>

          {/* 社交链接 */}
          <div className="flex gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <SiGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            {personalInfo.gitee && (
              <a
                href={personalInfo.gitee}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <SiGitee className="w-5 h-5" />
                <span>Gitee</span>
              </a>
            )}

            {personalInfo.qq && (
              <div className="relative">
                <button
                  onMouseEnter={() =>
                    personalInfo.qqQrCode &&
                    setShowQRCode(personalInfo.qqQrCode)
                  }
                  onMouseLeave={() => setShowQRCode(null)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <SiQq className="w-5 h-5" />
                  <span>QQ</span>
                </button>
                {showQRCode === personalInfo.qqQrCode && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white p-2 rounded-lg shadow-lg z-50 w-36 h-36">
                    <img
                      src={personalInfo.qqQrCode}
                      alt="QQ二维码"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
            )}

            {personalInfo.wechat && (
              <div className="relative">
                <button
                  onMouseEnter={() =>
                    personalInfo.wechatQrCode &&
                    setShowQRCode(personalInfo.wechatQrCode)
                  }
                  onMouseLeave={() => setShowQRCode(null)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <SiWechat className="w-5 h-5" />
                  <span>WeChat</span>
                </button>
                {showQRCode === personalInfo.wechatQrCode && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white p-2 rounded-lg shadow-lg z-50 w-36 h-36">
                    <img
                      src={personalInfo.wechatQrCode}
                      alt="微信二维码"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 个人介绍 */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#42B883]">个人简介</h2>
            <p className="text-gray-300 leading-relaxed">
              {personalInfo.introduction}
            </p>
          </div>
        </div>

        {/* 右侧头像 */}
        <div className="relative flex-shrink-0">
          <div className="w-48 h-48 relative group">
            {/* 柔和的光晕效果 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#42B883]/30 to-transparent blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#42B883]/20 via-transparent to-transparent blur-xl scale-105 group-hover:scale-120 transition-transform duration-700" />

            {/* 头像图片 */}
            <div className="relative z-10 w-full h-full rounded-full p-1 bg-gradient-to-br from-[#42B883] via-[#42B883]/50 to-transparent backdrop-blur-sm">
              <img
                src={personalInfo.avatar}
                alt="头像"
                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* 光晕边框效果 */}
            <div className="absolute inset-0 rounded-full border border-[#42B883]/30 scale-110 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute inset-0 rounded-full border border-[#42B883]/20 scale-125 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute inset-0 rounded-full border border-[#42B883]/10 scale-150 group-hover:scale-[1.75] transition-transform duration-1000" />

            {/* 微妙的环形光效 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#42B883]/5 to-transparent rotate-45 scale-[1.15] group-hover:scale-[1.3] transition-transform duration-700" />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default PersonalInfo
