// 导入图标
import IconGithub from '../assets/icons/IconGitHub.svg'
import tenxun from '../assets/icons/tools/腾讯视频.svg'
// AI
import ChatGPT from '../assets/icons/tools/ChatGPT.svg'
import Claude from '../assets/icons/tools/Claude.svg'
import deepseek from '../assets/icons/tools/deepseek.svg'
import 豆包 from '../assets/icons/tools/豆包.svg'

// 图标
import iconfont from '../assets/icons/tools/iconfont.svg'
import IconPark from '../assets/icons/tools/IconPark.svg'
import icons8 from '../assets/icons/tools/icons8.svg'

export interface Tool {
  name: string;
  description: string;
  url: string;
  icon?: any;
  bgColor?: string;
}

export interface ToolCategory {
  title: string;
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    title: "常用工具",
    tools: [
      {
        name: "Can I use",
        description: "浏览器兼容性查询工具",
        url: "https://caniuse.com/",
        icon: IconGithub,
        bgColor: "bg-green-100",
      },
      {
        icon: iconfont,
        name: "TinyPNG",
        description: "图片压缩工具",
        url: "https://tinypng.com/",
        bgColor: "bg-blue-100",
      },
      {
        // icon: IconGithub,
        name: "开发者工具集",
        description: "前端开发者常用工具和资源",
        url: "#",
        bgColor: "bg-yellow-100",
      },
      {
        icon: tenxun,
        name: "在线工具",
        description: "各种实用在线工具",
        url: "#",
        bgColor: "bg-red-100",
      },
    ],
  },
  {
    title: "AI 导航",
    tools: [
      {
        icon: ChatGPT,
        name: "ChatGPT",
        description: "OpenAI开发的AI大模型（日常交流）",
        url: "https://chatgpt.com/",
      },
      {
        icon: Claude,
        name: "Claude",
        description: "Anthropic开发的AI大模型（编程开发）",
        url: "https://claude.ai/",
      },
      {
        icon: deepseek,
        name: "deepseek",
        description: "幻方量化开发的AI大模型（深度思考）",
        url: "https://claude.ai/",
      },
      {
        icon: 豆包,
        name: "豆包",
        description: "字节开发的AI大模型（生态优秀）",
        url: "https://www.doubao.com/chat/",
      },
      {
        icon: null,
        name: "Midjourney（国际）",
        description: "AI图像生成工具",
        url: "https://www.midjourney.com/",
        bgColor: "bg-yellow-100",
      },
      {
        icon: null,
        name: "Beautiful.ai（PPT）",
        description: "AI驱动的演示文稿创建工具",
        url: "https://www.beautiful.ai/",
        bgColor: "bg-red-100",
      },
    ],
  },
  {
    title: "图标库",
    tools: [
      {
        icon: iconfont,
        name: "iconfont",
        description: "阿里矢量图标库（国内最强）",
        url: "https://www.iconfont.cn/",
      },
      {
        icon: IconPark,
        name: "IconPark",
        description: "扁平化设计的线性图标库",
        url: "https://iconpark.oceanengine.com/official",
      },
      {
        icon: icons8,
        name: "ICONS8",
        description: "国外精美丰富的矢量图标库",
        url: "https://icons8.com/icons/all",
      },
    ],
  },
];