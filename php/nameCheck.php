<?php
    header('content-type:text/html;charset=utf8');
    $link=mysqli_connect("localhost","root","","mydb2004");
    mysqli_set_charset($link,"utf8");
    $u = $_GET["username"];
    $sql = "select * from user where username = '$u'";
    $result = mysqli_query($link,$sql);
    $res = mysqli_fetch_assoc($result);
    if($res){
        echo 1;
    }else{
        echo 0;
    }
    mysqli_close($link);
?>