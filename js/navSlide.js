// 用户是否登录
var n2 = getCookie("user");
if(n2){
    var str2=`
        <a href="#" style="margin-right:10px">${n2}</a>
        <a href="login.html">退出</a>
    `
    console.log($(".header-login"))
    $(".header-login").html(str2); 
}


var oLis = document.querySelectorAll(".nav-list li");
var oMenu = document.querySelector(".nav-list");
var oH3 = oMenu.querySelectorAll(".nav-sub");
for(var i=1;i<oLis.length;i++){
    oLis[i].onmouseover=function(){
        for(var j=1;j<oLis.length;j++){
            oH3[j].style.display="none";
        }
        this.lastElementChild.style.display="block";
    }
    oLis[i].onmouseout=function(){
        this.lastElementChild.style.display="none";
    }
}
