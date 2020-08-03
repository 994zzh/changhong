/**
 * Created by helloxwz on 2016/5/23.
 */
$(function(){
   $('.home-activity-btn a').click(function () {
       $(this).addClass('cur').siblings('a').removeClass('cur');
    var _index= $(this).parent().children('a').index($(this));
       $(this).parent().siblings('.home-activity-link').children('a').stop().eq(_index).show().siblings('a').hide();
   });
    setInterval(activityPlay,2000);
    function activityPlay(){
        var activity=$('.home-activity-container');
        for(var i=0;i<activity.length;i++){
            var activityLink= activity.eq(i).children('.home-activity-link').children('a');
            var activityBtn= activity.eq(i).children('.home-activity-btn').children('a');
            activityGo(activityLink,activityBtn)
        }
    }
    function activityGo(link,btn){
        if(btn.length<=1) return;
        var _index;
        for(var i=0;i<btn.length;i++){
            if(btn.eq(i).hasClass('cur'))
                _index=i
        }
        _index++;
        if(_index==btn.length){
            _index=0;
        }
        btn.eq(_index).addClass('cur').siblings('a').removeClass('cur');
        link.eq(_index).show().siblings('a').hide();
    }
});

