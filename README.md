# 在线简历 —— 基于 React + Vite 的单页应用

> 一个极简、响应式的「个人介绍 + 简历」网页 ，100% 纯前端，零后端依赖。

---

## 🎯 项目亮点

- **现代化技术栈**：React 19 + Vite 6 + TypeScript 5 + Tailwind CSS + shadcn/ui
- **响应式设计**：完美适配桌面端和移动端
- **主题切换**：5 种主题色可选（翠绿、蔚蓝、紫罗兰、橙红、粉红），背景色随主题色变化
- **多语言支持**：中文/英文一键切换
- **动画丰富**：Framer Motion 实现流畅的入场和交互动画
- **PDF 导出**：一键下载简历为 PDF
- **PWA 支持**：可安装为桌面/移动应用，支持离线访问
- **性能优化**：组件懒加载、图片懒加载、资源预加载

---

## 🛠️ 技术栈

| 类别       | 技术选型                                      |
| ---------- | --------------------------------------------- |
| 框架       | React 19（函数组件 + Hooks）                  |
| 构建工具   | Vite 6（快速热更新、优化打包）                |
| 语言       | TypeScript 5（严格模式）                      |
| UI 库      | shadcn/ui（基于 Radix UI + TailwindCSS）      |
| 动画       | Framer Motion                                 |
| 图标       | Lucide React + Simple Icons                   |
| 国际化     | i18next + react-i18next                       |
| PDF 生成   | html2canvas + jsPDF                           |
| PWA        | Service Worker + Web App Manifest             |
| 样式       | Tailwind CSS 3 + CSS 变量                     |

---

## 🚀 快速开始

```bash
# 1. 克隆项目
git clone https://github.com/2084035767/online-resume.git
cd online-resume

# 2. 安装依赖（推荐 pnpm）
pnpm install

# 3. 本地开发
pnpm dev
# 浏览器访问 http://localhost:5173

# 4. 构建生产版本
pnpm build

# 5. 预览生产构建
pnpm preview
```

---

## ✨ 已实现功能

### 🎨 主题系统
- [x] 5 种主题色可选（翠绿、蔚蓝、紫罗兰、橙红、粉红）
- [x] 背景色随主题色变化（带色调的灰色背景）
- [x] 头像、按钮等元素跟随主题色
- [x] 本地存储记忆用户偏好

### 🌐 多语言支持
- [x] 中文/英文双语切换
- [x] 自动检测浏览器语言
- [x] 本地存储记忆语言偏好

### 📱 响应式设计
- [x] 移动端优先的响应式布局
- [x] 触摸友好的交互设计
- [x] 适配各种屏幕尺寸

### ⚡ 性能优化
- [x] React.lazy 组件懒加载
- [x] Suspense 加载占位
- [x] 图片懒加载
- [x] 资源预加载
- [x] 组件预加载策略

### 🎬 动画效果
- [x] Framer Motion 入场动画
- [x] 滚动触发动画
- [x] 卡片悬停效果
- [x] 页面滚动进度条

### 📄 导出功能
- [x] 浏览器打印优化
- [x] 一键下载 PDF

### 📱 PWA 支持
- [x] Web App Manifest 配置
- [x] Service Worker 离线缓存
- [x] 可安装为桌面/移动应用
- [x] 多尺寸图标自动生成
- [x] iOS Safari 支持

---

## 🎉 全部功能已实现

本项目所有规划功能均已开发完成：

- ✅ 优化 README 文档
- ✅ 优化加载性能
- ✅ 增加更多交互动画
- ✅ 支持多语言切换
- ✅ 添加简历下载功能
- ✅ 优化移动端体验
- ✅ 支持自定义主题颜色
- ✅ PWA 渐进式 Web 应用支持

---

## 📁 项目结构

```
F:\web\resume\
├── public/                 # 静态资源
│   ├── icons/             # PWA 图标（72x72 - 512x512）
│   ├── images/            # 头像、二维码等图片
│   ├── manifest.json      # PWA 配置文件
│   └── sw.js              # Service Worker
├── src/
│   ├── components/        # React 组件
│   │   ├── ui/           # shadcn/ui 基础组件
│   │   ├── Certificates/ # 证书展示
│   │   ├── Education/    # 教育经历
│   │   ├── Experience/   # 工作经历
│   │   ├── GithubProjects/ # GitHub 项目
│   │   ├── Interests/    # 兴趣爱好
│   │   ├── Languages/    # 语言能力
│   │   ├── PersonalInfo/ # 个人信息
│   │   ├── Projects/     # 项目经历
│   │   ├── ProjectTimeline/ # 项目时间线
│   │   ├── Skills/       # 技能展示
│   │   ├── LanguageSwitch/  # 语言切换按钮
│   │   ├── ThemeToggle/  # 主题切换按钮
│   │   ├── ScrollProgress/  # 滚动进度条
│   │   └── Typewriter/   # 打字机效果
│   ├── contexts/         # 上下文（主题、语言）
│   ├── hooks/            # 自定义 Hooks
│   ├── i18n/             # 国际化配置
│   │   └── locales/      # 翻译文件
│   ├── styles/           # 全局样式
│   ├── utils/            # 工具函数
│   ├── data.ts           # 简历数据
│   ├── type.ts           # 类型定义
│   └── App.tsx           # 主应用
├── index.html
├── vite.config.ts
└── package.json
```

---

## 📄 License

MIT © 2025 [子十]

---

> 如果这个项目对你有帮助，给个 ⭐ 鼓励一下吧！