export interface FriendLink {
  name: string;
  url: string;
  description: string;
  avatar: string;
  tags?: string[];
  recommended?: boolean;
}

export const friendLinks: FriendLink[] = [
  {
    name: "小明同学",
    url: "https://example.com",
    description: "热爱技术的前端开发者，分享编程心得和生活感悟",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Xiaoming&backgroundColor=b6e3f4",
    tags: ["前端", "React", "生活"],
    recommended: true
  },
  {
    name: "设计小匠",
    url: "https://design.example.com",
    description: "UI/UX设计师，专注用户体验和视觉设计",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    tags: ["设计", "UI/UX", "创意"]
  },
  {
    name: "后端大佬",
    url: "https://backend.example.com",
    description: "全栈工程师，深耕后端架构和性能优化",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    tags: ["后端", "架构", "性能"]
  },
  {
    name: "产品经理",
    url: "https://pm.example.com",
    description: "互联网产品经理，分享产品思考和行业观察",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
    tags: ["产品", "思考", "商业"]
  },
  {
    name: "摄影爱好者",
    url: "https://photo.example.com",
    description: "旅行摄影师，用镜头记录世界的美好瞬间",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    tags: ["摄影", "旅行", "生活"]
  },
  {
    name: "读书达人",
    url: "https://book.example.com",
    description: "阅读推广者，分享书评和阅读心得体会",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    tags: ["阅读", "书评", "成长"]
  }
];

export const siteInfo = {
  title: "我的朋友们",
  subtitle: "志同道合的朋友们，一起构建更好的网络社区",
  description: "这里收录了一些我认识和欣赏的朋友们，他们来自不同的领域，有着各自独特的见解和才华。"
};