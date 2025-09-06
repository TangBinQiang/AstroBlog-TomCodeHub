import type { AstroIntegration } from 'astro';

/**
 * Astro插件：自动处理所有链接的base路径
 * 这个插件会在构建时自动为所有链接添加正确的base路径前缀
 */
export default function basePathPlugin(): AstroIntegration {
  return {
    name: 'base-path-plugin',
    hooks: {
      'astro:config:setup': ({ injectScript }) => {
        // 注入一个全局脚本，用于处理所有链接
        injectScript('page', `
          // 自动为所有链接添加base路径前缀
          document.addEventListener('DOMContentLoaded', () => {
            const baseUrl = import.meta.env.BASE_URL || '/';
            
            // 处理所有a标签的href属性
            document.querySelectorAll('a[href^="/"]').forEach(link => {
              const href = link.getAttribute('href');
              if (href && href.startsWith('/') && !href.startsWith(baseUrl)) {
                // 避免重复添加base路径
                const newHref = href === '/' ? baseUrl : baseUrl + href.substring(1);
                link.setAttribute('href', newHref);
              }
            });
            
            // 处理所有form的action属性
            document.querySelectorAll('form[action^="/"]').forEach(form => {
              const action = form.getAttribute('action');
              if (action && action.startsWith('/') && !action.startsWith(baseUrl)) {
                const newAction = action === '/' ? baseUrl : baseUrl + action.substring(1);
                form.setAttribute('action', newAction);
              }
            });
            
            // 处理所有img、script、link等标签的src或href属性
            ['img[src^="/"]', 'script[src^="/"]', 'link[href^="/"]'].forEach(selector => {
              const attr = selector.includes('src') ? 'src' : 'href';
              document.querySelectorAll(selector).forEach(el => {
                const value = el.getAttribute(attr);
                if (value && value.startsWith('/') && !value.startsWith(baseUrl)) {
                  el.setAttribute(attr, baseUrl + value.substring(1));
                }
              });
            });
          });
        `);
      }
    }
  };
}