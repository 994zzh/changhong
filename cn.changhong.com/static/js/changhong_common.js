/**
 * 顶部加载用户信息
 * sxg修改  2016年8月26日11:23:02
 */
jQuery(document).ready(function() {
	    
		//加载登录用户
        loadLoginUser();
    
		//点击登录
        jQuery('#sso_login').bind("click",function() {
           
			//location.href = ssoUrl + realmnameURL;
			var current_address=window.location.href;
			if((current_address.indexOf("registerByPhone.do")>-1)||
				(current_address.indexOf("login.do")>-1)||
				(current_address.indexOf("password.do")>-1)||
				(current_address.indexOf("toPassword.do")>-1)||
				(current_address.indexOf("reset.do")>-1)||
				(current_address.indexOf("addToCart.html")>-1)){				
				location.href = ssoUrl + realmnameURL;
			}else{
				location.href = ssoUrl + current_address;
			}
			
        });
		
		//点击退出sso_logout
		 jQuery('#sso_logout').bind("click",function() {
		   jQuery.ajax({
				method: "GET",
				url: localLogoutUrl,	
				async : false,				
				error: function () {
					
				},//错误执行方法
				success: function () {
					
				} //成功执行方法
			});
			
			 jQuery.ajax({
				method: "GET",
				url: ecLogoutUrl,	
				async : false,				
				error: function () {
					
				},//错误执行方法
				success: function () {
					
				} //成功执行方法
			});
			 
		    var current_address=window.location.href;
			if((current_address.indexOf("registerByPhone.do")>-1)||
				(current_address.indexOf("login.do")>-1)||
				(current_address.indexOf("password.do")>-1)||
				(current_address.indexOf("toPassword.do")>-1)||
				(current_address.indexOf("reset.do")>-1)||
				(current_address.indexOf("addToCart.html")>-1)){				
				location.href = ssoOutUrl + realmnameURL;
			}else{
				location.href = ssoOutUrl + current_address;
			}
        });
		
		
});

//判断当前是否存在同域Cookie
function isssotoken() {
    var chgwssotoken = "chgw_loginUser"; //同域Cookie
    var sdssotoken = Cookies.get(chgwssotoken);
    if (sdssotoken != null && sdssotoken != '') {
        return true;
    } else {
        return false;
    }
}





//跳转到登录页面
function gotoLogin() {
    var returnUrl = window.location.href;
    location.href = ssoUrl + returnUrl;
}




//加载登录用户
function loadLoginUser() {
    jQuery.ajax({
        type: "POST",
        url: getLoginUserUrl,
        data: {},		
        dataType: "json",
        success: function(data, textStatus) {
            if (data.isSuccess) {
				var username = data.userName;
            	/*if (data.nickName!=undefined&&data.nickName!="") {
					username = data.nickName;
            	}else if (data.phone!=undefined&&data.phone!="") {
					username = data.phone;
            	} else{
					username = data.user;
				}*/
                var user_image = data.user_image;
                jQuery('#hasLoginDiv').show();
                jQuery('#unLoginDiv').hide();
                jQuery('#user-account').html(username);
                jQuery("#user-account").attr('href',realmnameURL+"/wdch/");
                jQuery("#login_account").html(username);
				jQuery("#login_account").attr('href',realmnameURL+"/wdch/");
                jQuery("#user_image").attr("src", user_image);
				//刷新购物车
				getDSCarList();

            } else { //没有登录
                jQuery('#unLoginDiv').show();
                jQuery('#hasLoginDiv').hide();
            }
        }
    });
}



//通过R3物料编码获取价格
function getapidata(r3wldm) {
    if (r3wldm == undefined || r3wldm == null) {
        return "暂无价格";
    }
//   var R3wldm =  data.id;
    var apidata={};
   // var R3wldm=1;
    //goods_id=CH798	
    var url = carGetPriceUrl+r3wldm;
    jQuery.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
		async: false, 
		timeout:300000,
        error: function(){
            console.log("获取电视数据失败")
        },
        success: function(data){
            var obj = eval("("+data+")");
            var code= obj.code;
            if(code==0){
                var cpmd= obj.data[0].goods_jingle;
                var price ="";
                var cxtp = obj.data[0].goods_promotion_type;
                //   console.log("促销类型:" + cxtp);
                //促销类型为3或4显示促销价格，否则显示价格；
                if (cxtp == 3 || cxtp == 4) {
                    //得到促销价格
                    price=obj.data[0].goods_promotion_price;
                }
                if (cxtp == 1 || cxtp == 2 || cxtp == 0) {
                    price = obj.data[0].goods_price;
                }
                if (price==999999) {
                	price="?????";
                }
                apidata.cpmd =cpmd;
                apidata.price =price;
            }
            else{
                apidata.price ="暂无价格";
                apidata.cpmd ="";
            }
        }
    });
    return apidata.price;
}
