// 禁用滑动导航手势
(function() {
  // 初始触摸位置
  let startX = 0;
  let startY = 0;
  let isScrolling = false;
  let threshold = 30; // 增加阈值，使检测更精确
  
  // 监听触摸开始事件
  document.addEventListener('touchstart', function(e) {
    // 记录初始触摸位置
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isScrolling = false;
  }, { passive: true }); // 改为passive: true提高性能
  
  // 监听触摸移动事件
  document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) return; // 忽略多点触控
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    
    // 只在屏幕左侧边缘开始的向右滑动时阻止默认行为
    if (Math.abs(deltaX) > Math.abs(deltaY) && !isScrolling) {
      // 只有当起始点在屏幕左侧边缘(50px内)且是向右滑动时才阻止
      if (startX < 50 && deltaX > threshold) {
        e.preventDefault();
      }
    } else {
      isScrolling = true;
    }
  }, { passive: false });
  
  // 预加载链接，提高跳转速度
  function prefetchLinks() {
    const links = document.querySelectorAll('a[href^="/"]:not([rel="prefetch"])');
    if (links.length > 0) {
      links.forEach(link => {
        if (!link.href.includes('#') && !link.closest('[data-no-prefetch]')) {
          link.setAttribute('rel', 'prefetch');
          
          // 添加mouseenter事件，当鼠标悬停时预加载
          link.addEventListener('mouseenter', () => {
            const prefetcher = document.createElement('link');
            prefetcher.rel = 'prefetch';
            prefetcher.href = link.href;
            document.head.appendChild(prefetcher);
          }, { once: true });
        }
      });
    }
  }
  
  // 处理Astro页面过渡
  document.addEventListener('astro:page-load', function() {
    // 预加载链接
    prefetchLinks();
    
    // 重新绑定事件处理程序，确保在页面过渡后仍然有效
    const disableHistoryNavigation = function(e) {
      if (e.type === 'popstate') {
        // 阻止浏览器默认的历史导航行为
        history.pushState(null, document.title, location.href);
      }
    };
    
    // 监听popstate事件（浏览器返回按钮或滑动返回触发）
    window.removeEventListener('popstate', disableHistoryNavigation); // 先移除旧的监听器
    window.addEventListener('popstate', disableHistoryNavigation);
  });
  
  // 初始页面加载时也执行一次
  document.addEventListener('DOMContentLoaded', function() {
    // 添加历史状态，以便有状态可以返回
    history.pushState(null, document.title, location.href);
    
    // 初始化预加载
    prefetchLinks();
  });
})();