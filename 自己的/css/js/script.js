// 获取第一张图片的元素
const parallax1 = document.querySelector('.main');

// 添加滚动事件监听器
window.addEventListener('scroll', () => {
    // 获取页面滚动的距离
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 计算透明度（滚动越远，透明度越低）
    let opacityValue = 1 - scrollTop / 500; // 当滚动距离达到500时，图片完全透明
    
    // 确保透明度在 0 到 1 之间
    opacityValue = Math.max(opacityValue, 0);

    // 设置第一张图片的透明度
    parallax1.style.opacity = opacityValue;
});
