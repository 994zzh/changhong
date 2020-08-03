





<!-- basic styles -->


<html>
<head lang="en">
    <meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,11,10">
<meta name="renderer" content="webkit">
<script type="text/javascript" src="https://cdn.chiq-cloud.com/passport/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="https://cdn.chiq-cloud.com/passport/js/des/tripledes.js"></script>
<script type="text/javascript" src="https://cdn.chiq-cloud.com/passport/js/des/mode-ecb.js"></script>
<script type="text/javascript">
    var _adwq = _adwq || [];
    _adwq.push(['_setAccount', '104d4o']);
    _adwq.push(['_setDomainName', '.changhong.com']);
    _adwq.push(['_trackPageview']);

    (function () {
        var adw = document.createElement('script');
        adw.type = 'text/javascript';
        adw.async = true;
        adw.src = 'https://cdn.chiq-cloud.com/passport/js/adw.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(adw, s);
    })();
    // DESå å¯
    function encryptByDES(message) {
        if (message == null || message.length == 0) {
            return "";
        }
        var key = "passport-gw-pc";
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    }
    //ç»ä¸å å¯å¯ç 
    function encryptPwd() {
        $("input[name='password']").val(encryptByDES($("input[name='password']").val()));
    }
</script>
<!--cnzz-->
<div style="display:none;">
    <script src="https://s4.cnzz.com/z_stat.php?id=1258600689&web_id=1258600689" language="JavaScript"></script>
</div>

    <title>登录</title>
    <link rel="stylesheet" href="https://cdn.chiq-cloud.com/passport/css/public.css" type="text/css"/>
    <link rel="stylesheet" href="https://cdn.chiq-cloud.com/passport/css/style.css?v=1.3" type="text/css">
    <link rel="stylesheet" href="https://cdn.chiq-cloud.com/passport/css/iconfont.css" type="text/css">
    <script type="text/javascript" src="https://cdn.chiq-cloud.com/passport/js/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="https://cdn.chiq-cloud.com/passport/js/login.js"></script>

</head>
<body>


<div class="login" id="login">
    <div class="login-main">
        <div class="login-main-left">
            <form action="/login.do?service=https://cn.changhong.com/season/api/loginController/proxy&livemode=1" method="post" onsubmit="">
                
                <input name="view" type="hidden" value="">
                <input name="ecKey" type="hidden" value="">
               
                
                
                
                <p><span>长虹账户</span> <input type="text" name="username" class="text input" placeholder="手机号/邮箱/用户名"
                                            id="PP-1-3-1"></p>

                <p class="password password2"><span>登录密码</span> <input type="password" name="password"
                                                                       placeholder="请输入密码" class="input"
                                                                       id="PP-1-3-2" autocomplete="off"></p>

                
                    <p class="password password2"><span>图形验证码</span> <input type="text" name="imgcode"
                                                                            placeholder="请输入4位图形验证码" class="input"
                                                                            maxlength="4" id="PP-1-3-3"
                                                                            style="width: 262px"><img
                            src="/register_code.do" style="width:90px; height: 40px;margin-left: 10px;"
                            id="My_image">
                        <span id="change_pic"
                              style="font-size: 14px;width: 100px;height: 20px;cursor: pointer;position: absolute;padding-left: 10px;">看不清换一张</span>
                    </p>

                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                


                
                
                

                <input type="submit" value="登 录" class="submit" onclick="encryptPwd()">
            </form>
        </div>
        <!-- <div class="login-main-right">
            <p>快捷登录</p>
            <a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101347331&redirect_uri=https%3a%2f%2fpassport.changhong.com%2fredirect.do%3fenvironment%3dtest%26livemode%3d0%26service%3dhttp%3a%2f%2fchweb.changhong.com%26source%3dqq"
               class="qq">用QQ账号登录</a>
            <a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxb21ab427f39e3633&redirect_uri=https://passport.changhong.com/redirect.do?environment=test%26livemode=0%26service=http%3a%2f%2fchweb.changhong.com%26source%3dweChat&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect"
               class="weixin">微信扫码登录</a>
            <a href="https://api.weibo.com/oauth2/authorize?client_id=3311627057&redirect_uri=https://passport.changhong.com/redirect.do?environment=test%26livemode=0%26service=http%3a%2f%2fchweb.changhong.com%26source%3dweibo&response_type=code&state=&scope=all"
               class="weibo"><i class="iconfont icon-xinlangweibo"></i><span>新浪微博登录</span></a>
        </div> -->
    </div>
</div>

<script>
    $(function(){

        $("#change_pic").click(function(){
            $('#My_image').prop('src', '/register_code.do?t=' + (new Date().getTime()));
            $('#PP-1-3-3').val('');
        });

    });

</script>
</body>
</html>