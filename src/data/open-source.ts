export interface Language {
  name: string;
  color: string;
  percentage: number;
}

export interface OpenSourceProject {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  githubUrl: string;
  websiteUrl?: string;
  stars: number;
  forks: number;
  languages: Language[];
  topics: string[];
  lastUpdated: string;
  license: string;
  owner: string;
  ownerAvatar: string;
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    id: '1',
    name: 'Astro',
    description: '用于构建快速、以内容为中心网站的 Web 框架',
    fullDescription: 'Astro 是一个现代化的静态站点生成器，专为构建快速、以内容为中心的网站而设计。它支持多种前端框架（React、Vue、Svelte等），独特的岛屿架构让你只加载必要的JavaScript。',
    githubUrl: 'https://github.com/withastro/astro',
    websiteUrl: 'https://astro.build',
    stars: 48000,
    forks: 2400,
    languages: [
      { name: 'TypeScript', color: '#3178c6', percentage: 78.5 },
      { name: 'JavaScript', color: '#f1e05a', percentage: 12.3 },
      { name: 'Go', color: '#00ADD8', percentage: 5.7 },
      { name: 'CSS', color: '#9c27b0', percentage: 3.5 }
    ],
    topics: ['static-site-generator', 'ssg', 'web-framework', 'jamstack'],
    lastUpdated: '2024-12-15',
    license: 'MIT',
    owner: 'withastro',
    ownerAvatar: 'https://avatars.githubusercontent.com/withastro'
  },
  {
    id: '2',
    name: 'Next.js',
    description: 'React 框架，用于生产环境的全栈 Web 应用',
    fullDescription: 'Next.js 是一个基于 React 的全栈框架，提供服务端渲染、静态生成、API路由等功能。它让开发者能够快速构建高性能的 Web 应用。',
    githubUrl: 'https://github.com/vercel/next.js',
    websiteUrl: 'https://nextjs.org',
    stars: 128000,
    forks: 26800,
    languages: [
      { name: 'JavaScript', color: '#f1e05a', percentage: 65.2 },
      { name: 'TypeScript', color: '#3178c6', percentage: 28.7 },
      { name: 'Rust', color: '#dea584', percentage: 4.1 },
      { name: 'CSS', color: '#9c27b0', percentage: 2.0 }
    ],
    topics: ['react', 'framework', 'ssr', 'static-site-generation'],
    lastUpdated: '2024-12-15',
    license: 'MIT',
    owner: 'vercel',
    ownerAvatar: 'https://avatars.githubusercontent.com/vercel'
  },
  {
    id: '3',
    name: 'Tailwind CSS',
    description: '功能优先的 CSS 框架，用于快速构建现代网站',
    fullDescription: 'Tailwind CSS 是一个功能优先的 CSS 框架，通过组合原子化的 CSS 类来构建自定义设计，无需离开 HTML 即可快速构建现代化界面。',
    githubUrl: 'https://github.com/tailwindlabs/tailwindcss',
    websiteUrl: 'https://tailwindcss.com',
    stars: 83000,
    forks: 4200,
    languages: [
      { name: 'TypeScript', color: '#3178c6', percentage: 82.1 },
      { name: 'JavaScript', color: '#f1e05a', percentage: 8.9 },
      { name: 'CSS', color: '#9c27b0', percentage: 6.3 },
      { name: 'HTML', color: '#e34c26', percentage: 2.7 }
    ],
    topics: ['css', 'css-framework', 'utility-first', 'responsive'],
    lastUpdated: '2024-12-14',
    license: 'MIT',
    owner: 'tailwindlabs',
    ownerAvatar: 'https://avatars.githubusercontent.com/tailwindlabs'
  },
  {
    id: '4',
    name: 'VS Code',
    description: 'Visual Studio Code 是一个轻量级但功能强大的源代码编辑器',
    fullDescription: 'Visual Studio Code 是微软开发的免费开源代码编辑器，支持多种编程语言，拥有丰富的扩展生态系统，提供智能代码补全、调试、Git 集成等功能。',
    githubUrl: 'https://github.com/microsoft/vscode',
    websiteUrl: 'https://code.visualstudio.com',
    stars: 168000,
    forks: 29600,
    languages: [
      { name: 'TypeScript', color: '#3178c6', percentage: 89.4 },
      { name: 'JavaScript', color: '#f1e05a', percentage: 6.8 },
      { name: 'CSS', color: '#9c27b0', percentage: 2.9 },
      { name: 'Python', color: '#3776ab', percentage: 0.9 }
    ],
    topics: ['editor', 'ide', 'typescript', 'electron'],
    lastUpdated: '2024-12-15',
    license: 'MIT',
    owner: 'microsoft',
    ownerAvatar: 'https://avatars.githubusercontent.com/microsoft'
  },
  {
    id: '5',
    name: 'React',
    description: '用于构建用户界面的 JavaScript 库',
    fullDescription: 'React 是 Facebook 开发的用于构建用户界面的 JavaScript 库，采用组件化开发模式，虚拟 DOM 技术，让开发者能够高效构建复杂的交互式 Web 应用。',
    githubUrl: 'https://github.com/facebook/react',
    websiteUrl: 'https://react.dev',
    stars: 228000,
    forks: 46800,
    languages: [
      { name: 'JavaScript', color: '#f1e05a', percentage: 71.8 },
      { name: 'TypeScript', color: '#3178c6', percentage: 23.4 },
      { name: 'CSS', color: '#9c27b0', percentage: 2.8 },
      { name: 'HTML', color: '#e34c26', percentage: 2.0 }
    ],
    topics: ['javascript', 'ui', 'library', 'frontend'],
    lastUpdated: '2024-12-15',
    license: 'MIT',
    owner: 'facebook',
    ownerAvatar: 'https://avatars.githubusercontent.com/facebook'
  },
  {
    id: '6',
    name: 'Vue.js',
    description: '渐进式 JavaScript 框架',
    fullDescription: 'Vue.js 是一个渐进式 JavaScript 框架，易于上手且功能强大。它采用响应式数据绑定和组合式 API，让开发者能够高效构建用户界面和单页应用。',
    githubUrl: 'https://github.com/vuejs/vue',
    websiteUrl: 'https://vuejs.org',
    stars: 208000,
    forks: 34600,
    languages: [
      { name: 'TypeScript', color: '#3178c6', percentage: 76.3 },
      { name: 'JavaScript', color: '#f1e05a', percentage: 15.2 },
      { name: 'Vue', color: '#4FC08D', percentage: 6.1 },
      { name: 'CSS', color: '#9c27b0', percentage: 2.4 }
    ],
    topics: ['javascript', 'framework', 'vue', 'frontend'],
    lastUpdated: '2024-12-14',
    license: 'MIT',
    owner: 'vuejs',
    ownerAvatar: 'https://avatars.githubusercontent.com/vuejs'
  },
  {
    id: '7',
    name: 'Node.js',
    description: '基于 Chrome V8 引擎的 JavaScript 运行时',
    fullDescription: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，让开发者能够使用 JavaScript 构建服务器端应用。它采用事件驱动、非阻塞 I/O 模型，非常适合构建高性能的网络应用。',
    githubUrl: 'https://github.com/nodejs/node',
    websiteUrl: 'https://nodejs.org',
    stars: 108000,
    forks: 28600,
    languages: [
      { name: 'JavaScript', color: '#f1e05a', percentage: 68.7 },
      { name: 'C++', color: '#f34b7d', percentage: 19.8 },
      { name: 'Python', color: '#3776ab', percentage: 7.2 },
      { name: 'TypeScript', color: '#3178c6', percentage: 4.3 }
    ],
    topics: ['javascript', 'runtime', 'v8', 'server'],
    lastUpdated: '2024-12-15',
    license: 'MIT',
    owner: 'nodejs',
    ownerAvatar: 'https://avatars.githubusercontent.com/nodejs'
  },
  {
    id: '8',
    name: 'Deno',
    description: '现代化的 JavaScript 和 TypeScript 运行时',
    fullDescription: 'Deno 是一个简单、现代且安全的 JavaScript 和 TypeScript 运行时，使用 V8 引擎并内置于 Rust。它提供内置的 TypeScript 支持、安全默认设置和优秀的开发体验。',
    githubUrl: 'https://github.com/denoland/deno',
    websiteUrl: 'https://deno.com',
    stars: 93000,
    forks: 5100,
    languages: [
      { name: 'Rust', color: '#dea584', percentage: 85.2 },
      { name: 'TypeScript', color: '#3178c6', percentage: 12.1 },
      { name: 'JavaScript', color: '#f1e05a', percentage: 2.7 }
    ],
    topics: ['typescript', 'runtime', 'rust', 'secure'],
    lastUpdated: '2024-12-15',
    license: 'MIT',
    owner: 'denoland',
    ownerAvatar: 'https://avatars.githubusercontent.com/denoland'
  }
];