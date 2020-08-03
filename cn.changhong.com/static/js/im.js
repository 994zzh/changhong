var baseUrl = "http://ekp.changhong.com";
var imUrl = baseUrl + "/IM/login/visitor?url=";
var r3code = undefined;
$(function () {
	imUrl += window.location.href;
	r3code = $("#r3wldm").val();
	if (r3code != null && r3code != undefined) {
		imUrl += "&R3Code=" + r3code;
	}
	getUID();
});
function getUID() {
	$.ajax({
		url: "http://cn.changhong.com/season/api/loginProxy/isLogin",
        type: 'GET',
        dataType: 'JSON',
		success: function (data) {
			if (data.userId != null) {
				imUrl += "&uid=" + data.userId;
			}
		}
	}
	);
}
function goToIm() {
	window.open(imUrl,"_blank");
}
