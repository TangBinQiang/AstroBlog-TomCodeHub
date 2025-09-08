// 导入图标
import IconGithub from '../assets/icons/IconGitHub.svg'
import tenxun from '../assets/icons/tools/腾讯视频.svg'

//常用
import FMHY from '../assets/icons/tools/FMHY.svg'
import CDMK from '../assets/icons/tools/CDMK.svg'
import BestVideo from '../assets/icons/tools/BestVideo.svg'
import PDF24 from '../assets/icons/tools/PDF24.svg'
import Yunso from '../assets/icons/tools/Yunso.svg'
import 云搜 from '../assets/icons/tools/云搜.svg'

// AI
import LMArena from '../assets/icons/tools/LMArena.svg'
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
  recommended?: boolean;
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
        icon: FMHY,
        name: "FMHY",
        description: "互联网上最大的免费内容集合！（伟大无需多言）",
        url: "https://fmhy.net",
        recommended: true,
      },
      {
        icon: CDMK,
        name: "CDMK",
        description: "个人认为全网最好用的在线格式转换工具（免费，转化速度快，精准度高）",
        url: "https://cdkm.com/cn/",
        recommended: false,
      },
      {
        icon: BestVideo,
        name: "Best Video",
        description: "免费的视频解析下载工具（支持的平台多，解析速度快）",
        url: "https://tinypng.com/",
        bgColor: "bg-blue-100",
        recommended: false,
      },
      {
        icon: PDF24,
        name: "PDF24 Tools",
        description: "免费在线pdf工具",
        url: "https://tools.pdf24.org/zh/",
        recommended: false,
      },
      {
        icon: 云搜,
        name: "小云搜索",
        description: "个人任务最好的网盘资源搜索工具（免费，免注册，搜索速度快，资源新）",
        url: "https://www.yunso.net/",
        recommended: false,
      },
    ],
  },
  {
    title: "AI 导航",
    tools: [
      {
        icon: LMArena,
        name: "LMArena",
        description: "Google开发集成多种AI大型模型（免注册，多种主流大模型集成，使用体验极好）。",
        url: "https://chatgpt.com/",
        recommended: true,
      },
      {
        icon: ChatGPT,
        name: "ChatGPT",
        description: "OpenAI开发的AI大模型（日常交流）",
        url: "https://chatgpt.com/",
        recommended: false,
      },
      {
        icon: Claude,
        name: "Claude",
        description: "Anthropic开发的AI大模型（编程开发）",
        url: "https://claude.ai/",
        recommended: true,
      },
      {
        icon: deepseek,
        name: "deepseek",
        description: "幻方量化开发的AI大模型（深度思考）",
        url: "https://claude.ai/",
        recommended: false,
      },
      {
        icon: 豆包,
        name: "豆包",
        description: "字节开发的AI大模型（生态优秀）",
        url: "https://www.doubao.com/chat/",
        recommended: false,
      },
      {
        icon: null,
        name: "Midjourney（国际）",
        description: "AI图像生成工具",
        url: "https://www.midjourney.com/",
        bgColor: "bg-yellow-100",
        recommended: false,
      },
      {
        icon: null,
        name: "Beautiful.ai（PPT）",
        description: "AI驱动的演示文稿创建工具",
        url: "https://www.beautiful.ai/",
        bgColor: "bg-red-100",
        recommended: false,
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
        recommended: false,
      },
      {
        icon: IconPark,
        name: "IconPark",
        description: "扁平化设计的线性图标库",
        url: "https://iconpark.oceanengine.com/official",
        recommended: false,
      },
      {
        icon: icons8,
        name: "ICONS8",
        description: "国外精美丰富的矢量图标库",
        url: "https://icons8.com/icons/all",
        recommended: false,
      },
    ],
  },
];