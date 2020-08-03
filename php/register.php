<?php
    header('content-type:text/html;charset=utf8');
    $link=mysqli_connect("localhost","root","","mydb2004");
    mysqli_set_charset($link,"utf8");
    $u = $_GET["username"];
    $p = $_GET["userpass"];
    $sql = "insert into user(username,userpass) value('$u','$p')";
    $result = mysqli_query($link,$sql);
    mysqli_close($link);
    if($result){
        echo "恭喜您，注册成功！请<a href='login.html'>登录</a>";
    }else{
        echo "不好意思，注册失败，请重新<a href='reg.html'>注册</a>";
    }
?>