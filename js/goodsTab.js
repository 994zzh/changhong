var imgBox=document.getElementById("item-imgBox"); 
var oImgs=imgBox.getElementsByTagName("img")
var oUl=document.getElementsByClassName("item-banner")[0]; 
var oLis=oUl.getElementsByTagName("img");
// var oPic=document.getElementById("big-pic"); 
// var oPicImg=oPic.getElementsByTagName("img");
oImgs[0].style.display="block";
// oPicImg[0].style.display="block";
for(let i=0;i<oLis.length;i++){
    oLis[i].onmouseover=function(){
        for(var j=0;j<oLis.length;j++){
            oImgs[j].style.display="none";
            oLis[j].style.border="1px solid #EAEAEA";
        }
        oImgs[i].style.display="block";
        oLis[i].style.border="1px solid #ED3C42";
    }
}