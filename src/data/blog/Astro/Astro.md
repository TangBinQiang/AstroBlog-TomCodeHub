---
author: Sat Naing
pubDatetime: 2025-08-20T15:44:00Z
modDatetime: 2025-08-20T15:45:00Z
title: Docs-Astro-paper
slug:  Docs-Astro-paper
featured: true
draft: false
tags:
  - docs
description: 创建Astro项目，应用Astro-paper主题
---

AstroPaper is a highly customizable Astro blog theme. With AstroPaper, you can customize everything according to your personal taste. This article will explain how you can make some customizations easily in the config file.

## Table of contents

## 1、创建Astro-paper项目

> 本博客使用Astro-paper主题搭建。

### 1.2 安装依赖

``` bash
# install dependencies if you haven't done so in the previous step.
pnpm install
```

### 1.3 运行项目

``` bash
# start running the project
pnpm run dev
```

### 1.4 运行项目 

``` bash
pnpm run dev
```
> 查看search（搜索功能）是否成功。

## 2、部署项目

``` bash
echo "# Astro-paper_CN" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/用户名/仓库名.git
git push -u origin main
```
> 注：如果是git clone下载astro-paper，记得删除项目里的.git文件。

## 3、配置主题

### 3.1 配置文章页面布局
> 双栏布局：左文章，右目录。

![](./img/image1.webp)

#### 3.1.1 新建toc.css

``` css file=./src/styles
/* 目录样式 */
/* 文章布局调整为两栏 */
@media (min-width: 1024px) {
  .post-content-wrapper {
    display: flex;
    gap: 2rem;
    position: relative;
  }

  /* 文章内容区域调整 */
  .post-content-wrapper #article {
    flex: 1;
    max-width: calc(100% - 280px);
  }

  /* 隐藏文章中原有的目录 */
  .post-content-wrapper #article details summary:has(+ ul li a[href^="#"]) {
    display: none;
  }
  
  .post-content-wrapper #article details:has(summary:contains("Table of contents")) {
    display: none;
  }

  /* 右侧边栏容器 */
  .right-sidebar {
    width: 250px;
    position: sticky;
    top: 20px;
    align-self: flex-start;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    padding: 1rem;
    border-left: 1px solid var(--color-border);
    font-size: 0.9rem;
  }

  /* 目录标题样式 */
  .right-sidebar h2 {
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 0.75rem;
  }

  /* 目录列表样式 */
  .right-sidebar ul {
    padding-left: 1rem;
  }

  .right-sidebar li {
    margin-bottom: 0.5rem;
  }

  .right-sidebar a {
    color: var(--color-foreground);
    text-decoration: none;
    transition: color 0.2s;
  }

  .right-sidebar a:hover {
    color: var(--color-accent);
  }
  
  /* 隐藏文章中的目录 */
  #article h2:has(+ details):has(summary:contains("Table of contents")),
  #article details:has(summary:contains("Table of contents")) {
    display: none;
  }
}

/* 移动端不显示右侧边栏 */
@media (max-width: 1023px) {
  .right-sidebar {
    display: none;
  }
}
```

#### 3.1.2 修改PostDetails.astro
``` astro file=./src/layouts/PostDetails.astro
---
import { render, type CollectionEntry } from "astro:content";
import Layout from "@/layouts/Layout.astro";
import Header from "@/components/Header.astro";
import Footer from "@/components/Footer.astro";
import Tag from "@/components/Tag.astro";
import Datetime from "@/components/Datetime.astro";
import EditPost from "@/components/EditPost.astro";
import ShareLinks from "@/components/ShareLinks.astro";
import BackButton from "@/components/BackButton.astro";
import BackToTopButton from "@/components/BackToTopButton.astro";
import { getPath } from "@/utils/getPath";
import { slugifyStr } from "@/utils/slugify";
import IconChevronLeft from "@/assets/icons/IconChevronLeft.svg";
import IconChevronRight from "@/assets/icons/IconChevronRight.svg";
import { SITE } from "@/config";

export interface Props {
  post: CollectionEntry<"blog">;
  posts: CollectionEntry<"blog">[];
}

const { post, posts } = Astro.props;

const {
  title,
  author,
  description,
  ogImage: initOgImage,
  canonicalURL,
  pubDatetime,
  modDatetime,
  timezone,
  tags,
  hideEditPost,
} = post.data;

const { Content } = await render(post);

let ogImageUrl: string | undefined;

// Determine OG image source
if (typeof initOgImage === "string") {
  ogImageUrl = initOgImage; // Remote OG image (absolute URL)
} else if (initOgImage?.src) {
  ogImageUrl = initOgImage.src; // Local asset
}

// Use dynamic OG image if enabled and no remote|local ogImage
if (!ogImageUrl && SITE.dynamicOgImage) {
  ogImageUrl = `${getPath(post.id, post.filePath)}/index.png`;
}

// Resolve OG image URL (or fallback to SITE.ogImage / default `og.png`)
const ogImage = ogImageUrl
  ? new URL(ogImageUrl, Astro.url.origin).href
  : undefined;

const layoutProps = {
  title: `${title} | ${SITE.title}`,
  author,
  description,
  pubDatetime,
  modDatetime,
  canonicalURL,
  ogImage,
  scrollSmooth: true,
};

/* ========== Prev/Next Posts ========== */

const allPosts = posts.map(({ data: { title }, id, filePath }) => ({
  id,
  title,
  filePath,
}));

const currentPostIndex = allPosts.findIndex(a => a.id === post.id);

const prevPost = currentPostIndex !== 0 ? allPosts[currentPostIndex - 1] : null;
const nextPost =
  currentPostIndex !== allPosts.length ? allPosts[currentPostIndex + 1] : null;
---

<Layout {...layoutProps}>
  <Header />
  <BackButton />
  <main
    id="main-content"
    class:list={[
      "mx-auto w-full max-w-app px-4 pb-12",
      { "mt-8": !SITE.showBackButton },
    ]}
    data-pagefind-body
  >
    <h1
      transition:name={slugifyStr(title)}
      class="inline-block text-2xl font-bold text-accent sm:text-3xl"
    >
      {title}
    </h1>
    <div class="my-2 flex items-center gap-2">
      <Datetime {pubDatetime} {modDatetime} {timezone} size="lg" />
      <span
        aria-hidden="true"
        class:list={[
          "max-sm:hidden",
          { hidden: !SITE.editPost.enabled || hideEditPost },
        ]}>|</span
      >
      <EditPost {hideEditPost} {post} class="max-sm:hidden" />
    </div>
    /* [!code --:6] */
    <article
      id="article"
      class="app-prose mx-auto mt-8 max-w-app prose-pre:bg-(--shiki-light-bg) dark:prose-pre:bg-(--shiki-dark-bg)"
    >
      <Content />
    </article>
    
    /* [!code ++:13] */
    <div class="post-content-wrapper">
      <article
        id="article"
        class="app-prose mx-auto mt-8 prose-pre:bg-(--shiki-light-bg) dark:prose-pre:bg-(--shiki-dark-bg)"
      >
        <Content />
      </article>
      
      <div class="right-sidebar">
        <h2>目录</h2>
        <div id="toc-content"></div>
      </div>
    </div>

    <hr class="my-8 border-dashed" />

    <EditPost class="sm:hidden" {hideEditPost} {post} />

    <ul class="mt-4 mb-8 sm:my-8">
      {tags.map(tag => <Tag tag={slugifyStr(tag)} tagName={tag} />)}
    </ul>

    <BackToTopButton />

    <ShareLinks />

    <hr class="my-6 border-dashed" />

    <!-- Previous/Next Post Buttons -->
    <div data-pagefind-ignore class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {
        prevPost && (
          <a
            href={getPath(prevPost.id, prevPost.filePath)}
            class="flex w-full gap-1 hover:opacity-75"
          >
            <IconChevronLeft class="inline-block flex-none rtl:rotate-180" />
            <div>
              <span>上一篇 文章</span>
              <div class="text-sm text-accent/85">{prevPost.title}</div>
            </div>
          </a>
        )
      }
      {
        nextPost && (
          <a
            href={getPath(nextPost.id, nextPost.filePath)}
            class="flex w-full justify-end gap-1 text-end hover:opacity-75 sm:col-start-2"
          >
            <div>
              <span>下一篇 文章</span>
              <div class="text-sm text-accent/85">{nextPost.title}</div>
            </div>
            <IconChevronRight class="inline-block flex-none rtl:rotate-180" />
          </a>
        )
      }
    </div>
  </main>
  <Footer />
</Layout>

<script is:inline data-astro-rerun>
  /** Create a progress indicator
   *  at the top */
  function createProgressBar() {
    // Create the main container div
    const progressContainer = document.createElement("div");
    progressContainer.className =
      "progress-container fixed top-0 z-10 h-1 w-full bg-background";

    // Create the progress bar div
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar h-1 w-0 bg-accent";
    progressBar.id = "myBar";

    // Append the progress bar to the progress container
    progressContainer.appendChild(progressBar);

    // Append the progress container to the document body or any other desired parent element
    document.body.appendChild(progressContainer);
  }
  createProgressBar();

  /** Update the progress bar
   *  when user scrolls */
  function updateScrollProgress() {
    document.addEventListener("scroll", () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (document) {
        const myBar = document.getElementById("myBar");
        if (myBar) {
          myBar.style.width = scrolled + "%";
        }
      }
    });
  }
  updateScrollProgress();

  /** Attaches links to headings in the document,
   *  allowing sharing of sections easily */
  function addHeadingLinks() {
    const headings = Array.from(
      document.querySelectorAll("h2, h3, h4, h5, h6")
    );
    for (const heading of headings) {
      heading.classList.add("group");
      const link = document.createElement("a");
      link.className =
        "heading-link ms-2 no-underline opacity-75 md:opacity-0 md:group-hover:opacity-100 md:focus:opacity-100";
      link.href = "#" + heading.id;

      const span = document.createElement("span");
      span.ariaHidden = "true";
      span.innerText = "#";
      link.appendChild(span);
      heading.appendChild(link);
    }
  }
  addHeadingLinks();

  /** Attaches copy buttons to code blocks in the document,
   * allowing users to copy code easily. */
  function attachCopyButtons() {
    const copyButtonLabel = "Copy";
    const codeBlocks = Array.from(document.querySelectorAll("pre"));

    for (const codeBlock of codeBlocks) {
      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";

      // Check if --file-name-offset custom property exists
      const computedStyle = getComputedStyle(codeBlock);
      const hasFileNameOffset =
        computedStyle.getPropertyValue("--file-name-offset").trim() !== "";

      // Determine the top positioning class
      const topClass = hasFileNameOffset
        ? "top-(--file-name-offset)"
        : "-top-3";

      const copyButton = document.createElement("button");
      copyButton.className = `copy-code absolute end-3 ${topClass} rounded bg-muted border border-muted px-2 py-1 text-xs leading-4 text-foreground font-medium`;
      copyButton.innerHTML = copyButtonLabel;
      codeBlock.setAttribute("tabindex", "0");
      codeBlock.appendChild(copyButton);

      // wrap codebock with relative parent element
      codeBlock?.parentNode?.insertBefore(wrapper, codeBlock);
      wrapper.appendChild(codeBlock);

      copyButton.addEventListener("click", async () => {
        await copyCode(codeBlock, copyButton);
      });
    }

    async function copyCode(block, button) {
      const code = block.querySelector("code");
      const text = code?.innerText;

      await navigator.clipboard.writeText(text ?? "");

      // visual feedback that task is completed
      button.innerText = "Copied";

      setTimeout(() => {
        button.innerText = copyButtonLabel;
      }, 700);
    }
  }
  attachCopyButtons();

  /* Go to page start after page swap */
  document.addEventListener("astro:after-swap", () =>
    window.scrollTo({ left: 0, top: 0, behavior: "instant" })
  );
  
  /* [!code ++:87] */
  // 提取文章中的目录并显示在右侧边栏
  function extractTableOfContents() {
    const article = document.getElementById("article");
    const tocContent = document.getElementById("toc-content");
    
    if (!article || !tocContent) return;
    
    // 清空目录内容，避免重复
    tocContent.innerHTML = "";
    
    // 查找文章中的目录
    const tocDetails = Array.from(article.querySelectorAll("details")).find(
      details => {
        const summary = details.querySelector("summary");
        return summary && summary.textContent?.trim() === "Table of contents";
      }
    );
    
    // 先隐藏所有可能的目录元素
    Array.from(article.querySelectorAll("details")).forEach(details => {
      const summary = details.querySelector("summary");
      if (summary && summary.textContent?.trim() === "Table of contents") {
        details.style.display = "none";
      }
    });
    
    if (tocDetails) {
      // 复制目录内容到右侧边栏
      const tocList = tocDetails.querySelector("ul");
      if (tocList) {
        // 复制目录内容
        const clonedList = tocList.cloneNode(true);
        
        // 移除所有 # 符号
        Array.from(clonedList.querySelectorAll("a")).forEach(link => {
          // 移除链接文本中的 # 符号
          link.textContent = link.textContent?.replace(/#/g, "").trim();
        });
        
        tocContent.appendChild(clonedList);
      }
    } else {
      // 如果没有找到目录，则生成一个基于标题的目录
      const headings = Array.from(article.querySelectorAll("h2, h3, h4")).filter(
        heading => {
          const headingText = heading.textContent?.trim() || "";
          return headingText !== "Table of contents";
        }
      );
      
      if (headings.length > 0) {
        const ul = document.createElement("ul");
        
        headings.forEach(heading => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          
          // 创建锚点ID（如果没有）
          if (!heading.id) {
            heading.id = heading.textContent?.trim().toLowerCase().replace(/\s+/g, "-") || "";
          }
          
          a.href = `#${heading.id}`;
          // 移除标题文本中的 # 符号
          a.textContent = heading.textContent?.replace(/#/g, "").trim();
          
          // 根据标题级别添加缩进
          if (heading.tagName === "H3") {
            li.style.paddingLeft = "1rem";
          } else if (heading.tagName === "H4") {
            li.style.paddingLeft = "2rem";
          }
          
          li.appendChild(a);
          ul.appendChild(li);
        });
        
        tocContent.appendChild(ul);
      }
    }
  }
  
  // 在每次页面加载完成后提取目录
  document.addEventListener("astro:page-load", extractTableOfContents);
  
  // 确保在页面切换时也能正确处理目录
  document.addEventListener("astro:after-swap", extractTableOfContents);
</script>
```

### 3.2 配置目录的折叠功能
> 配置右侧目录的折叠功能，如果文章目录多可以配置该功能。

#### 3.2.1 修改toc.css
> 直接复制文件，覆盖toc.css即可
``` css file=./src/style/toc.css
/* 目录样式 */
/* 文章布局调整为两栏 */
@media (min-width: 1024px) {
  .post-content-wrapper {
    display: flex;
    gap: 2rem;
    position: relative;
  }

  /* 文章内容区域调整 */
  .post-content-wrapper #article {
    flex: 1;
    max-width: calc(100% - 280px);
  }

  /* 隐藏文章中原有的目录 */
  .post-content-wrapper #article details summary:has(+ ul li a[href^="#"]) {
    display: none;
  }
  
  .post-content-wrapper #article details:has(summary:contains("Table of contents")) {
    display: none;
  }

  /* 右侧边栏容器 */
  .right-sidebar {
    width: 250px;
    position: sticky;
    top: 20px;
    align-self: flex-start;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    padding: 1rem;
    border-left: 1px solid var(--color-border);
    font-size: 0.9rem;
  }

  /* 目录标题样式 */
  .right-sidebar h2 {
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 0.75rem;
  }

  /* 目录列表样式 */
  .right-sidebar ul {
    padding-left: 1.25rem;
    list-style: none;
    margin: 0;
  }

  /* 目录项基本样式 */
  .right-sidebar li {
    position: relative;
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }
  
  /* 目录链接样式 */
  .right-sidebar a {
    color: var(--color-foreground);
    text-decoration: none;
    transition: color 0.2s;
    display: inline-block;
  }

  .right-sidebar a:hover {
    color: var(--color-accent);
  }
  
  /* 目录折叠功能样式 */
  .right-sidebar li.has-children {
    position: relative;
  }
  
  /* 默认隐藏子列表 */
  .right-sidebar li.has-children > ul {
    display: none;
  }
  
  /* 展开时显示子列表 */
  .right-sidebar li.has-children.expanded > ul {
    display: block;
  }
  
  /* 折叠按钮样式 */
  .right-sidebar .toggle-btn {
    position: absolute;
    left: -1.25rem;
    top: 0.25rem;
    width: 16px;
    height: 16px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transform: rotate(0deg);
    transition: transform 0.2s ease;
  }
  
  /* 折叠状态下箭头指向右侧 */
  .right-sidebar li:not(.expanded) > .toggle-btn {
    transform: rotate(0deg);
  }
  
  /* 展开状态下箭头指向下方 */
  .right-sidebar li.expanded > .toggle-btn {
    transform: rotate(90deg);
  }
  
  /* 隐藏文章中的目录 */
  #article h2:has(+ details):has(summary:contains("Table of contents")),
  #article details:has(summary:contains("Table of contents")) {
    display: none;
  }
}

/* 移动端不显示右侧边栏 */
@media (max-width: 1023px) {
  .right-sidebar {
    display: none;
  }
}
```

#### 3.2.2 修改PostDetails.astro
> 直接复制文件，覆盖PostDetails.astro即可。
``` yml file=./src/layouts/PostDetails.astro
# 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
#
name: Deploy VitePress site to Pages

on:
  # 在针对 `main` 分支的推送上运行。如果你
  # 使用 `master` 分支作为默认分支，请将其更改为 `master`
  push:
    branches: [main]

  # 允许你从 Actions 选项卡手动运行此工作流程
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消此区域注释
        with:
          version: 9
      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm # 或 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: pnpm install # 或 pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: pnpm docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

