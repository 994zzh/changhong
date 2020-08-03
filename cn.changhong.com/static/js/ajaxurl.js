/**
 * change by wc 2016年08月04日
 */

var ssoUrl = "https://cn.changhong.com/sso/api/login.do?view=gw&ecKey=false&service="; //单点登录地址
var ssoOutUrl = "https://cn.changhong.com/sso/logout.do?service=";//单点登录退出地址
var seasonApiUrl = "https://cn.changhong.com/season";//互动应用接口地址
var ecApiUrl = "https://cn.changhong.com/ec";  //电商接口地址 
 
var realmnameURL="https://cn.changhong.com";
//var realmnameURL="http://127.0.0.1";


/**wc start */
//电商获取价格接口
var getMoreDsApiDataURL=ecApiUrl+"/api/index.php";

//筛选接口
var screenProductsURL=seasonApiUrl+"/search/search";

//查询多个r3wldm，的图片，地址。
var getPuburlFormServer=seasonApiUrl+"/ProductInfo/queryByR3List";






//收藏
//增加我的收藏接口
var addFavoriteURL=seasonApiUrl+"/api/favorites/saveFavorite";
//删除我的收藏接口
var deletefavoriteURL=seasonApiUrl+"/api/favorites/deleteFavorite";
//我的收藏所有类型数量接口
var queryfavoriteAllType   = seasonApiUrl+"/api/favorites/queryAllType";
//我的收藏所有数据接口
var queryfavoriteAllData = seasonApiUrl+"/api/favorites/queryFavorites";
//是否已经收藏
var getIsMyFavoriteURL=seasonApiUrl+"/api/favorites/queryIsInfav";
//全站检索
//产品全站检索
var queryProductTotalStationURL = seasonApiUrl+"/search/searchAll";
//公告全站检索
var queryNoticeURL=seasonApiUrl+"/search/searchAllNotice";
//全站检索地址
var TotalStationURL = realmnameURL+"/cpzx/searchresult.html";

//获取收货地址
var getAddressURL=seasonApiUrl+"/api/addressController/getAddress";
//增加收货地址
var addAddressURL=seasonApiUrl+"/api/addressController/addAddress";
//更新收货地址
var updateAddressURL=seasonApiUrl+"/api/addressController/updateAddress";
//删除收货地址
var deleteAddressURL=seasonApiUrl+"/api/addressController/deleteAddress";
//设置默认收货地址
var setDefaultAddressURL=seasonApiUrl+"/api/addressController/setDefaultAddress";
//获取地址库
var getCitysOrCountysURL=seasonApiUrl+"/areaController/getCitysOrCountys";

//评价
//获取评价
var getqueryCommentURL=seasonApiUrl+"/review/queryComment";
//获取评价人等级
var getCommentUserLevelURL=seasonApiUrl+"/review/getLevel";
//获取评价人用户图片
var getCommentUserPicURL=seasonApiUrl+"/review/getUserPic";
//获取评价种类数
var getqueryCountComtURL=seasonApiUrl+"/review/queryCountComt";

//点赞
var getsavePraiseURL=seasonApiUrl+"/api/review/savePraise";
//评价图片URL
var commentPicURL=realmnameURL+"/comment";

/**wc end */




/**djc start */
var localLogoutUrl = seasonApiUrl+"/loginController/localLogout";  //本地退出接口
var ecLogoutUrl = ecApiUrl+"/cshop/index.php?act=api_sso&op=logout2";//电商退出接口
var getLoginUserUrl = seasonApiUrl+'/api/loginController/getLoginUser'; //获取登录用户信息接口
var carGetPriceUrl = ecApiUrl+"/api/index.php?act=trs_goods_list&op=goods_list&goods_id=";

var deleteCarGoodUrl = ecApiUrl+"/api/index.php?act=trs_cart&op=del"; //删除购物车接口
var localDeleteCarGoodUrl = seasonApiUrl+"/cart/remove";//本地山抽购物车

var listEcCartUrl = ecApiUrl+"/api/index.php?act=trs_cart&op=cart_list";//获取购物车列表接口
var localCartListUrl = seasonApiUrl+"/cart/list";


var cartBuyUrl = ecApiUrl+"/cshop/index.php?act=cart"; //立即结算

var isLoginUrl = seasonApiUrl+"/api/loginProxy/isLogin"; //服务端验证用户是否登录

/**djc stop */


/** sxg */
//发票信息
//获取发票信息
var getInvoiceURL=seasonApiUrl+"/api/invoice/getInvoice";
//新增发票信息
var addInvoiceURL=seasonApiUrl+"/api/invoice/addInvoice";
//更新发票信息
var updateInvoiceURL=seasonApiUrl+"/api/invoice/updateInvoice";
//删除发票信息
var delInvoiceURL=seasonApiUrl+"/api/invoice/delInvoice";

//社区接口
//获取社区评测
var getEvaluatesURL=seasonApiUrl+"/evaluate/getEvaluates";
//通过列表获取社区评测
var getEvaluatesArrURL = seasonApiUrl + "/evaluate/getEvaluatesByArr";
//通过产品大类获取社区评测
var getEvaluatesCatURL=seasonApiUrl+"/evaluate/getEvaluatesByCat";
//获取社区推荐数据
var getBBSPageURL=seasonApiUrl+"/hot/getBBSPage";
//检索社区帖子
var postSearchURL=seasonApiUrl+"/bbsSearch/postSearch";
//检索帮帮团数据
var bbtSearchURL=seasonApiUrl+"/bbsSearch/bbtSearch";

//账号安全
//安全级别
var accountSafeURL=seasonApiUrl+"/api/loginController/accountSafe";
//获取验证码
var getCodeURL=seasonApiUrl+"/api/loginController/sendCode";
//更换手机第二步获取验证码
var secondGetCodeURL=ecApiUrl+"/api/index.php?act=change_mobile&op=send_sso_verification";
//绑定手机
var bindPhoneURL=seasonApiUrl+"/api/loginController/bindPhone";
//更换手机
var changePhoneURL=ecApiUrl+"/api/index.php?act=change_mobile&op=change_phone";
//绑定邮箱
var bindEmailURL=seasonApiUrl+"/api/loginController/bindEmail";
//更改密码
var updatePasswordURL=seasonApiUrl+"/api/loginController/updatePassword";
//验证验证码
var verificationCodeURL = seasonApiUrl+"/api/loginController/verificationCode";

//帐号绑定
var loadBindInfoURL = seasonApiUrl+"/api/thirdAccount/bindList"; 
var bindAccountURL = seasonApiUrl+"/api/thirdAccount/bindThirdAccount";
var rebindAccountURL = seasonApiUrl+"/api/thirdAccount/rebindWechat";
var removeBindURL = seasonApiUrl+"/api/thirdAccount/removeBind";

/** sxg stop */
//im
var baseUrl = "https://cn.changhong.com";
/**
*	ylc start
*/

//我的消息查询接口
myMessage_query=seasonApiUrl+"/api/message/query";
//查询消息各种状态数量
myMessage_statusNum=seasonApiUrl+"/api/message/queryStatusNum";
//改变消息状态
myMessage_changeStatus=seasonApiUrl+"/api/message/changestatus";
//消息详情接口
myMessage_detail=seasonApiUrl+"/api/message/queryMDetail";
//我的优惠券查询优惠券接口
voucher_query=ecApiUrl+"/api/index.php?act=trs_voucher&op=voucher_list";
//获取预售商品详情
presell_goods_detail=ecApiUrl+"/api/index.php?act=trs_presell&op=presell_goods_detail";
//0元预售
preselling_zero=ecApiUrl+"/api/index.php?act=trs_presell&op=preselling_zero";
//非0元预售
preselling_nozero=ecApiUrl+"/cshop/index.php?act=buy_preselling&op=buy_step1";
//服务与支持——下载中心查询
download_fwzc=seasonApiUrl+"/serv/d";
//服务与支持——常见问题查询
queryFAQ_fwzc=seasonApiUrl+"/serv/f";
//服务与支持——对应产品服务查询
queryProducts_fwzc=seasonApiUrl+"/serv/p";
//服务与支持—自助排障服务查询
querySelfHelp_fwzc=seasonApiUrl+"/serv/s";
//服务与支持—自助排障服务查询栏目信息
querySelfHelpForCh_fwzc=seasonApiUrl+"/extInterface/queryChannels";
//立即购买
buy_now=ecApiUrl+"/cshop/index.php";
//积分商品详情
point_goods_detail=ecApiUrl+"/api/index.php?act=trs_point&op=point_goods_detail";
//加入购物车未登录情况
addGoodsTocart_notLogin=seasonApiUrl+"/cart/add";
//加入购物车已登录情况
addGoodsTocart_Login=ecApiUrl+"/api/index.php?act=trs_cart&op=add";
//积分商品兑换接口
pointExchange_now=ecApiUrl+"/cshop/index.php?act=pointcart&op=step1";
//商品查询输入关键词，检索一些商品提示信息
searchTipsURL=seasonApiUrl+"/search/searchTips";
/**
*	ylc end
*/
var businessApiPath = "https://cn.changhong.com/ec/api/index.php";
var businessShopPath = "https://cn.changhong.com/ec/cshop/index.php";
/**
 * ygz
 */


//--ygz end

/**
*czb start
*/
//预售产品获取r3code  json
var getYSJson = "https://cn.changhong.com/gwsy/cdh/yszq/index.json";
/**
*czb  end
*/
