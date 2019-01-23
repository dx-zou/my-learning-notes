//获取dom元素
window.onload = function () {
    var wrap = document.querySelector('.wrap')
    var container = document.querySelector('.swiper-container')
    var swipers = document.querySelectorAll('.swiper')
    var nextBtn = document.querySelector('.next')
    var prevBtn = document.querySelector('.prev')
    //克隆第一张元素添加到最后
    container.insertBefore(container.firstElementChild.cloneNode(true),null)
    // 定义索引
    var index = 0
    //获取图片的宽度
    var imgWidth = wrap.offsetWidth
    nextBtn.onclick = function () {
        index++;
        if (index > 3) {
            container.style.transition = 'all 0s'
            container.style.left =  0 
            container.offsetLeft;   //TODO:此处大有学问
            index = 1
            container.style.transition = 'all 0.5s ease-in-out'
        } 
        container.style.left = -index*imgWidth + 'px'
        // container.style.transform = 'translateX(-' + index*imgWidth + 'px )'
    }
}
