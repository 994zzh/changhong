/*
*通过r3物料代码 获取产品价格和卖点
*参数：r3 价格html标记  获取价格标志  卖点html标记  获取卖点标志 
*返回值：不返回  在页面上打印价格和卖点
*请求方式：异步
*/
function  returnDatabyr3(r3wldm,price_tag,priceid,cpmd_tag,cpmdid) {
    var apidata={};
  //  var constant_url="http://web.novemoon.com/ec/";
  //  var constant_url="http://127.0.0.1/";
   // var url = constant_url+"api/index.php?act=trs_goods_list&op=goods_list&goods_id="+r3wldm;
    if (r3wldm == undefined || r3wldm == null) {
        if(priceid!=""){
            $(price_tag+"[name='"+r3wldm+"']").html("￥"+apidata.price);		
        }
        if(cpmdid!=""){
            $(cpmd_tag+"[name='"+r3wldm+"']").html(apidata.cpmd);		
        }
        return;
   } 
   var url = carGetPriceUrl+r3wldm;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
        async:true,
        timeout: 300000,
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
                if (price==999999){
                    price="?????";
                }
                apidata.cpmd =cpmd;
                apidata.price =price;
            }
            else{
                apidata.price ="暂无价格";
                apidata.cpmd ="";
            }
	//		console.log(apidata);
	if(priceid!=""){
		$(price_tag+"[name='"+r3wldm+"']").html("￥"+apidata.price);		
	}
	if(cpmdid!=""){
		$(cpmd_tag+"[name='"+r3wldm+"']").html(apidata.cpmd);		
	}
			
        }
    });
	
}


/*
*通过r3物料代码 获取产品价格和卖点
*参数：r3
*返回值：价格和卖点
*请求方式：同步
*/
function  tbreturnDatabyr3(r3wldm) {
    var apidata={};
  //  var constant_url="http://web.novemoon.com/ec/";
  //  var constant_url="http://127.0.0.1/";
   // var url = constant_url+"api/index.php?act=trs_goods_list&op=goods_list&goods_id="+r3wldm;
    var url = carGetPriceUrl + r3wldm;
    if (r3wldm == undefined || r3wldm == null) {
        apidata.price ="暂无价格";
        apidata.cpmd ="";
        return apidata;
   } 
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
        async:false,
        timeout: 300000,
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
                if (price==999999){
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
	return apidata;
}
/**
 * 首页获取价格 卖点
 * @param divElem 父div的class 如.home-ele-text
 * @param priceElem 价格所填充的元素
 * @param maiDianElem 卖点所填充的元素
 * @param isPrice 是否需要显示价格
 * @param isMaiDian 是否需要显示卖点
 */
function getDataByList(divElem,priceElem,isPrice,maiDianElem,isMaiDian) {
    //获取所有r3code
    var r3List = new Array(0);
    $(divElem).each(function () {
        var r3Code = $(this).attr("r3code");
        if (r3Code != undefined&&r3Code!=null&&r3Code!="") { r3List.push(r3Code); }
    });
    if (r3List.length == 0) {
        if (isPrice)
        $(divElem+"[r3code='']").find(priceElem).text("暂无价格");
        if (isMaiDian)
        $(divElem+"[r3code='']").find(maiDianElem).text("");
        return;
    }
    //console.log(r3List);
    var url = carGetPriceUrl + r3List.join(",");
    if (isPrice)
        $(divElem+" "+priceElem).text("暂无价格");
    if (isMaiDian)
        $(divElem+" "+maiDianElem).text("");
    //console.log(url)
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        async: true,
        timeout: 300000,
        success: function (data) {
            var obj = data;
            var code = obj.code;
            if (code == 0) {
                for (var item in obj.data) {
                    if (obj.data.hasOwnProperty(item)) {
                        var element = obj.data[item];
                        var r3Code = element.r3code;
                        var cpmd = element.goods_jingle;
                        var price = "";
                        var cxtp = element.goods_promotion_type;
                        //   console.log("促销类型:" + cxtp);
                        //促销类型为3或4显示促销价格，否则显示价格；
                        if (cxtp == 3 || cxtp == 4) {
                            //得到促销价格
                            price = element.goods_promotion_price;
                        }
                        if (cxtp == 1 || cxtp == 2 || cxtp == 0) {
                            price = element.goods_price;
                        }
                        if (price==999999){
                            price="?????";
                        }
                        if (isPrice)
                            $(divElem+"[r3code='" + r3Code+"']").find(priceElem).text("￥" + price);
                        if (isMaiDian)
                            $(divElem+"[r3code='" + r3Code+"']").find(maiDianElem).text(cpmd);
                    }
                }
            } else {
                if (window["console"]){
                    console.error(obj.msg);
	            }
            }
        }
    });
}

/**
 * 最近浏览获取价格 卖点 名称 图片地址 产品地址
 * @param divElem 父div的class 如.home-ele-text
 * @param priceElem 价格所填充的元素
 * @param maiDianElem 卖点所填充的元素
 * @param isPrice 是否需要显示价格
 * @param isMaiDian 是否需要显示卖点
 */
function getDataByListFromCookie(divElem,nameElem,isName,picElem,isPic,urlElem,isUrl) {
    //获取所有r3code
    var r3List = new Array(0);
    $(divElem).each(function () {
        var r3Code = $(this).attr("r3code");
        if (r3Code != undefined&&r3Code!="") { r3List.push(r3Code); }
    });
    if (r3List.length == 0) {
        return;
    }
    //console.log(r3List);
    var url = getPuburlFormServer +"?R3Code=" + r3List.join(",");
	//if (isName)
    //    $(divElem+" "+nameElem).text("");
    if (isPic)
        $(divElem+" "+picElem).attr("src","/images/default-icon.jpg");
    if (isUrl)
        $(divElem+" "+urlElem).attr("href","");
    //console.log(url)
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        async: true,
        timeout: 300000,
        success: function (data) {
            var obj = data;
            var code = obj.isSuccess;
            if (code) {
                for (var item in obj.data.resultList) {
                    if (obj.data.resultList.hasOwnProperty(item)) {
                        var element = obj.data.resultList[item];
                        var r3Code = element.r3wldm;
                        var cpmc = element.cpmc;
                        var cptp = element.cptp;
						var docpuburl = element.docpuburl;
                        if (cpmc){
							console.log($(divElem+"[r3code='" + r3Code+"']").find(nameElem).length);
							//console.log($(divElem+"[r3code='" + r3Code+"']").find("a").length);
							if($(divElem+"[r3code='" + r3Code+"']").find(nameElem).length>0){
								for(var j=0; j<$(divElem+"[r3code='" + r3Code+"']").find(nameElem).length; j++){
									if($(divElem+"[r3code='" + r3Code+"']").find(nameElem).eq(j).find("img").length>0){
										$(divElem+"[r3code='" + r3Code+"']").find(nameElem).eq(j).find("img").attr("src",cptp);
										$(divElem+"[r3code='" + r3Code+"']").find(nameElem).attr("title",cpmc);
									}else{
										$(divElem+"[r3code='" + r3Code+"']").find(nameElem).eq(j).text(cpmc);
										$(divElem+"[r3code='" + r3Code+"']").find(nameElem).eq(j).attr("title",cpmc);
									}
								}
							}else{
								$(divElem+"[r3code='" + r3Code+"']").find(nameElem).text(cpmc);
								$(divElem+"[r3code='" + r3Code+"']").find(nameElem).attr("title",cpmc);
							}
						}
                        if (cptp){
							$(divElem+"[r3code='" + r3Code+"']").find(picElem).attr("src",cptp);
						}
						if (docpuburl){
						    if($(divElem+"[r3code='" + r3Code+"']").find(urlElem).length > 0){
								for(var i=0;i<$(divElem+"[r3code='" + r3Code+"']").find(urlElem).length; i++){
									$(divElem+"[r3code='" + r3Code+"']").find(urlElem).eq(i).attr("href",docpuburl);
								}
							}else{
								$(divElem+"[r3code='" + r3Code+"']").attr("href",docpuburl);
							}                     
                            
						}

					}
                }
            } else {
                if (window["console"]){
                    console.error(obj.isSuccess);
	            }
            }
        }
    });
}