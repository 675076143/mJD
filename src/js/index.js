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
    const elementNewUser = document.getElementsByClassName("new-user")
    const elementFloor = document.getElementsByClassName("floor")
    //将伪数组转成真数组
    const topNavImgs = [...elementTopNavImgs]
    const newUser = [...elementNewUser]
    const floor = [...elementFloor]
    //top-nav中的图片自适应缩放
    topNavImgs.forEach((topNavImg)=>{
        topNavImg.style.height = topNavImg.clientWidth+"px"
    })
    //new-user中的图片自适应缩放
    //图片宽高比
    const RATIO_NEW_USER_IMG = 374/240
    newUser.forEach((item)=>{
        //console.log(newUserImg)
        //有两张图片，所以先除以2再除以宽高比
        item.style.height = item.clientWidth/2/RATIO_NEW_USER_IMG+"px"
    })
    //floor中的图片宽高自适应
    //图片宽高比
    const RATIO_NEW_USER_FLOOR = 250/200
    floor.forEach((item)=>{
        //有三张图片，所以先除以3再除以宽高比
        item.style.height = item.clientWidth/3/RATIO_NEW_USER_FLOOR+"px"
    })

}