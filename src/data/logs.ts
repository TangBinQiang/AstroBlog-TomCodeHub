export interface LogEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  changes: string[];
  version?: string;
}

export const logs: LogEntry[] = [
  {
    id: "log-2023-12-15",
    date: "2023-12-15",
    title: "博客主题更新",
    version: "v1.2.0",
    description: "优化博客界面设计，提升用户体验",
    changes: [
      "更新了首页布局，增加了精选文章区域",
      "优化了文章详情页的排版和阅读体验",
      "添加了深色模式切换功能",
      "修复了移动端适配问题"
    ]
  },
  {
    id: "log-2023-11-20",
    date: "2023-11-20",
    title: "功能增强与性能优化",
    version: "v1.1.0",
    description: "增加新功能并优化网站性能",
    changes: [
      "添加了全站搜索功能",
      "优化了页面加载速度",
      "增加了代码高亮显示",
      "完善了响应式布局"
    ]
  },
  {
    id: "log-2023-10-10",
    date: "2023-10-10",
    title: "博客正式上线",
    version: "v1.0.0",
    description: "博客系统首次部署上线",
    changes: [
      "完成基础架构搭建",
      "实现文章发布功能",
      "设计并实现了初始主题样式",
      "配置了SEO元数据"
    ]
  }
];