jQuery(document).ready(function() {	    
		//点击退出sso_logout
		 jQuery('#goods-pay-btn').bind("click",function() {
			cartBuy();
        });		
		
});

//删除购物车操作
function deleteGood(goodsId) {
	if(isssotoken()) { //如果登录，接口删除购物车
		jQuery.ajax({
				method: "POST",
				url: deleteCarGoodUrl,
				dataType: "json",
				data: {"cart_id":goodsId},
				error: function () {
					msg="加入购物车失败，请重试！"
				},//错误执行方法
				success: function (response) {
					cartCookieList();//添加后刷新页面
				} //成功执行方法
			});
		return;
	}
    var json={};
    json["goods_id"]=goodsId;
    //callService(localDeleteCarGoodUrl,json,2);//删除购物车中某件商品服务
	jQuery.ajax({
            method: "GET",
            url: localDeleteCarGoodUrl,
            data: json,
			async:false
     });
    cartCookieList();//添加后刷新页面
}
/*function addGoods(store_id,goods_id,goods_name,goods_price,goods_num,goods_url) {
    var json={};
    json["store_id"]=store_id;
    json["goods_id"]=goods_id;
    json["goods_name"]=goods_name;
    json["goods_price"]=goods_price;
    json["goods_num"]=goods_num;
    json["goods_url"]=goods_url;
    var str=JSON.stringify(json);
    var callback="/pub/chgw/addToCart.html?name="+goods_name+"&id="+goods_id;
    if(isNaN(goods_price)){
        window.location.href=callback+"&type="+false;
    }else{
        var returnUrl=callback;
        callService(contextPath+"/cart/add",str,1,returnUrl);//添加服务
    }
    //cartCookieList();//添加后刷新页面
}
*/
//查询购物车操作
function cartCookieList() {
	if(isssotoken()) { //如果登录，接口获取购物车列表
		getDSCarList();
		return;
	}else {
		localCartList();
	}
   
}

//登录后通过接口获取电商购物车列表
function getDSCarList() {
	jQuery.ajax({
				method: "POST",
				url: listEcCartUrl,				
				dataType: "json",
				error: function () {
					localCartList();
				},//错误执行方法
				success: function (response) {
					
					if(response.code==0) {
						if(response.data==null) {
							succFunction();
							return;
						}
						var car_num = response.data.total_num;
						
						if(car_num==0){
							succFunction();
							return;
						}
						var carList = response.data["1"];//电商购物车列表
						var localCartJson={};
						for(var index in carList){
							var price=carList[index].goods_price*1;
							var num=carList[index].goods_num*1;
							var id=carList[index].r3code;
							var name=carList[index].goods_name;
							var indexJson = {};
							indexJson["goods_id"]=id;
							indexJson["goods_name"]=name;
							indexJson["goods_num"]=num;
							indexJson["goods_price"]=price;
							indexJson["store_id"]=1;
							indexJson["goods_url"]="";
							indexJson["cart_id"]=carList[index].cart_id;
							var cart_state=carList[index].state;//商品状态,false为下架
							var cart_storage_state = carList[index].storage_state;//库存状态，false为无货	
							var snyc_state = carList[index].snyc_state;//购物车商品的显示状态0未推送 1上架 2下架
							if (snyc_state == 0) {//该端未推送 不显示
								continue;
							}else if((!cart_state)||snyc_state==2) {
								indexJson["state"]="下架";
							}else if(!cart_storage_state){
								indexJson["state"]="无货";
							}else{
								indexJson["state"]="";
							}
							localCartJson[id]=indexJson;
						}
						succFunction(localCartJson);
						//刷新
						loadCartUrl();
					} else{
						localCartList();
					}
					msg="已成功加入购物车！";
				} //成功执行方法
			});
}

//未登录时获取本地cookie
function localCartList() {
	 jQuery.ajax({
        url: localCartListUrl,
        type: 'GET',
        cache: false,
        beforeSend: LoadFunction, //加载执行方法
        error: erryFunction,  //错误执行方法
        success: succFunction //成功执行方法
    });
}


function cartBuy() {
	
		location.href = cartBuyUrl;
		return;
	
}


//通过R3物料编码获取URL
function loadCartUrl() {
	var r3List="";
	 jQuery(".cart_url").each(function(){
		var this_obj = jQuery(this);
		var r3code_url = this_obj.attr('r3wldm');
		r3List+= r3code_url + ",";
	}); 
	r3List=r3List.substring(0, r3List.length -1);
	 var url = seasonApiUrl + '/ProductInfo/queryByR3List';
		data = {"R3Code": r3List};
		jQuery.post(url, data, function (re) {
			if(re.data.resultList.length <= 0){
				return;
			}
			for(var i = 0; i < re.data.resultList.length; i ++){
				var r = re.data.resultList[i].docpuburl;				
				jQuery("#cart_"+re.data.resultList[i].r3wldm).attr("href", r);				
			}
		});
}

//加载中函数
function LoadFunction() {
    jQuery(".tips-nogoods").html('加载中...');
    jQuery(".tips-nogoods").css("display","block");
}
//请求失败函数
function erryFunction() {
    //alert("error");
}
//请求成功处理函数
function succFunction(data){
    var totalNum=0;
    if(typeof(data) != "undefined" && !jQuery.isEmptyObject(data)){
        var allDiv="";
        var totalPrice=0;
        for(var key in data){
            var price=data[key].goods_price*1;
            var num=data[key].goods_num*1;
            var id=data[key].goods_id;
            var name=data[key].goods_name;
            var url=data[key].goods_url;
			var state=data[key].state;
			var cart_id = data[key].cart_id;
			var delete_id;//删除的购物车ID，登录下为购物车ID，未登录为R3Code
			if(state=='undefined' || state==undefined) {
				state="";
			}
			if(cart_id=='undefined' || cart_id==undefined) {
				delete_id=id;
			} else{
				delete_id=cart_id;
			}
			
            var div=" <div class='tool-tips-row'>";
            div+="<p><a class='cart_url' target='_blank' id='cart_"+id+"' r3wldm='"+id+"' href=\""+url+"\">"+name+"</a></p>";
            div+="<h1>单价<span>"+price+"</span>元 <b>x "+num+"</b>";
            div+="<a href='javascript:;' onclick=\"deleteGood('"+delete_id+"')\">删除</a><a href='' class='tool-goods-tips'>"+state+"</a></h1></div>";
            allDiv+=div;
            totalNum+=num;
            totalPrice+=price*num;
        }
        totalPrice=changeTwoDecimal(totalPrice);
        jQuery("#mycartNum").html(totalNum);
		if(totalNum > 0){
			jQuery("#mycartNum").css("display","block");
			jQuery("#floadt_cart_totalNum").css("display","block");
		}
        jQuery("#totalPrice").html("￥"+totalPrice);
        jQuery("#totalNum").html(totalNum);
		jQuery("#floadt_cart_totalNum").html(totalNum);
        jQuery(".tool-container-tips-warp").html(allDiv);
        jQuery(".tool-container-tips-warp").css("display","block");
        jQuery(".tool-goods-pay").css("display","block");
        jQuery(".tips-nogoods").css("display","none");
    }else{
        jQuery("#mycartNum").html(totalNum);
		jQuery("#floadt_cart_totalNum").html(totalNum);
		jQuery("#mycartNum").css("display","none");
		jQuery("#floadt_cart_totalNum").css("display","none");
        jQuery(".tool-container-tips-warp").css("display","none");
        jQuery(".tool-goods-pay").css("display","none");
        jQuery(".tips-nogoods").html("购物车中还没有商品，赶紧选购吧");
        jQuery(".tips-nogoods").css("display","block");
    }
};
//一般调用
function callService(url,data,type,returnurl) {
    if(type==1){
        var json={"goods":data};
        jQuery.ajax({
            method: "GET",
            url: url,
            data: json,
            error: function () {
                window.location.href=encodeURI(returnur+"&type="+false);
            },//错误执行方法
            success: function () {
                window.location.href=encodeURI(returnurl+"&type="+true);
            } //成功执行方法
        });
    }else{
        jQuery.ajax({
            method: "GET",
            url: url,
            data: data
        });
    }

}
//保留小数点后两位
function changeTwoDecimal(x)
{
    var f_x = parseFloat(x);
    if (isNaN(f_x))
    {
        return x;
    }
    var f_x = Math.round(x*100)/100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0)
    {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2)
    {
        s_x += '0';
    }
    return s_x;
}