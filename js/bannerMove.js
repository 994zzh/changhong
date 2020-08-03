var ord = 0; //表示第一张图片
var oBannerBox = document.querySelector(".banner-con");
// 获取所有的图片和豆豆
var oImgs = oBannerBox.querySelectorAll("img");
var oDous = oBannerBox.querySelectorAll("a");
// console.log(oLis)
var myTimer;

// 1、每隔一秒钟换一张图片（同时豆豆发生变化）
function autoPlay(){
    myTimer = setInterval(function(){
        // 跳转到下一张图片
        goImg(ord+1);
    },3000);
}

function goImg(transOrd){
    // 一、数据处理
    // 1、计算数据
    var outOrd = ord; //出去的图片的下标
    ord = transOrd //当前显示的图片的下标
    //  2、边界处理
    if(ord<0){
        ord=5;
    }
    if(ord>5){
        ord=0;
    }
    //二、外观呈现
    // 1、图片进入和离开
    // （1）、出去
    move(oImgs[outOrd], "opacity", 0, 500);
    // （2）、进入
    move(oImgs[ord], "opacity", 1, 500);
    // 2、让豆豆的颜色发生变化
    // oDous[outOrd].background="url(../images/home-banner-num_16.png) no-repeat left center";
    // oDous[ord].background="url(../images/home-banner-cur-num_16.png) no-repeat left center";
    // console.log(oDous)
    oDous[outOrd].className="";
    oDous[ord].className="cur";
}

    window.onload = function(){
        autoPlay();
        // 给每个豆豆绑定事件
        for(let i=0;i<oDous.length;i++){
            oDous[i].onclick = function(){
                 goImg(i);
            }
         }
    }



function move(oDom, attr, endP,timeLong,callback) {
    // 起始值也可以获取到
    var startP = parseFloat(getStyle(oDom,attr)); 

    var value = startP;
    // 方向可以在内部进行计算
    var direction = startP<endP?1:-1;
    var timeSpace = 5;//
    var step =  Math.abs(endP-startP)/(timeLong/timeSpace) ; //步长 =  路程/总步子数 ；  总步子数 = 总时长/时间间隔  = 1000 / 10

    var myTimer = setInterval(() => {
        // 一、数据处理
        // 1、运算
        value = value + direction*step;
        // 2、边界处理（合法性的处理）
        // if (value >= endP) {
        if (direction>0? value >= endP:value <= endP) {
            value = endP;
            window.clearInterval(myTimer);
            myTimer = null;            
        }

        // 二、外观呈现(让用户看到结果)
        if(attr=="opacity"){
            oDom.style[attr] = value;
        }else{
            oDom.style[attr] = value + "px";
        }
        if(myTimer==null){
            // 与运算的规则：一假则假
            callback && callback();
        }
    }, timeSpace);

    return myTimer;
}
function getStyle(oDom, attr) {
    var value;
    if (oDom.currentStyle) { //IE
        value = oDom.currentStyle[attr]
    } else { //非IE的主流浏览器
        var obj = window.getComputedStyle(oDom);//oDom的所有样式（对象）
        value = obj[attr];
    }
    // if(!value){
    //     // 使用offset相关属性。
    // }
    return value;
}