var ord=0; //0表示第一张图片
var imgBox=document.getElementById("item-imgBox"); 
var oImgs=imgBox.getElementsByTagName("img")
var oUl=document.getElementsByClassName("item-banner")[0]; 
var oLis=oUl.getElementsByTagName("img");
for(let i=0;i<oLis.length;i++){
    oLis[i].onmouseover=function(){
        goImg(i);
    }
}
function goImg(transOrd){
    var outOrd = ord;
    ord = transOrd;
    if(ord<0){
        ord=4;
    }
    if(ord>4){
        ord=0;
    }
    mover03(oImgs[outOrd], "left", -510, 510);
    oImgs[ord].style.left = "400px";
    mover03(oImgs[ord], "left", 0, 510);
    oLis[outOrd].style.border = "1px solid #EAEAEA";
    oLis[ord].style.border = "1px solid #ED3C42";
}
function mover03(oDom, attr, endP,timeLong) {
    var startP = parseFloat(getStyle(oDom,attr)); 
    var value = startP;
    var direction = startP<endP?1:-1;      
    var timeSpace = 5;
    var step =  Math.abs(endP-startP)/(timeLong/timeSpace);

    var myTimer = setInterval(() => {
        value = value + direction*step;
        if (direction>0? value >= endP:value <= endP) {
            value = endP;
            window.clearInterval(myTimer);
            myTimer = null;            
        }

        if(attr=="opacity"){
            oDom.style[attr] = value;
        }else{
            oDom.style[attr] = value + "px";
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