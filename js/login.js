// 点击登录
$("#account-login").click(function(){
    var u1 = document.getElementById("username").value;
    var p1 = document.getElementById("userpass").value;
    $.ajax({
        type:'GET',
        url:'./php/login.php',
        data:`username=${u1}&userpass=${p1}`,
        success(data){
            // location.href='index.html'
            // console.log(data)
            if(data=="1"){
                // console.log(p1)
                setCookie("user",`${u1}`)
                location.href='index.html'
            }else{
                alert("用户名或密码错误")
            }
        }
    })
})



// var oLoginBtn = document.getElementById("account-login");
// oLoginBtn.onclick=function(){
//     // 获取用户名和密码
//     var u1 = document.getElementById("username").value;
//     var p1 = document.getElementById("userpass").value;
//     // console.log(u1,p1);
//     //获取地址栏中的参数信息
//     var pathName=location.search;
//     ajax({
//         url:'./php/login.php',
//         data:`username=${u1}&userpass=${p1}`,
//         chenggong:function(res){
//             if(res==1){
//                 // console.log(location)
//                 //判断地址栏中是否有参数地址
//                 if(pathName){
//                     var newUrl=pathName.split('=')[1];
//                     setCookie('login',u1,3600);  
//                     location.href=newUrl;
//                 }else{
//                     setCookie('login',u1,3600);  
//                     location.href='index.html';
//                 }
//             }else{
//                 alert("账号或密码错误,请重新登录");
//             }
//         }
//     })
// }