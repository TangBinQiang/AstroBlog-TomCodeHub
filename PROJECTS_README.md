# 项目展示页面说明

## 功能概述

在AstroBlog-TomCodeHub项目中新增了一个项目展示页面，用于展示个人技术项目和作品。

## 文件结构

### 新增文件

1. **`src/pages/projects.astro`** - 项目展示主页面
2. **`src/data/projects.ts`** - 项目数据配置文件

### 修改文件

1. **`src/components/Header.astro`** - 在导航菜单中添加了"项目"链接

## 页面功能

### 项目展示页面特性

- **精选项目展示** - 突出显示标记为精选的项目
- **项目卡片设计** - 每个项目以卡片形式展示，包含：
  - 项目封面图片
  - 项目名称和描述
  - 技术栈标签
  - 项目状态（已完成/进行中/规划中）
  - GitHub链接和在线演示链接
- **响应式设计** - 适配桌面和移动设备
- **交互效果** - 悬停动画和状态变化

### 项目数据结构

在`src/data/projects.ts`中定义了项目数据结构：

```typescript
interface Project {
  id: string;           // 项目唯一标识
  title: string;      // 项目名称
  description: string;  // 简短描述
  longDescription?: string; // 详细描述
  image: string;      // 封面图片URL
  tags: string[];     // 项目标签
  technologies: string[]; // 技术栈
  githubUrl?: string;  // GitHub仓库链接
  demoUrl?: string;    // 在线演示链接
  status: 'completed' | 'in-progress' | 'planning'; // 项目状态
  featured: boolean;   // 是否为精选项目
  date: string;       // 项目日期
}
```

## 使用方法

### 添加新项目

1. 打开 `src/data/projects.ts`
2. 在 `projects` 数组中添加新的项目对象：

```typescript
{
  id: '6',
  title: '我的新项目',
  description: '这是一个很棒的项目描述',
  longDescription: '这里是项目的详细介绍...',
  image: 'https://example.com/project-image.jpg',
  tags: ['React', 'TypeScript', 'Web开发'],
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  githubUrl: 'https://github.com/username/my-project',
  demoUrl: 'https://my-project-demo.com',
  status: 'completed',
  featured: true,
  date: '2024-12-20'
}
```

### 自定义样式

页面样式使用了项目现有的CSS变量系统：
- `--color-bg` - 背景色
- `--color-border` - 边框色
- `--color-accent` - 强调色
- `--color-text` - 文本色
- `--color-text-secondary` - 次要文本色

### 访问页面

开发环境：
```bash
npm run dev
```
然后访问：http://localhost:4323/projects

生产环境：
```bash
npm run build
npm run preview
```

## 技术栈

- **Astro** - 静态站点生成器
- **TypeScript** - 类型安全
- **CSS Variables** - 主题系统
- **响应式设计** - 移动端适配

## 注意事项

1. 确保所有项目图片使用HTTPS链接
2. GitHub和演示链接需要是可访问的URL
3. 项目状态文本已本地化为中文
4. 精选项目会优先显示在页面顶部

## 后续扩展

- 添加项目详情页
- 集成项目README自动获取
- 添加项目搜索和过滤功能
- 支持项目分类和标签筛选