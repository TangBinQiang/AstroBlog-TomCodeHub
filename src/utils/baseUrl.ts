/**
 * 获取基础URL（包含base路径）
 * @returns 基础URL，例如 "/AstroBlog-TomCodeHub/"
 */
export function getBaseUrl(): string {
  const baseUrl = import.meta.env.BASE_URL || '/';
  // 确保baseUrl以斜杠结尾
  return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
}

/**
 * 为URL添加基础路径前缀
 * @param path 路径，例如 "/posts" 或 "posts"
 * @returns 完整路径，例如 "/AstroBlog-TomCodeHub/posts"
 */
export function withBase(path: string): string {
  const baseUrl = getBaseUrl();
  
  // 如果path为空，直接返回baseUrl
  if (!path) return baseUrl;
  
  // 如果path已经包含baseUrl，直接返回
  if (path.startsWith(baseUrl)) return path;
  
  // 如果path是绝对路径（以/开头）
  if (path.startsWith('/')) {
    // 避免路径中出现双斜杠
    return baseUrl === '/' ? path : `${baseUrl}${path.substring(1)}`;
  }
  
  // 如果path是相对路径（不以/开头）
  return `${baseUrl}${path}`;
}