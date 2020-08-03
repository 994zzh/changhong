





<!-- basic styles -->


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>登录</title>
<link href=https://cdn.chiq-cloud.com/passport/pc/css/login.css rel=stylesheet>
<link href=https://cdn.chiq-cloud.com/passport/pc/css/verify.css rel=stylesheet>
<script type=text/javascript src=https://cdn.chiq-cloud.com/passport/js/jquery-1.11.1.min.js></script>
<script type=text/javascript src=https://cdn.chiq-cloud.com/passport/pc/js/verify-new.js></script>
<script src="https://cdn.chiq-cloud.com/passport/pc/js/common.js"></script>
<script type="text/javascript" src="https://cdn.chiq-cloud.com/passport/js/des/tripledes.js"></script>
<script type="text/javascript" src="https://cdn.chiq-cloud.com/passport/js/des/mode-ecb.js"></script>

<style type="text/css">
.verify-msg {
	width: 100%;
	height: 100%;
	display: box;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	font-family: Calibri;
	/* 	font-size: 0.34rem;
	line-height: 0.34rem; */
	color: #333333;
}
</style>
<link href= rel=stylesheet>
</head>
<body>
	<input type="hidden" id="livemode" value="1" />
	<input type="hidden" id="service" value="https%3A%2F%2Fcn.changhong.com%2Fec%2Fcshop%2Findex.php%3Fact%3Dapi_sso%26op%3Dgologincl" />
	<input type="hidden" id="view" value="gw" />

	<div class="headerDiv">
		<img class="logoImg" src='https://cdn.chiq-cloud.com/passport/pc/image/logo.jpg'>
		<div class="spaceLine"></div>
		<div class="proNameDiv">通行证</div>
	</div>
	<div class="contentDiv">

		<div class="contentDiv_navigate">
			<div id="navigateTabDiv1" class="contentDiv_navigate_tab1 "
				onclick="contentDivNavigateClicked(1)">账号密码登录</div>
			<div id="navigateTabDiv2"
				class="contentDiv_navigate_tab2 contentDiv_navigate_tab_unSelected"
				onclick="contentDivNavigateClicked(2)">手机短信登录</div>
		</div>
		<div style="width: 100%; height: 30px"></div>
		<div id="accountDiv1" class="inputTopDiv" style="display: none">
			<img class="login_icon_img"
				src="https://cdn.chiq-cloud.com/passport/pc/image/login_ico1.png"> <input id="phone"
				class="loginInput" placeholder="手机号码" maxlength="11" />
		</div>
		<div id="accountDiv2" class="inputTopDiv">
			<img class="login_icon_img"
				src="https://cdn.chiq-cloud.com/passport/pc/image/login_ico3.png"> <input
				id="username" class="loginInput" type="text" placeholder="手机/邮箱/用户名"
				maxlength="30" />
		</div>
		<div id="accountTipsDiv" class="tipsDiv"></div>
		<div id="verifiCodeDiv" class="inputTopDiv" style="display: none">
			<img class="login_icon_img"
				src="https://cdn.chiq-cloud.com/passport/pc/image/login_ico2.png"> <input
				id="smsCode" class="loginInput verifiCodeInput" placeholder="短信验证码"
				maxlength="6" />
			<button id="getVerifiCodeBtn" class="getVerifiCodeBtn"
				onclick="getAuthCode()">获取验证码</button>
		</div>
		<div id="passwordDiv" class="inputTopDiv">
			<img class="login_icon_img"
				src="https://cdn.chiq-cloud.com/passport/pc/image/login_ico4.png"> <input
				id="password" class="loginInput" type="password" placeholder="密码" />
		</div>
		<div id="passwordTipsDiv" class="tipsDiv"></div>
		<div class="loginBtnTopDiv">
			<button class="loginBtn" onclick="loginBtnClicked()"
				id="account-login">登录</button>
		</div>
		<div class="registerTopDiv">
			<button class="forgetBtn" onclick="forgetBtnClicked()">忘记密码</button>
			<button class="registerBtn" onclick="registerBtnClicked()">注册</button>
		</div>
		<div class="otherLoginTopDiv">
			<div class="leftSpaceLineDiv"></div>
			<div class="otherLoginDescriptDiv">其他登录方式</div>
			<div class="rightSpaceLineDiv"></div>
		</div>
		
		
			<div class="otherLoginMethodDiv">
				<a target="_top"
					href="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101347331&redirect_uri=https%3a%2f%2fpassport.changhong.com%2fredirect.do%3fenvironment%3dproduct%26livemode%3d1%26service%3dhttps%3A%2F%2Fcn.changhong.com%2Fec%2Fcshop%2Findex.php%3Fact%3Dapi_sso%26op%3Dgologincl%26source%3dqq">
					<img src="https://cdn.chiq-cloud.com/passport/pc/image/QQ.png" alt="">
				</a> <a target="_top"
					href="https://open.weixin.qq.com/connect/qrconnect?appid=wxb21ab427f39e3633&redirect_uri=https://passport.changhong.com/redirect.do?environment=product%26livemode=1%26service=https%3A%2F%2Fcn.changhong.com%2Fec%2Fcshop%2Findex.php%3Fact%3Dapi_sso%26op%3Dgologincl%26source%3dweChat&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect">
					<img src="https://cdn.chiq-cloud.com/passport/pc/image/weixin.png" alt="">
				</a> <a target="_top"
					href="https://api.weibo.com/oauth2/authorize?client_id=3311627057&redirect_uri=https://passport.changhong.com/redirect.do?environment=product%26livemode=1%26service=https%3A%2F%2Fcn.changhong.com%2Fec%2Fcshop%2Findex.php%3Fact%3Dapi_sso%26op%3Dgologincl%26source=weibo&response_type=code&state=&scope=all">
					<img src="https://cdn.chiq-cloud.com/passport/pc/image/weibo.png" alt="">
				</a> <a target="_top"
					href="https://auth.alipay.com/login/index.htm?goto=https%3A%2F%2Fopenauth.alipay.com%3A443%2Foauth2%2FpublicAppAuthorize.htm%3Fapp_id%3D2017102409491491%26scope%3Dauth_user,auth_base%26redirect_uri%3Dhttps%3a%2f%2fpassport.changhong.com%2fredirect.do%3fenvironment%3dproduct%26livemode%3d1%26service=https%3A%2F%2Fcn.changhong.com%2Fec%2Fcshop%2Findex.php%3Fact%3Dapi_sso%26op%3Dgologincl">
					<img src="https://cdn.chiq-cloud.com/passport/pc/image/pay.png" alt="">
				</a>
			</div>
		
	</div>

	<div id="dialogTopDivID" class="dialogTopDiv">
		<div class="dialogContentDiv">
			<div
				style="margin: 10px; margin-bottom: 0px; height: 20px; line-height: 20px">
				<span style="font-size: 13px; color: #1c94f2">安全验证</span> <img
					src="https://cdn.chiq-cloud.com/passport/pc/image/close.png" onclick="closeImgClicked()"
					alt=""
					style="width: 10px; float: right; padding-top: 5px; cursor: pointer;">
			</div>
			<div id="codeDiv" style="padding: 2%; height: 210px;"></div>
			<span onclick="changeImgClicked()"
				style="font-size: 13px; color: #1c94f2; float: right; margin: 10px; cursor: pointer; text-decoration: underline">换一张</span>
		</div>
	</div>

	<script type="text/javascript">
		var currentSelectIndex = 1;
		function contentDivNavigateClicked(index) {
			if (currentSelectIndex == index)
				return;
			//清空tips
			$("#accountTipsDiv").html("");
			$("#passwordTipsDiv").html("");
			var tab1 = document.getElementById('navigateTabDiv1');
			var tab2 = document.getElementById('navigateTabDiv2');
			var accountDiv1 = document.getElementById('accountDiv1');
			var verifiCodeDiv = document.getElementById('verifiCodeDiv');
			var accountDiv2 = document.getElementById('accountDiv2');
			var passwordDiv = document.getElementById('passwordDiv');

			if (index == 2) {
				tab1.className = "contentDiv_navigate_tab1 contentDiv_navigate_tab_unSelected";
				tab2.className = "contentDiv_navigate_tab2 ";
				accountDiv1.style.display = "block";
				verifiCodeDiv.style.display = "block";
				accountDiv2.style.display = "none";
				passwordDiv.style.display = "none";
			} else {
				tab1.className = "contentDiv_navigate_tab1 ";
				tab2.className = "contentDiv_navigate_tab2 contentDiv_navigate_tab_unSelected";
				accountDiv1.style.display = "none";
				verifiCodeDiv.style.display = "none";
				accountDiv2.style.display = "block";
				passwordDiv.style.display = "block";
			}
			currentSelectIndex = index;
		}
		function loginBtnClicked() {
			console.log(this.errorCode)
			$("#loginBtn").attr("onclick", "");
			if ($('#accountDiv2').css('display') == 'none') {
				smsLogin();
			} else if (window.errorCode === "showCode") {//账号密码错误三次以上需验证行为验证码
				getVerifiCode(login);
			} else {
				login();
			}
			$("#loginBtn").attr("onclick", "loginBtnClicked()");
		}
		function forgetBtnClicked() {
			if ($("#view").val() === "form") {
				window.top.location = window.location.protocol
						+ "//"
						+ window.location.host
						+ "/api/reset.do?view=gw&livemode=1&service=https%3A%2F%2Fcn.changhong.com%2Fec%2Fcshop%2Findex.php%3Fact%3Dapi_sso%26op%3Dgologincl"
			} else {
				window.top.location = "reset.do?view=gw&livemode=1&service=https%3A%2F%2Fcn.changhong.com%2Fec%2Fcshop%2Findex.php%3Fact%3Dapi_sso%26op%3Dgologincl"
			}
		}
		function registerBtnClicked() {
			if ($("#view").val() === "form") {
				window.top.location = window.location.protocol
						+ "//"
						+ window.location.host
						+ "/api/regist.do?view=gw&livemode=1&service=https%3A%2F%2Fcn.changhong.com%2Fec%2Fcshop%2Findex.php%3Fact%3Dapi_sso%26op%3Dgologincl"
			} else {
				window.top.location = "regist.do?view=gw&livemode=1&service=https%3A%2F%2Fcn.changhong.com%2Fec%2Fcshop%2Findex.php%3Fact%3Dapi_sso%26op%3Dgologincl"
			}
		}
		window.errorCode = "";
		//账号密码登录
		function login(clickPosStr, randId) {
			if ($("#username").val().length == 0) {
				$("#accountTipsDiv").html("请输入用户名");
				$("#username").focus();
				return;
			}
			if ($("#password").val().length == 0) {
				$("#passwordTipsDiv").html("请输入密码");
				$("#password").focus();
				return;
			}
			if (flag) {
				return;
			} else {
				flag = true;
				load($("#account-login"));
			}
			$.ajax({
				url : "login.do",
				type : "post",
				//async: false,
				data : {
					username : $("#username").val(),
					password : encryptAES($("#password").val()),
					livemode : $("#livemode").val(),
					service : $("#service").val(),
					clickPosStr : clickPosStr,
					randId : randId
				},
				success : function(data) {
					flag = false;
					$("#account-login").html("登录")
					if (data.success) {
						window.top.location = data.msg;
					} else {
						$("#passwordTipsDiv").html("账号或密码错误,或账号被禁用");
						window.errorCode = data.msg
					}
				},
				error : function() {
					flag = false;
					$("#account-login").html("登录")
				}
			});
		}
		
		//手机验证码登录
		function smsLogin() {
			if (!isPhone($("#phone").val())) {
				$("#accountTipsDiv").html("请输入正确的手机号");
				$("#phone").focus();
				return;
			}
			if ($("#smsCode").val().length != 6) {
				$("#passwordTipsDiv").html("请输入正确验证码");
				$("#smsCode").focus();
				return;
			}
			if (flag) {
				return;
			} else {
				flag = true;
				load($("#account-login"));
			}
			$.ajax({
				url : "smsLogin.do",
				type : "post",
				data : {
					phone : $("#phone").val(),
					code : $("#smsCode").val(),
					livemode : $("#livemode").val(),
					service : $("#service").val()
				},
				success : function(data) {
					flag = false;
					$("#account-login").html("登录")
					if (data.success) {
						window.top.location = data.msg
					} else {
						$("#passwordTipsDiv").html(data.msg);
					}
				}
			});
		}
		//获取验证码
		function getSmsCode(clickPosStr, randId) {
			// ajax发送短信验证码
			$.ajax({
				url : "getSmsCode.do",
				type : "post",
				async : false,
				data : {
					phone : $("#phone").val(),
					livemode : $("#livemode").val(),
					service : $("#service").val(),
					randId : randId,
					clickPosStr : clickPosStr
				},
				success : function(data) {
				}
			});
		}
		var xwCodeObj;
		function changeImgClicked() {
			xwCodeObj.refresh();
		}
		//获取短信验证码
		function getAuthCode() {
			if (!isPhone($("#phone").val())) {
				$("#accountTipsDiv").html("请输入正确的手机号");
				$("#phone").focus();
				return;
			} else {
				$("#smsCode").val("");
				getVerifiCode(getSmsCode);
			}
		}
		//行为验证方法
		function getVerifiCode(callback) {
			$('#dialogTopDivID').css("display", "block");
			if (xwCodeObj) {
				xwCodeObj.refresh();
			} else {
				xwCodeObj = $('#codeDiv').pointsVerify({
					imgPre : "https://cdn.chiq-cloud.com/passport",
					defaultNum : 4, //默认的文字数量
					checkNum : 2, //校对的文字数量
					vSpace : 5, //间隔
					imgName : [ '1.jpg', '2.jpg' ],
					imgSize : {
						width : '96%',
						height : '60%',
					},
					barSize : {
						width : '100%',
						height : '15%',
					},
					ready : function() {
					},
					success : function(clickPosStr, randId) {
						callback(clickPosStr, randId);
						//隐藏行为验证码框
						closeImgClicked()
						invokeSettime('#getVerifiCodeBtn');
					},
					error : function() {
						//alert('验证失败！');
					}

				});
			}
		}
		function invokeSettime(obj) {
			var countdown = 60;
			settime(obj);
			function settime(obj) {
				if (countdown == 0) {
					$(obj).attr("disabled", false);
					$(obj).css("background-color", "#ffffff");
					$(obj).text("获取验证码");
					countdown = 60;
					return;
				} else {
					$(obj).attr("disabled", true);
					$(obj).css("background-color", "#e8e8e8");
					$(obj).text("(" + countdown + ") s 重新获取");
					countdown--;
				}
				setTimeout(function() {
					settime(obj)
				}, 1000);
			}
		}
		$("#phone").keyup(function() {
			if (isPhone($("#phone").val())) {
				$("#accountTipsDiv").html("");
			} else {
				$("#accountTipsDiv").html("请输入正确的手机号");
				$("#phone").focus();
			}
		});
		$("#smsCode").keyup(function() {
			if ($("#smsCode").val().length == 6) {
				$("#passwordTipsDiv").html("");
			}
		});
		$("#username").keyup(function() {
			if ($("#username").val().length > 0) {
				$("#accountTipsDiv").html("");
				//判断是否需要图形验证码
				$.ajax({
					url : "showCode.do",
					type : "get",
					async : false,
					data : {
						username : $("#username").val()
					},
					success : function(data) {
						if (data === true) {
							window.errorCode = "showCode"
						} else {
							window.errorCode = ""
						}
					}
				});
			}
			
		});
		$("#password").keyup(function() {
			if ($("#password").val().length > 0) {
				$("#passwordTipsDiv").html("");
			}
		});

		function closeImgClicked() {
			$('#dialogTopDivID').css("display", "none");
		}
		$(document).keydown(function(event) {
			if (event.keyCode == 13) {
				loginBtnClicked();
			}
		});
		
		var key = CryptoJS.enc.Utf8.parse("aaaaaaaaaaaaaaaa"); 
		var iv = CryptoJS.enc.Utf8.parse("bbbbbbbbbbbbbbbb");

		//aes加密
		function encryptAES(context) {
		   var encrypted = '';
		   var srcs = CryptoJS.enc.Utf8.parse(context);
		   encrypted = CryptoJS.AES.encrypt(srcs, key, {
		        iv: iv,
		        mode: CryptoJS.mode.CBC,
		        padding: CryptoJS.pad.Pkcs7
		    });
		    return encrypted.toString();
		} 
		
	</script>
	<!-- 安全部部码 -->
	
	<script type=text/javascript
		src="https://bs-cdn.chiq-cloud.com/passport/passport-sdk.min.js"></script>
</body>
</html>