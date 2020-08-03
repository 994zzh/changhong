//返回用户名
function returnUserName() {
    $.ajax({
        type: "POST",
        url: getLoginUserUrl,
        data: {},		
        dataType: "json",
        success: function(data, textStatus) {
            if (data.isSuccess) {
				var username = data.userName;
				//console.log(username);
				NTKF_PARAM.uname=username;
			}
        },
        complete: function() {
        	var ntkfScript = document.createElement('script');
        	ntkfScript.src= 'https://dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9577';
        	document.getElementsByTagName('body')[0].appendChild(ntkfScript);
        }
    });
}
//返回用户sdssotoken
function returnUserId(){
	if(isssotoken()){
		var chgwssotoken = "chgw_loginUser"; //同域Cookie
		var sdssotoken = Cookies.get(chgwssotoken);
		//console.log(sdssotoken);
		NTKF_PARAM.uid=sdssotoken;
	}
}

//返回会员级别
function returnUserLevel() {	
	NTKF_PARAM.userlevel = "0";
	// $.ajax({
	// 	type: "POST",
	// 	url: seasonApiUrl+'/credit/getLoginLevel',
	// 	dataType: "json",
	// 	success: function(data, textStatus) {
	// 		var isSuccess=data.isSuccess;
	// 		if(isSuccess) {
	// 			//console.log(data.data.data.level.level);
	// 			NTKF_PARAM.userlevel = data.data.data.level.level;
	// 		}
	// 	}
	// 	/*,
    //     complete: function() {
    //     	var ntkfScript = document.createElement('script');
    //     	ntkfScript.src= 'https://dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9577';
    //     	document.getElementsByTagName('body')[0].appendChild(ntkfScript);
    //     }*/
	// });
}