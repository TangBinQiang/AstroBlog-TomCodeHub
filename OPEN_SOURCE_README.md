# 开源项目推荐页面

## 概述

本项目新增了一个现代化的开源项目推荐页面，采用简约优雅的设计风格，灵感来源于 GitHub 和 Linear 平台的设计美学。

## 功能特性

### 🎨 设计特色
- **简约现代**：遵循 GitHub/Linear 的简约设计美学
- **响应式布局**：完美适配桌面端和移动端
- **暗色模式**：支持深色/浅色主题切换
- **清爽有序**：避免冗余装饰，突出内容本身

### 📊 项目卡片内容
每个开源项目卡片包含以下核心信息：

- **项目头部**：头像、名称、所有者信息 + 右上角统计图标（星标数、Fork数、最后更新时间）
- **项目描述**：简洁明了的项目介绍
- **主题标签**：相关技术主题分类（可点击筛选）
- **多语言进度条系统**：顶部水平进度条显示语言占比，按百分比显示不同语言颜色
- **操作按钮**：
  - GitHub 仓库链接
  - 官方网站链接（如适用）

### 🎯 用户体验
- **悬停效果**：卡片悬停时显示微妙阴影
- **平滑过渡**：所有交互都有平滑过渡动画
- **快速访问**：一键直达 GitHub 和官网
- **移动优化**：移动端友好的触摸操作

## 数据结构

### 项目信息结构
```typescript
interface OpenSourceProject {
  id: string;           // 唯一标识
  name: string;         // 项目名称
  description: string;  // 简短描述
  fullDescription: string; // 详细描述
  githubUrl: string;    // GitHub 仓库地址
  websiteUrl?: string;  // 官方网站地址（可选）
  stars: number;        // 星标数量
  forks: number;        // Fork 数量
  language: string;     // 编程语言
  languageColor: string; // 语言颜色代码
  topics: string[];     // 技术主题标签
  lastUpdated: string;  // 最后更新时间
  license: string;      // 开源协议
  owner: string;        // 所有者/组织
  ownerAvatar: string;  // 所有者头像
}
```

## 技术实现

### 技术栈
- **Astro**：静态站点生成
- **TypeScript**：类型安全
- **CSS 变量**：主题色管理
- **响应式设计**：移动端优先

### 样式系统
使用 CSS 变量实现主题一致性：
- `--color-card`：卡片背景色
- `--color-border`：边框颜色
- `--color-foreground`：前景文本色
- `--color-muted-foreground`：次要文本色
- `--color-accent`：强调色

## 使用方法

### 添加新项目
1. 编辑 `src/data/open-source.ts` 文件
2. 在 `openSourceProjects` 数组中添加新项目对象
3. 确保包含所有必需字段

### 示例数据
```typescript
{
  id: 'example',
  name: '项目名称',
  description: '简短描述',
  fullDescription: '详细描述...',
  githubUrl: 'https://github.com/owner/repo',
  websiteUrl: 'https://example.com',
  stars: 1000,
  forks: 100,
  language: 'TypeScript',
  languageColor: '#3178c6',
  topics: ['react', 'framework'],
  lastUpdated: '2024-12-15',
  license: 'MIT',
  owner: 'owner',
  ownerAvatar: 'https://avatars.githubusercontent.com/owner'
}
```

## 页面访问
- **URL**：`/open-source`
- **导航位置**：主菜单中的"开源"选项
- **响应式**：支持桌面端、平板、手机

## 维护更新

### 数据更新
- 项目数据定期从 GitHub API 获取
- 支持手动更新项目信息
- 可扩展添加更多统计维度

### 样式优化
- 持续优化移动端体验
- 根据用户反馈调整设计细节
- 保持与现代设计趋势同步

## 贡献指南

欢迎为开源项目推荐页面贡献内容：

1. **添加项目**：通过 Pull Request 添加优质开源项目
2. **设计优化**：提出设计改进建议
3. **功能增强**：实现新的展示功能

## 浏览器兼容性
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 性能优化
- **静态生成**：页面构建时生成，访问速度快
- **图片优化**：头像图片使用 CDN 优化
- **代码分割**：按需加载资源
- **缓存策略**：合理的缓存配置