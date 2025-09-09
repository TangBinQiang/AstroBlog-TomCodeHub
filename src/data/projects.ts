export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: 'completed' | 'in-progress' | 'planning';
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: '个人博客系统',
    description: '基于Astro构建的现代化个人博客，支持深色模式、响应式设计和SEO优化',
    longDescription: '这是一个使用Astro框架构建的现代化个人博客系统。具备完整的博客功能，包括文章管理、标签系统、搜索功能、深色模式切换等。采用静态站点生成技术，确保极快的加载速度和优秀的SEO表现。',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=85',
    tags: ['博客', 'Astro', '响应式', 'SEO'],
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'Markdown'],
    githubUrl: 'https://github.com/username/blog',
    demoUrl: 'https://blog.example.com',
    status: 'completed',
    featured: true,
    date: '2024-12-01'
  },
  {
    id: '2',
    title: '任务管理应用',
    description: '现代化的任务管理Web应用，支持团队协作和项目管理',
    longDescription: '一个功能齐全的任务管理应用，支持个人和团队使用。包含任务创建、分配、进度跟踪、截止日期提醒等功能。采用React和Node.js构建，提供实时协作体验。',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85',
    tags: ['任务管理', '协作', '实时更新'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/username/task-manager',
    demoUrl: 'https://tasks.example.com',
    status: 'in-progress',
    featured: true,
    date: '2024-11-16'
  },
  {
    id: '3',
    title: '电商网站前端',
    description: '响应式电商网站前端，包含商品展示、购物车和结账流程',
    longDescription: '为中小型电商企业打造的现代化前端解决方案。包含商品展示、搜索过滤、购物车、用户认证、订单管理等完整功能。采用Vue.js和Vuetify构建，确保优秀的用户体验。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85',
    tags: ['电商', 'Vue.js', '响应式', 'PWA'],
    technologies: ['Vue.js', 'Vuetify', 'Vuex', 'PWA'],
    githubUrl: 'https://github.com/username/ecommerce-frontend',
    demoUrl: 'https://shop.example.com',
    status: 'completed',
    featured: false,
    date: '2024-10-20'
  },
  {
    id: '4',
    title: '数据可视化仪表板',
    description: '企业级数据可视化仪表板，支持多种图表类型和实时数据更新',
    longDescription: '为企业管理者打造的数据可视化解决方案。支持多种数据源接入，提供丰富的图表类型，包括折线图、柱状图、饼图、热力图等。具备实时数据更新、用户权限管理、自定义报表等功能。',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=85',
    tags: ['数据可视化', '仪表板', '企业级'],
    technologies: ['D3.js', 'React', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/username/dashboard',
    status: 'planning',
    featured: false,
    date: '2024-12-10'
  },
  {
    id: '5',
    title: '移动天气应用',
    description: '跨平台移动天气应用，提供精准天气预报和美观的UI设计',
    longDescription: '使用React Native开发的跨平台移动天气应用。支持全球城市天气查询、7天天气预报、实时天气预警、空气质量指数等功能。采用现代化的UI设计，支持深色模式和自定义主题。',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=85',
    tags: ['移动应用', 'React Native', '天气', '跨平台'],
    technologies: ['React Native', 'Expo', 'OpenWeather API', 'AsyncStorage'],
    githubUrl: 'https://github.com/username/weather-app',
    demoUrl: 'https://weather.example.com',
    status: 'completed',
    featured: true,
    date: '2024-09-05'
  }
];