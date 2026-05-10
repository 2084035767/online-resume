# AGENTS.md - 项目上下文指南

## 项目概述

这是一个基于 **React + Vite + TypeScript + Tailwind CSS** 开发的**在线简历单页应用**（SPA）。

该项目是一个纯前端应用，零后端依赖，主要用于展示个人介绍和简历信息。设计简洁现代，支持响应式布局、Framer Motion 动画效果和打印功能。

---

## 技术栈

| 类别       | 技术选型                                                   | 版本     |
|------------|------------------------------------------------------------|----------|
| 框架       | React（函数组件 + Hooks）                                  | ^19.0.0  |
| 构建工具   | Vite（快速热更新、优化打包）                               | ^6.0.7   |
| 语言       | TypeScript（严格模式）                                     | ^5.6.3   |
| UI 库      | shadcn/ui（基于 Radix UI + TailwindCSS）                   | -        |
| 动画       | Framer Motion                                              | ^12.0.6  |
| 图标       | Lucide React + Simple Icons                                | -        |
| 样式       | Tailwind CSS + 自定义 CSS 变量                             | ^3.4.14  |

### 主要依赖

```json
{
  "@icons-pack/react-simple-icons": "^11.2.0",
  "@radix-ui/react-slot": "^1.1.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.1",
  "framer-motion": "^12.0.6",
  "lucide-react": "0.474.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwindcss-animate": "^1.0.7"
}
```

---

## 项目结构

```
F:\web\resume\
├── public/                     # 静态资源
│   ├── images/                 # 头像、二维码等图片
│   │   ├── avatar.jpg
│   │   ├── qq-qrcode.png
│   │   └── wechat-qrcode.png
│   └── vite.svg
├── src/
│   ├── components/             # React 组件
│   │   ├── ui/                 # shadcn/ui 基础组件
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── Certificates/       # 证书展示组件
│   │   ├── Education/          # 教育经历组件
│   │   ├── Experience/         # 工作经历组件
│   │   ├── GithubProjects/     # GitHub 项目组件
│   │   ├── Interests/          # 兴趣爱好组件
│   │   ├── Languages/          # 语言能力组件
│   │   ├── PersonalInfo/       # 个人信息组件
│   │   ├── Projects/           # 项目展示组件
│   │   ├── ProjectTimeline/    # 项目时间线组件
│   │   └── Skills/             # 技能展示组件
│   ├── hooks/                  # 自定义 React Hooks
│   │   └── usePreload.ts
│   ├── styles/                 # 全局样式和打印样式
│   │   ├── globals.css
│   │   └── print.css
│   ├── utils/                  # 工具函数和动画配置
│   │   ├── animations.ts
│   │   ├── cn.ts
│   │   └── constants.ts
│   ├── data.ts                 # 简历数据（可自定义）
│   ├── type.ts                 # TypeScript 类型定义
│   ├── App.tsx                 # 主应用组件
│   └── main.tsx                # 应用入口
├── index.html                  # HTML 模板
├── vite.config.ts              # Vite 配置
├── tailwind.config.ts          # Tailwind CSS 配置
├── components.json             # shadcn/ui 配置
└── package.json                # 项目依赖和脚本
```

---

## 常用命令

```bash
# 安装依赖（推荐 pnpm）
pnpm install

# 启动开发服务器（默认端口 5173）
pnpm dev

# 构建生产版本（TypeScript 编译 + Vite 打包）
pnpm build

# 预览生产构建
pnpm preview

# 运行 ESLint 检查
pnpm lint
```

---

## 开发规范

### 1. 组件开发

- 使用 **函数组件** + **React Hooks**
- 组件使用 `lazy()` 进行代码分割，支持 Suspense 加载
- 组件文件路径：`src/components/ComponentName/ComponentName.tsx`
- 类型定义统一放在 `src/type.ts`
- 组件统一在 `src/components/index.ts` 中导出

### 2. 样式规范

- 使用 **Tailwind CSS** 进行样式开发
- 主题色配置在 `tailwind.config.ts`，使用 CSS 变量（HSL 格式）
- 全局样式在 `src/styles/globals.css`
- 打印样式在 `src/styles/print.css`
- 支持暗黑模式（通过 `darkMode: ['class']` 配置）
- 动画配置包括渐变动画（gradient）、手风琴动画等

### 3. 数据管理

- 所有简历数据集中管理在 `src/data.ts`
- 支持的数据类型包括：
  - `personalInfo` - 个人信息（含联系方式、头像、二维码）
  - `skills` - 技能列表（按类别分组）
  - `education` - 教育经历
  - `experiences` - 工作经历
  - `projects` - 项目经历
  - `githubProjects` - GitHub 开源项目
  - `timelineProjects` - 项目时间线（支持 ongoing/completed/planned 状态）
  - `certificates` - 证书与荣誉
  - `languages` - 语言能力
  - `interests` - 兴趣爱好

### 4. 动画效果

- 使用 **Framer Motion** 实现入场动画和交互效果
- 动画配置统一在 `src/utils/animations.ts`
- 支持 `staggerContainer`、`fadeInUp` 等预设动画变体
- 页面采用渐变背景（从 `#242826` 到 `#374743`）
- 主题色为 `#42B883`（Vue 绿色调）

### 5. shadcn/ui 配置

项目使用 shadcn/ui 组件库，配置在 `components.json`：

- **风格**: default
- **基础颜色**: zinc
- **CSS 变量**: 启用
- **图标库**: lucide
- **组件别名**: `@/components/ui`
- **工具函数别名**: `@/lib/utils`

---

## 路径别名

项目配置了以下路径别名（在 `vite.config.ts` 中定义）：

| 别名   | 对应路径      |
|--------|---------------|
| `@`    | `./src`       |

其他子路径（如 `@/components`、`@/hooks` 等）通过 TypeScript/Vite 模块解析自动映射到 `src/` 下的对应目录。

---

## 自定义配置

### 修改简历内容

编辑 `src/data.ts` 文件，修改对应的导出常量即可更新简历内容。所有数据都有完整的 TypeScript 类型定义，可参考 `src/type.ts`。

### 修改主题颜色

1. 编辑 `tailwind.config.ts` 中的 `theme.extend.colors`
2. 编辑 `src/styles/globals.css` 中的 CSS 变量（HSL 格式）
3. 主色调目前为 `#42B883`，在 `App.tsx` 和组件中直接使用

### 添加新组件

1. 在 `src/components/` 下创建组件文件夹（大驼峰命名）
2. 在 `src/type.ts` 中定义组件 Props 类型
3. 在 `src/components/index.ts` 中添加懒加载导出
4. 在 `src/App.tsx` 中引入并使用组件（包裹在 Suspense 中）

### 添加 shadcn/ui 组件

```bash
# 使用 shadcn/ui CLI 添加组件（如需）
npx shadcn add <component-name>
```

---

## 打印功能

项目内置打印支持：
- 点击页面右下角"打印简历"按钮即可打印（按钮默认隐藏，悬停显示）
- 打印样式已优化，会隐藏不必要元素（如打印按钮、动画效果）
- 打印样式定义在 `src/styles/print.css`
- 使用 `no-print` 类名标记不需要打印的元素

---

## 构建与部署

### 本地构建

```bash
pnpm build
```

构建输出在 `dist/` 目录，包含：
- 优化后的静态资源
- 代码分割的 JS 文件
- 压缩后的 CSS

### 部署

这是一个纯前端项目，构建后的静态文件可直接部署到任何静态托管服务：
- GitHub Pages
- Vercel
- Netlify
- 腾讯云 COS / 阿里云 OSS

---

## 许可证

MIT © 2025 [子十]

---

> **提示**: 这是一个纯前端项目，构建后的静态文件可直接部署到任何静态托管服务（如 GitHub Pages、Vercel、Netlify 等）。