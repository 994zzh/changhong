var a=0;
$("#morechoice")[0].onclick=function(){
    a++;
    if(a%2==0){
        $(".condition-show")[0].style.maxHeight="236px";
        $(".condition-show").attr('overflow','hidden');
        $("#morechoice>p").html("产品特色等更多条件选择");
        $("#morechoice>p").css('background','url(./images/pro-seletor-btn-icon_06.png)no-repeat 219px center');
    }else{
        $(".condition-show")[0].style.maxHeight="100%";
        $(".condition-show").removeAttr('overflow');
        $("#morechoice>p").html("收起");
        $("#morechoice>p").css('background','url(./images/xz-proxlsq.png)no-repeat 100px center').css('padding-left','30px');
    }
}