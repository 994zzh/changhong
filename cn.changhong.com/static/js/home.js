//首页文字滚动效果

$(document).ready(function(){
//    首页公告滚动效果 start
//    初始化文字位置和父容器宽度
    var radioH=$('.home-radio-container p').height();
    for(var i=0;i<$('.home-radio-container p').length;i++){
        $('.home-radio-container p').eq(i).css({"top":radioH*i});
    }
    //向上滚动
    function noticeUp(){
        if($('.home-radio-container p').is(':animated')) return;
		if($('.home-radio-container p').length <= 1)  return;
        for(var ii=0;ii<$('.home-radio-container p').length;ii++){
           var item=$('.home-radio-container p').eq(ii);
            if(item.position().top<=-radioH){
                if(ii!=0){
                   var preItemTop=$('.home-radio-container p').eq(ii-1).position().top;
                    item.css({"top":preItemTop+radioH});
                }else{
                    var preItemTop=$('.home-radio-container p').eq($('.home-radio-container p').length-1).position().top;
                    item.css({"top":preItemTop+radioH});
                }
            }
           var newTop=item.position().top-radioH;
            item.stop(true,true).animate({'top':newTop},400);
        }
    }
    //向下滚动
    function noticeDown(){
        if($('.home-radio-container p').is(':animated')) return;
        for(var i=0;i<$('.home-radio-container p').length;i++){
           var let= $('.home-radio-container p').length;
            var item=$('.home-radio-container p').eq(i);
            if(item.position().left>=1128){
                if(i!=let-1){
                    var preItemTop=$('.home-radio-container p').eq(i+1).position().left;
                    item.css({"left":preItemTop-radioW});
                }else{
                    var preItemTop=$('.home-radio-container p').eq(0).position().left;
                    item.css({"left":preItemTop-radioW});
                }
            }
            var newTop=item.position().left+1;
            item.stop(true,true).css({'left':newTop});
        }
    }
    //设置自动滚动
    var noticeScroll= setInterval(noticeUp,4000);
    //鼠标移上停止滚动
    $('.home-radio-scroll').mouseenter(function(){
        clearInterval(noticeScroll)
    });
    //鼠标移开继续滚动
    $('.home-radio-scroll').mouseleave(function(){
        noticeScroll= setInterval(noticeUp,4000);
    });
   //    点击下滚
    $('.home-radio-btn .home-radio-left').click(function(){
        noticeDown();

    });
    //    点击上滚
    $('.home-radio-btn .home-radio-right').click(function(){
        noticeUp();
    });
});
//首页banner轮播
$(document).ready(function(){
    var banner=setInterval(bannerMove,5000);
    $('.home-banner-num a').hover(function(){
        clearInterval(banner)
    },function(){
        banner=setInterval(bannerMove,5000);
    });
    $('.home-banner-btn').hover(function(){
        clearInterval(banner)
    },function(){
        banner=setInterval(bannerMove,5000);
    });
    $('.home-banner-num a').click(function(){
       var index= $('.home-banner-num a').index($(this));
        $(this).addClass('cur').siblings('a').removeClass('cur');
        $('.home-banner-container .home-banner-img').stop().eq(index).fadeIn(500).siblings('a').fadeOut(500);
        echo.render();
    });
    function bannerMove(){
        var index,let=$('.home-banner-container .home-banner-img').length;
        for(var i=0;i<let;i++){
            if($('.home-banner-container .home-banner-img').eq(i).is(':visible')){
                index=i;
            }
        }
        if(index==let-1){
            $('.home-banner-container .home-banner-img').eq(0).fadeIn(500).siblings('a').fadeOut(500);
            $('.home-banner-num a').eq(0).addClass('cur').siblings('a').removeClass('cur');
            return;
        }
        $('.home-banner-container .home-banner-img').eq(index+1).fadeIn(500).siblings('a').fadeOut(500);
        $('.home-banner-num a').eq(index+1).addClass('cur').siblings('a').removeClass('cur');
        echo.render();
        return;
    }
    $('.home-banner-left').click(function(){
        var index,let=$('.home-banner-container .home-banner-img').length;
        index=$('.home-banner-num a').index($('.home-banner-num a.cur'));
        if(index==0){
                $('.home-banner-container .home-banner-img').eq(let-1).fadeIn(500).siblings('a').fadeOut(500);
                $('.home-banner-num a').eq(let-1).addClass('cur').siblings('a').removeClass('cur');
                return;
        }
        $('.home-banner-container .home-banner-img').eq(index-1).fadeIn(500).siblings('a').fadeOut(500);
        $('.home-banner-num a').eq(index-1).addClass('cur').siblings('a').removeClass('cur');
        return;
    });
    $('.home-banner-right').click(function(){
        var index,let=$('.home-banner-container .home-banner-img').length;
        for(var i=0;i<let;i++){
            if($('.home-banner-container .home-banner-img').eq(i).is(':visible')){
                index=i;
            }
        }
        if(index==let-1){
            $('.home-banner-container .home-banner-img').eq(0).fadeIn(500).siblings('a').fadeOut(500);
            $('.home-banner-num a').eq(0).addClass('cur').siblings('a').removeClass('cur');
            return;
        }
        $('.home-banner-container .home-banner-img').eq(index+1).fadeIn(500).siblings('a').fadeOut(500);
        $('.home-banner-num a').eq(index+1).addClass('cur').siblings('a').removeClass('cur');
        return;
    });
});
//新增首页js
function homeFixed(){
    var x_offset=$(".xhome-fixl").offset().top;
    var f_offset= $('.xfindex').eq(0).offset().top;
    var l_offset= $('.xfindex').eq( $('.xfindex').length-1).offset().top+$('.xfindex').eq( $('.xfindex').length-1).height()-240+55;
    if(x_offset>=f_offset&&x_offset<=l_offset){
        $(".xhome-fixl ul").show();
    }else{
        $(".xhome-fixl ul").hide();
    }
    var _interval=false;
    $(window).scroll(function(){
        var x_offset=$(".xhome-fixl").offset().top;
        var f_offset= $('.xfindex').eq(0).offset().top;
        var l_offset= $('.xfindex').eq( $('.xfindex').length-1).offset().top+$('.xfindex').eq( $('.xfindex').length-1).height()-240+55;
        if(x_offset>=f_offset&&x_offset<l_offset){
            $(".xhome-fixl ul").show();
        }else{
            $(".xhome-fixl ul").hide();
        }
        var _scrollTop=$(window).scrollTop();
        if(_interval==true)return;
        for(var i=0;i<$(".xfindex").length;i++){
            var offsetstr = $(".xfindex").eq(i).offset().top,
                _height=$(".xfindex").eq(i).height();
            var x_scrollTop=$('.xhome-fixl ul li').eq(i).offset().top;
            if(offsetstr<=x_scrollTop&&x_scrollTop<=offsetstr+_height+55){
                $(".xhome-fixl li").eq(i).addClass("clicked").siblings().removeClass("clicked");
            }
        }
    });
    $(".xhome-fixl li").click(function(){
        _interval=true;
        var _index=$(".xhome-fixl li").index(this);
        $(this).addClass("clicked").siblings().removeClass("clicked");
        var offsety = $(".xfindex").eq($(this).index()).offset().top-30;
        $("html, body").stop().animate({
            scrollTop: offsety
        }, 1000,function(){
            _interval=false;
        });
    })
}


