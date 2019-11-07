import css from '../css/index.less';
import html from '../index.html'



/*
加载页面时执行
 */
window.onload = ()=>{
    selfAdaption()
}
window.onresize = ()=>{
    selfAdaption()
}

/*
自适应
 */
const selfAdaption =()=>{
    const elementTopNavImgs = document.getElementsByClassName("top-nav-img")
    //将伪数组转成真数组
    const topNavImgs = [...elementTopNavImgs]
    //top-nav中的图片自适应缩放
    topNavImgs.forEach((topNavImg)=>{
        topNavImg.style.height = topNavImg.clientWidth+"px"
    })



}