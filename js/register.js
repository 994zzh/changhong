// 验证用户名格式
var arr1=[false,false,false,false,false];
$("[name='username']").blur(function(){
    // 数字，字母，下划线组成，不能以数字开头，6-16位
    var reg = /^[_a-zA-Z]\w{5,15}$/;
    if(reg.test($(this).val())){
        $(this).next().next().css('display','none')
        $(this).next().show()
        var username = $(this).val()
        // 验证用户名是否存在
        $.ajax({
            type:'GET',
            url:'./php/nameCheck.php',
            data:{username},
            success(msg){
                if(msg == 1){
                    // console.log("该用户名已存在")
                    $("[name='username']").next().hide();
                    $("[name='username']").next().next().next().show()
                }else{
                    $("[name='username']").next().show();
                    $("[name='username']").next().next().next().hide()
                    arr1[0]=true;
                }
            }   
        })
    }else{
        $(this).next().hide();
        $(this).next().next().show()
    }
})
// 验证密码格式
$("[name='userpass']").blur(function(){
    // 长度在8~16之间，必须包含字母和数字
    var reg = /^([\d]|[a-zA-Z]){6,16}$/;
    if(reg.test($(this).val())){
        $(this).next().next().hide();
        $(this).next().show()
        arr1[1]=true;
    }else{
        $(this).next().hide();
        $(this).next().next().show()
    }
})
// 验证重复密码是否相同
$("[name='commonpass']").blur(function(){
    // 长度在8~16之间，必须包含字母和数字
    var reg = /^([\d]|[a-zA-Z]){6,16}$/;
    if(reg.test($(this).val())){
        $(this).next().next().hide();
        $(this).next().show()
    }else{
        $(this).next().hide();
        $(this).next().next().show()
        return;
    }
    if($("[name='userpass']").val() == $("[name='commonpass']").val()){
        $("[name='commonpass']").next().next().hide();
        $("[name='commonpass']").next().show();
        arr1[2]=true;
    }else{
        $("[name='commonpass']").next().hide();
        $("[name='commonpass']").next().next().show()
    }
})
$(".registerCode").blur(function(){
    if($(this).val() == $(this).next().html()){
        $(this).next().next().next().next().hide()
        $(this).next().next().next().show()
        arr1[3]=true;
        // console.log(1)
    }else{
        $(this).next().next().next().hide()
        $(this).next().next().next().next().show()
    }
})
// 勾选复选框
$("#register-check").click(function(){
    if($("#register-check").prop("checked")){
        arr1[4]=true;
    }
})

{
    // 页面加载完成获取随机验证码
    window.onload=function(){
        changeCode()
    }
    // 点击看不清，换一张，更改验证码
    function changeCode(){
        var t = getCode(4);
        $(".pic-register").html(t);
    }
    function getCode(n){
        // 定义一个数字，放入所有数字和，大写字母，小写字母
        var arr=["0","1","2","3","4","5","6","7","8","9",
        "a","b","c","d","e","f","g","h","i","g","k",
        "A","B","C","D","E","F","G","H","I","G","K"];
        var str="";
        for(var i=0;i<n;i++){
            var index = parseInt(Math.random()*arr.length);
            str+=arr[index];
        }
        return str;
    }
}

$(".btn [type='button']").click(function(){
    // console.log($("[type='checkbox']"))
    if(arr1.every(function(item){return item;})){
        var username = document.getElementsByName("username")[0].value;
        var userpass = document.getElementsByName("userpass")[0].value;
        $.ajax({
            type:'GET',
            url:'./php/register.php',
            data:`username=${username}&userpass=${userpass}`,
            success(data){
                // console.log(data)
                location.href='login.html'
            }
        })
    }else{
        alert("输入内容不能为空")
    }
})