/**
*通过地址判断产品分类
*参数：地址
*返回产品分类
**/ 
	function getProductCategory(url) {
        var categoryname;
        if (url.indexOf("_televisions") > -1) {
            categoryname = "television";
        }else if (url.indexOf("_aircondition") > -1) {
            categoryname = "aircondition";
        }else if (url.indexOf("life_electric/jhq") > -1) {
            categoryname = "filter";
        }else if (url.indexOf("life_electric/ysh") > -1) {
            categoryname = "healthpot";
        }else if (url.indexOf("life_electric/dfs") > -1) {
            categoryname = "fan";
        }else if (url.indexOf("digital/mmgwyx") > -1) {
            categoryname = "sound";
        }else if (url.indexOf("digital/lysyj") > -1) {
            categoryname = "radio";
        }else if (url.indexOf("periphery/ly") > -1) {
            categoryname = "clouds";
        }
		return categoryname;
	}
	
/**
*最新更新 2016年11月30日 16:26:47
*对比产品分类
**/ 
//产品对比通用 9.14
function getCompareCategory(url) {
    var listName;
    if (url.indexOf("_televisions") > -1) {
        listName = "compareListTv";
		
    } else if (url.indexOf("_aircondition") > -1) {
        listName = "compareListAir";

    } else if (url.indexOf("shjd/cwxd/ysh") > -1) {
        listName = "compareListElectricYsh";

    } else if (url.indexOf("shjd/life_electric/jhq") > -1) {
        listName = "compareListElectricJhq";

    } else if (url.indexOf("life_electric/dfs") > -1) {
        listName = "compareListElectricDfs";

    } else if (url.indexOf("cpzx/digital/ylyy") > -1) {//娱乐影音
        listName = "compareListDigitalMmgwyx";

    //} else if (url.indexOf("digital/lysyj") > -1) {//数码影音-蓝牙收音机
    //    listName = "compareListDigitalLysyj";

    //} else if (url.indexOf("periphery/ly") > -1) {//周边其他-流云
    //    listName = "compareListPeripheryLy";

    } else if (url.indexOf("bx/bingxiang") > -1) {//冰洗-冰箱 
        listName = "compareListCooling";
		
	} else if (url.indexOf("chiq/bx") > -1) {//启客冰箱
        listName = "compareListCooling";
		
	} else if (url.indexOf("digital/ydtx/sj") > -1) {//产品中心-手机
        listName = "phone";
	
	} else if (url.indexOf("shjd/cwdd/xyyj") > -1) {//产品中心-吸油烟机
        listName = "range_hood";
		
	} else if (url.indexOf("shjd/cwdd/rqz") > -1) {//产品中心-燃气灶		
        listName = "gas_stove";
		
	} else if (url.indexOf("shjd/cwdd/drsq") > -1) {//产品中心-电热水器	
        listName = "e_heater";
		
	} else if (url.indexOf("bx/xyj/gt") > -1) {//产品中心-滚筒洗衣机	
        listName = "gt_washer";
		
	} else if (url.indexOf("bx/xyj/bl") > -1) {//产品中心-波轮洗衣机	
        listName = "bl_washer";
		
	} else if (url.indexOf("digital/smpj/yddy") > -1) {//产品中心-移动电源	
        listName = "portable_source";

	} else if (url.indexOf("periphery/zm") > -1) {//产品中心-手电筒	
        listName = "flashlight";
		
	} else if (url.indexOf("shjd/cwxd/dylg") > -1) {//产品中心-电压力锅	
        listName = "ep_cooker";
		
	} else if (url.indexOf("digital/smpj/dc") > -1) {//产品中心-电池		
        listName = "battery";
		
	} else if (url.indexOf("digital/smpj/cdq") > -1) {//产品中心-充电器
        listName = "charger";

    } else {
        listName = "compareListOther";
    }
    return listName;
}
	
/**
*通过判断是否维护专题，设置链接地址
*参数：ztdt判断是否有专题大图片，url地址，tagname，需要设置href属性的标记名(a)，r3wldm，产品唯一编码
**/

	function singleorcommon(ztdt,url,tagname,r3wldm){
		var relurl;
		var index = url.indexOf(".html");
		if(ztdt==""){
			relurl = url.substring(0,index)+"_common.html";
			$(tagname+"[name='"+r3wldm+"']").attr("href",relurl);
		}
	}

	function commonorsingle(ztdt,url,tagname,r3wldm){
		var relurl;
		var index = url.indexOf(".html");
		if(ztdt!=""){
			relurl = url.substring(0,index)+"_single.html";
			$(tagname+"[name='"+r3wldm+"']").attr("href",relurl);
		}
	}
