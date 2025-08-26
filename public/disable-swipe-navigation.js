// 禁用滑动导航手势
(function() {
  // 初始触摸位置
  let startX = 0;
  let startY = 0;
  let isScrolling = false;
  
  // 监听触摸开始事件
  document.addEventListener('touchstart', function(e) {
    // 记录初始触摸位置
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isScrolling = false;
  }, { passive: false });
  
  // 监听触摸移动事件
  document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) return; // 忽略多点触控
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    
    // 判断是否是水平滑动（水平移动大于垂直移动）
    if (Math.abs(deltaX) > Math.abs(deltaY) && !isScrolling) {
      // 如果是向右滑动（可能触发返回）
      if (deltaX > 10) {
        // 阻止默认行为
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