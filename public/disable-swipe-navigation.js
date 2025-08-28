// 滑动导航手势控制
(function() {
  // 初始触摸位置
  let startX = 0;
  let startY = 0;
  let isScrolling = false;
  let threshold = 30; // 增加阈值，使检测更精确
  let touchStartTarget = null; // 记录触摸开始时的目标元素
  
  // 监听触摸开始事件
  document.addEventListener('touchstart', function(e) {
    // 记录初始触摸位置
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isScrolling = false;
    touchStartTarget = e.target; // 记录触摸开始的目标元素
  }, { passive: true }); // 改为passive: true提高性能
  
  // 监听触摸移动事件
  document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) return; // 忽略多点触控
    
    // 检查触摸开始时的元素是否在代码块内
    const isCodeBlock = 
      touchStartTarget.closest('pre') !== null || 
      touchStartTarget.closest('code') !== null ||
      touchStartTarget.tagName === 'PRE' || 
      touchStartTarget.tagName === 'CODE';
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    
    // 只在屏幕左侧边缘开始的向右滑动时处理
    if (Math.abs(deltaX) > Math.abs(deltaY) && !isScrolling) {
      // 只有当起始点在屏幕左侧边缘(50px内)且是向右滑动时
      if (startX < 50 && deltaX > threshold) {
        // 如果是在代码块上，阻止默认行为
        if (isCodeBlock) {
          e.preventDefault();
        }
        // 在非代码块区域，不阻止默认行为，允许浏览器的滑动返回
      }
    } else {
      isScrolling = true;
    }
  }, { passive: false });
  
  // 处理Astro页面过渡
  document.addEventListener('astro:page-load', function() {
    // 添加事件监听器，捕获在代码块上的触摸开始事件
    const codeBlocks = document.querySelectorAll('pre, code');
    codeBlocks.forEach(block => {
      block.addEventListener('touchstart', function(e) {
        // 标记这个元素为代码块触摸
        this.dataset.touchActive = 'true';
      }, { passive: true });
      
      block.addEventListener('touchend', function(e) {
        // 移除标记
        this.dataset.touchActive = 'false';
      }, { passive: true });
    });
    
    // 重新绑定事件处理程序，确保在页面过渡后仍然有效
    const disableHistoryNavigation = function(e) {
      // 检查是否有任何代码块处于活动触摸状态
      const activeCodeBlocks = document.querySelectorAll('pre[data-touch-active="true"], code[data-touch-active="true"]');
      
      if (e.type === 'popstate' && activeCodeBlocks.length > 0) {
        // 只在代码块区域阻止浏览器默认的历史导航行为
        history.pushState(null, document.title, location.href);
        e.stopPropagation();
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