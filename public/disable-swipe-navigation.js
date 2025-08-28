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
    
    // 检查触摸事件是否发生在代码块元素上
    const target = e.target;
    const isCodeBlock = target.closest('pre') !== null || 
                        target.closest('code') !== null ||
                        target.tagName === 'PRE' || 
                        target.tagName === 'CODE';
    
    // 如果是在代码块上，不阻止默认行为，允许正常滚动
    if (isCodeBlock) return;
    
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
  
  // 处理Astro页面过渡
  document.addEventListener('astro:page-load', function() {
    // 重新绑定事件处理程序，确保在页面过渡后仍然有效
    const disableHistoryNavigation = function(e) {
      if (e.type === 'popstate') {
        // 阻止浏览器默认的历史导航行为
        history.pushState(null, document.title, location.href);
      }
    };
    
    // 监听popstate事件（浏览器返回按钮或滑动返回触发）
    window.addEventListener('popstate', disableHistoryNavigation);
  });
  
  // 初始页面加载时也执行一次
  document.addEventListener('DOMContentLoaded', function() {
    // 添加历史状态，以便有状态可以返回
    history.pushState(null, document.title, location.href);
  });
})();