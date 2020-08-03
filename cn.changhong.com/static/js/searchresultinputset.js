/**
 * Created by wc 2016年7月22日09:52:54
 update 0918
 */
//方向键下标
var curindex = -1;

jQuery(function () {
	jQuery('#searchInput').bind('keydown', function (event) {
		if (event.keyCode == "13") {
			checkfromdata();
		}
		//add by czb
		var searchtipslength = jQuery("#searchTipsResult p").length;
		if (event.keyCode == "38") {
			if (searchtipslength > 0) {
				if (curindex <= 0) {
					curindex = searchtipslength;
					//console.log(curindex+ "up");
				}
				curindex--;
				jQuery("#searchTipsResult p").eq(curindex).find("a").css("color", "red");
				jQuery("#searchTipsResult p").eq(curindex).siblings().find("a").css("color", "grey");
				jQuery("#searchInput").val(jQuery("#searchTipsResult p").eq(curindex).text());
				//console.log(curindex+ "up");
			}
		} else if (event.keyCode == "40") {
			if (searchtipslength > 0) {
				if (curindex < searchtipslength - 1) {
					curindex++;
					//jQuery("#searchTipsResult p").eq(curindex).find("a").css("color","red");
					//jQuery("#searchTipsResult p").eq(curindex).siblings().find("a").css("color","grey");
					//jQuery("#searchInput").val(jQuery("#searchTipsResult p").eq(curindex).text());
					//console.log(curindex+ "down");
				} else {
					curindex = 0;
					//jQuery("#searchTipsResult p").eq(curindex).find("a").css("color","red");
					//jQuery("#searchTipsResult p").eq(curindex).siblings().find("a").css("color","grey");
					//jQuery("#searchInput").val(jQuery("#searchTipsResult p").eq(curindex).text());
					//console.log(curindex+ "down");
				}
				jQuery("#searchTipsResult p").eq(curindex).find("a").css("color", "red");
				jQuery("#searchTipsResult p").eq(curindex).siblings().find("a").css("color", "grey");
				jQuery("#searchInput").val(jQuery("#searchTipsResult p").eq(curindex).text());
			}
		}
	});

	/*搜索提示框引入js*/
	jQuery('.home-search input[type=text]').focus(function (e) {
		var key = jQuery(this).val();
		key = key.trim();
		var type = jQuery('#searchTipsResultType').val();
		if (typeof (type) == "undefined")
			type = 1;
		if (key == "") {
			jQuery('#searchTipsResult').hide();
			curindex = -1;
		} else {
			jQuery('.home-search').searchTips(key, type);
		}
		stopBubble(e);
	});
	jQuery('.home-search input[type=text]').keyup(function (e) {
		var keyCode = e.keyCode;
		//add by czb
		if (keyCode == "38" | keyCode == "40") {
			return;
		}
		//  if((48<=keyCode&&keyCode<=57)||(65<=keyCode&&keyCode<=90))
		var key = jQuery(this).val();
		key = key.trim();
		var type = jQuery('#searchTipsResultType').val();
		if (typeof (type) == "undefined")
			type = 1;
		if (key == "") {//关键词为空
			jQuery('#searchTipsResult').hide();
			//显示默认搜索下拉关键词
			jQuery('.home-search').orignSearchTips();
			curindex = -1;
		} else {//关键词不为空
			//隐藏默认搜索列表
			jQuery('#orignSearchList').hide();
			jQuery('.home-search').searchTips(key, type);
		}
	});
	jQuery('.home-search input[type=text]').click(function (e) {
		stopBubble(e);
	});
	jQuery('body').click(function () {
		jQuery('#searchTipsResult').hide();
		jQuery('#orignSearchList').hide();
		curindex = -1;
	});
});
function stopBubble(e) {
	if (e || e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}
}
function checkfromdata() {
	var searchword = document.getElementById("searchInput").value;
	//   alert(searchword);
	if (searchword == "" || searchword == null || searchword == undefined) {
		//	JumPpopup("warning","请输入关键字");
		//   return;
		searchword = "长虹";
	}
	//re = new RegExp("#", "g");
	//	searchword = searchword.replace(re, "");
	//	re = new RegExp("%20", "g");
	//	searchword = searchword.replace(re,"");
	// if(checks(searchword))
	//{

	window.location.href = encodeURI(TotalStationURL + "?searchword=" + searchword);
	//} 

}
function checks(t) {

	t = t.replace(/(^\s+)|(\s+jQuery)/g, "");

	if (t == "" || t == "请输入关键检索字") {
		JumPpopup("warning", "请输入有效内容");

		return false;
	}

	var szMsg = "[#_&'/\",;:=!^]";
	var alertStr = "";
	for (i = 1; i < szMsg.length + 1; i++) {
		if (t.indexOf(szMsg.substring(i - 1, i)) > -1) {
			alertStr = "请勿包含非法字符如[#_&'/\",;:=!^]";

			JumPpopup("warning", alertStr);
			// break;
			return false;
		}
	}
	return true;
}


jQuery.fn.searchTips = function (key, type) {
	jQuery('#searchTipsResult').remove();
	var key = key ? key : '';
	key = key.trim();
	var _width = jQuery(this).width(),
		_left = jQuery(this).offset() ? jQuery(this).offset().left : 0,
		_top = jQuery(this).offset() ? jQuery(this).offset().top : 0;
	_top = _top + jQuery(this).height();
	var searchTipsResult = jQuery('<div id="searchTipsResult"></div>'),
		params = {
			skey: key,
			fieldNames: 'cpmc',
			pageSize: 8,
			pageNo: 1
		}
	jQuery('body').append(searchTipsResult);
	jQuery('#searchTipsResult').css({ left: _left, width: _width, top: _top });
	var searchList = '';
	// jQuery.ajax({
	// 	url: searchTipsURL,
	// 	type: 'get',
	// 	dataType: 'json',
	// 	data: params,
	// 	cache: false,
	// 	success: function (data) {
	// 		var tips = data.data.entities;
	// 		searchList = analysisTips(tips, key, type);
	//
	// 		if (searchList == "") {
	// 			jQuery('#searchTipsResult').hide();
	// 			curindex = -1;
	// 		} else {
	// 			jQuery('#searchTipsResult').html("");
	// 			jQuery('#searchTipsResult').append(searchList);
	// 			jQuery('#searchTipsResult').show();
	// 		}
	// 	},
	// 	error: function (error) {
	// 		jQuery('#searchTipsResult').hide();
	// 		curindex = -1;
	// 	}
	// });
	function analysisTips(tips, key, type) {
		console.log(tips);
		var searchList = '';
		for (var i = 0; i < tips.length; i++) {
			if (key == '') {
				searchList += "<p>" + tips[i].cpmc + "</p>";
			} else {
				var contents = tips[i].cpmc.split(key);
				var tip = contents.join('<span>' + key + '</span>');
				searchList += "<p><a href='javascript:;' onclick='replaceSearchTipsVal(\"searchword\",\"" + tips[i].cpmc + "\"," + type + ")'>" + tip + "</a></p>";
			}
		}
		return searchList;
	}
}

//替换指定传入参数的值,paramName为参数,replaceWith为新值
function replaceSearchTipsVal(paramName, replaceWith, type) {
	var oUrl = this.location.href.toString();
	var re = eval('/(' + paramName + '=)([^&]*)/gi');
	if (type == 1) {
		window.location.href = encodeURI(TotalStationURL + "?searchword=" + replaceWith);
	} else {
		var nUrl = oUrl.replace(re, paramName + '=' + replaceWith);
		this.location = nUrl;
	}

}