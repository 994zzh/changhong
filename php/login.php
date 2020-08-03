<?php
    header('content-type:text/html;charset=utf8');
    $link=mysqli_connect("localhost","root","","mydb2004");
    mysqli_set_charset($link,"utf8");
    $u = $_GET["username"];
    $p = $_GET["userpass"];
    $sql = "select * from user where username='$u' and userpass='$p'";
    $result = mysqli_query($link,$sql);
    if(mysqli_fetch_row($result)){
        echo "1";
    }else{
        echo "0";
    }
?>