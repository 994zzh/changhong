/*
* 官网公共js方法
*/

//立即购买js方法
function buyGood_Now(r3wldm,num,activity_info){
	var divForm="<form id='buygoodsf' name='buygoodsf' method='post' action=''><input style='display:none' name='act' value='buy' />";
	divForm+="<input style='display:none' name='op' value='buy_step1' />";
	divForm+="	<input style='display:none' name='request_tag' value='trs' />";
	divForm+="<input style='display:none' id='cartStr' name='cartStr' value='' />";
	if(typeof(activity_info) != "undefined" && activity_info!="false"){
		divForm+="<input style='display:none' id='activity_info' name='activity_info' value='' />";
	}
	divForm+="</form>";
	if($("#buygoodsf").length<=0){
		$(document.body).append(divForm);
	}
	var isLogin = isssotoken();
	if(isLogin){
		$("#activity_info").val(activity_info);
		$("#cartStr").val(r3wldm+'|' + num);
		document.getElementById("buygoodsf").action =buy_now;
		$("#buygoodsf").submit();
	}else{
		gotoLogin();
	}
       
}

//立即兑换js方法
function duiHuanGood_Now(r3code){
	var divForm="<form id='duiHuanGoods' name='duiHuanGoods' method='post' action=''><input  id='jfR3code_y' style='display:none' name='r3code'  />";
	divForm+="</form>";
	if($("#duiHuanGoods").length<=0){
		$(document.body).append(divForm);
	}
	var isLogin = isssotoken();
	if(isLogin){
		$("#jfR3code_y").val(r3code);
		document.getElementById("duiHuanGoods").action =pointExchange_now;
		$("#duiHuanGoods").submit();
	}else{
		gotoLogin();
	}    
}

//加入购物车js方法
function addGoodToCart(goods_id,goods_name,ty_count,tp_url,url){
	//a:商品数量
	ty_count = parseInt(ty_count);
	if (ty_count < 1) {
		ty_count = 1;
	}
//	window.location.href=encodeURI("/addToCart.html?name="+goods_name+"&id="+goods_id+"&goods_num="+ty_count+"&tp_url="+tp_url+"&goods_url="+url);
	
	var callbackUrl= window.location.href;
    var newA = document.createElement("a");
	newA.id='gg'
	newA.target='_blank';
    newA.href="/addToCart.html?name="+goods_name+"&id="+goods_id+"&goods_num="+ty_count+"&tp_url="+tp_url+"&goods_url="+url+"&callbackUrl="+callbackUrl;
	document.body.appendChild(newA);
	newA.click();
	document.body.removeChild(newA);
}






//弹出提示框
function JumPpopup(type,msg){
	var html="<div class='popup validation-popup' id='my_common_tips' style=''> <div class='tk-bj'></div> <div class='popup-box popup-success'><div class='close-lay'  onclick='closeJumPpopup()'></div>";
		html+="<div class='success-tips'><p id='my_common_tips_msg'>"+msg+"</p> </div>";
		html+="<div class='popup-btn' onclick='closeJumPpopup()'>确<span></span>定 </div></div></div>s";     
	if($("#my_common_tips").length<=0){
		$(document.body).append(html);
	}else{
		$("#my_common_tips_msg").html(msg);
		$("#my_common_tips").show();
	}

}
function closeJumPpopup(){
		$("#my_common_tips").hide();
}

