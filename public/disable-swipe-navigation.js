// 仅禁用向右滑动返回功能
(function() {
  // 初始触摸位置
  let startX = 0;
  let startY = 0;
  let isScrolling = false;
  let threshold = 30; // 滑动阈值
  
  // 监听触摸开始事件
  document.addEventListener('touchstart', function(e) {
    // 记录初始触摸位置
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isScrolling = false;
  }, { passive: true }); // 使用passive: true提高性能
  
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
})();