//头部导航效果
jQuery(document).ready(function() {

    //    产品中心回到顶部效果
    jQuery('.back-top').click(function (e) {
        jQuery('html,body').animate({'scrollTop': 0}, 100);
        return false;
    });
    var _nav = false; //鼠标是否移动到导航上
    var _index;
    var navPlay=undefined;
    //导航显示隐藏
    jQuery('.home-nav ul li').mouseenter(function () {
        if(navPlay){
            clearTimeout(navPlay);
            navPlay=undefined;
        }
        var _this = jQuery(this);
        navPlay = setTimeout(function () {
            _index = jQuery('.home-nav ul li').index(_this);
            //if(jQuery('.home-nav-sub').is(':animated')) return;
            var sub = _this.children('.home-nav-sub').length;
            if (jQuery('.home-nav').hasClass('nav-hover') && sub > 0) {
                _this.children('.home-nav-sub').stop(true, true).show(0);
                _this.siblings('li').children('.home-nav-sub').stop(true, true).hide(0);
            } else if (jQuery('.home-nav').hasClass('nav-hover') && sub <= 0) {
                _this.siblings('li').children('.home-nav-sub').stop(true, false).slideUp(300);
                _this.parents('.home-nav').removeClass('nav-hover');
            } else if (!jQuery('.home-nav').hasClass('nav-hover') && sub > 0) {
                _this.children('.home-nav-sub').stop(true, true).slideDown(300);
                _this.siblings('li').children('.home-nav-sub').stop(true, true).hide(0);
                _this.parents('.home-nav').addClass('nav-hover');
            }
            navPlay=undefined;
            echo.render();
    }, 300);
});

    jQuery('.home-nav').mouseleave(function(){
        if(navPlay){
            clearTimeout(navPlay);
            navPlay=undefined;
        }
        _nav=false;
        jQuery(this).removeClass('nav-hover');
        jQuery(this).find('.home-nav-sub').stop(true,true).slideUp(300);
    });
//    inner显示隐藏
//    jQuery('.home-inner-edit').click(function(){
//        if(jQuery(this).parent().siblings('ul').css("display")=="block"){
//            jQuery(this).parent().removeClass("home-ls-icon");
//            jQuery(this).parent().siblings('ul').stop(true,true).hide();
//        }
//        else{
//            jQuery(this).parent().addClass("home-ls-icon");
//            jQuery(this).parent().siblings('ul').stop(true,true).show();
//        }
//    });
    selectBox(jQuery('.home-nav-inner'),jQuery('.home-nav-inner ul'),"home-ls-icon");
    jQuery(".home-inner-edit").click(function () {
        if(jQuery(this).hasClass("home-ls-icon")){jQuery(this).removeClass("home-ls-icon");}
        else{jQuery(this).addClass("home-ls-icon");}
    });

    jQuery(document).click(function(){

        if(jQuery(".home-nav-inner ul").css('display')=='block') {
            jQuery("home-inner-edit").removeClass("home-ls-icon");
        }
    });

    //pp2-3-1家电产品
    jQuery(".pro-selector-btn").click(function(){
        jQuery(this).siblings('.xpro-con').toggleClass('pro-conditions-show');
		
        if(jQuery(this).siblings('.xpro-con').hasClass('pro-conditions-show')) {
			var tips=jQuery(".pro-selector-btn p").html();
			jQuery(".pro-selector-btn p").attr("tipsbq",tips);
            jQuery(".pro-selector-btn p").html("收起");
            jQuery(this).addClass("pro-selector-btn2");
        }else{
			tips= jQuery(".pro-selector-btn p").attr("tipsbq");
            jQuery(".pro-selector-btn p").html(tips);
            jQuery(this).removeClass("pro-selector-btn2");
        }
    });
    jQuery(".pro-his-tj-title p a").click(function(){
        jQuery(this).addClass("xcheck").siblings("a").removeClass("xcheck");
        jQuery(".xpro-his-tj-container").eq(jQuery(this).index()).show().siblings().hide();
    })
    //pp2-3-1家电产品-单选按钮
    jQuery(".pro-result-store").click(function () {
//        jQuery(this).parent().parent().find(".pay-rad").removeClass("rad-checked");
        if(jQuery(this).hasClass("pro-result-store-checked")){
            jQuery(this).removeClass("pro-result-store-checked");
        }
        else{jQuery(this).addClass("pro-result-store-checked");}
    });

    jQuery(window).scroll(function(){
       var _scrollTop=jQuery(window).scrollTop();
        if(_scrollTop>213){
            jQuery('.pro-float-box .pro-float-toTop').show();
        }else{
            jQuery('.pro-float-box .pro-float-toTop').hide();
        }
    });

});
function selectBox(div1,div2,clazz){
    div1.click(function(e){
        var e=e||event;
        if(e|| e.stopPropagation){
            e.stopPropagation()
        }else{
            e.cancelBubble=true;
        }
        var Index = div1.index(this);

        if(div2.eq(Index).css('display')=='block'){
            div2.eq(Index).slideUp(300);
        }
        else{
            div2.hide();
            div2.eq(Index).slideDown(300);
        }
        if(div2.eq(Index).css('display')=='block'){
            jQuery(document).click(function(){
                div2.slideUp(300);
                div2.prev().removeClass(clazz);
            });
            jQuery('li a',div2).click(function(){
//                    var text=this.innerHTML;
//                    jQuery(this).parent().parent().prev().text(text);
            });
        }
    });
    div2.click(function (e) {
        var e=e||event;
        if(e|| e.stopPropagation){
            e.stopPropagation()
        }else{
            e.cancelBubble=true;
        }
    })
}

jQuery(function(){
    jQuery("#proItem a").click(function(){
        var id=jQuery("#proItem a").index(jQuery(this));
        jQuery(this).addClass("sel");
        jQuery(this).siblings("a").removeClass("sel");
        jQuery(".pro-ditem-tabcon").eq(id).css({"display":"block"});
        jQuery(".pro-ditem-tabcon").eq(id).siblings(".pro-ditem-tabcon").css({"display":"none"});
    })
});


//专题产品文字介绍限制
jQuery(function(){
   for(var i=0;i<jQuery('.topic-box-name').length;i++){
       var str=jQuery('.topic-box-name').eq(i).text(),
       num= 1,
       strL=str.length;
       while(jQuery('.topic-box-name').eq(i).height()>48){
           var newStr=str.substring(0,strL-num);
           console.log(num);
           jQuery('.topic-box-name').eq(i).text(newStr+'...');
           num++;
       }
   }
});

//服务详情未评价-星级选择
jQuery(function(){
   jQuery('.ser-pl-star a').mouseenter(function(){
       var index=jQuery('.ser-pl-star a').index(jQuery(this));
       for(var i=0;i<jQuery('.ser-pl-star a').length;i++){
           if(i<=index){
               jQuery('.ser-pl-star a').eq(i).addClass('ser-star-click');
           }else{
               jQuery('.ser-pl-star a').eq(i).removeClass('ser-star-click');
           }
       }
   });
});

//
var serialArray=[];
jQuery(function(){
    jQuery('.pro-selector a.multi-select-item').click(function(){
        jQuery(this).toggleClass('multi-cur');
        var index=jQuery('.pro-selector a.multi-select-item').index(jQuery(this));
        if(jQuery(this).hasClass('multi-cur')){
            serialArray.push(index);
        }else{
            serialArray.splice(index,1);
        }
    })
});
function multiSelect(){
    for(var i=0;i<serialArray.length;i++){
        jQuery('.pro-selector a.multi-select-item').eq(i).addClass('multi-cur');
    }
}


//优惠券
jQuery(function(){
   jQuery('.coupontab li').click(function(){
       jQuery(this).addClass('clicked').siblings().removeClass('clicked')
   })
});


//基本信息
jQuery(function(){
   jQuery('.my-infor-radio').click(function(){
       jQuery(this).addClass('my-input-radio-checked').siblings('.my-infor-radio').removeClass('my-input-radio-checked');
   })
});

jQuery(window).ready(function(){
    if (jQuery(window).width()<1345) {
        jQuery(".xhome-fixl").css({"margin-left":0,"left":0})
    }
    jQuery(window).resize(function(){
        if (jQuery(window).width()<1345) {
            jQuery(".xhome-fixl").css({"margin-left":0,"left":0})
        }else{
            jQuery(".xhome-fixl").css({"margin-left":-670,"left":"50%"})
        }
    })
})
