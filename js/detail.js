// // 列表商品的详情页
// $.getJSON('./jq/kt.json',function(data){
//     var urls = location.href;
//     var str = urls.split('?')[1].split('=')[1]
//     var dt = data[parseInt(str)-1];
//     var imgurls = dt.URL1.split("jpg")
//     // console.log(imgurls)
//     // console.log(typeof(dt.URL1))
//     var str1 = `
//         <div class="item-left float_left">
//             <div id="item-imgBox">
//                 <img src="${dt.URL}" alt="">
//                 <div class="big-mirror"></div>
//             </div>
//             <div class="item-banner">
//                 <a href="#" class="float_left btn-left"></a>
//                 <img src="${imgurls[0]}jpg" alt="">
//                 <img src="${imgurls[1]}jpg" alt="">
//                 <img src="${imgurls[2]}jpg" alt="">
//                 <img src="${imgurls[3]}jpg" alt="">
//                 <img src="${imgurls[4]}jpg" alt="">
//                 <a href="#" class="float_right btn-right"></a>
//             </div>
//             <div id="big-pic">
//                 <img src="${dt.URL}" alt="">
//             </div>
//         </div>
//         <div class="item-right">
//             <div class="item-right-name">
//                 <h2>${dt.标题链接}</h2>
//                 <a href="#">加入对比</a>
//             </div>
//             <div class="item-right-price">
//                 <span>${dt.progoodstext}</span>
//             </div>
//             <div class="price-where">
//                 <div>
//                     <span class="float_left">配送地址：</span>
//                     <div class="address-sel float_left" >
//                         <h1>北京市 市辖区 东城区</h1>
//                         <div class="address-box">
//                             <ul class="select-area">
//                                 <select name="province">
//                                     <option value="请选择省">请选择省</option>
//                                 </select>
//                                 <select name="city">
//                                     <option value="请选择市">请选择市</option>
//                                 </select>
//                                 <select name="area">
//                                     <option value="请选择区">请选择区</option>
//                                 </select>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <p>
//                     <span>服务信息： 由长虹官方发货，并提供售后服务。</span>   
//                 </p>
//             </div>
//             <div class="price-num">
//                 <div class="item-num">
//                     <span class="goods-num">商品数量：</span>
//                     <div>
//                         <a href="#">-</a>
//                         <input type="text" value="1" class="float_left clear_border">
//                         <a href="#" style="border-left: 1px solid #d4d4d4;">+</a>
//                     </div>
//                 </div>
//                 <div class="item-buy">
//                     <a href="#" class="nowBuy clear_border" style="background:#F12020;color:#fff">立即购买</a>
//                     <a href="#" class="addinCar" >加入购物车</a>
//                 </div>
//                 <p>
//                     <a href="#" class="kefu">在线客服</a>
//                     <a href="#" class="addLove">收藏</a>
//                     <a href="#" class="share">分享</a>
//                 </p>
//                 <div class="item-links">
//                     <a href="#">
//                         <img src="./picture/share-sinaminiblog.gif" alt="">
//                     </a>
//                     <a href="#">
//                         <img src="./picture/share-weixin.png" alt="">
//                     </a>
//                     <a href="#">
//                         <img src="./picture/share-qzone.gif" alt="">
//                     </a>
//                     <a href="#">
//                         <img src="./picture/share-douban.png" alt="">
//                     </a>
//                 </div>
//             </div>
//         </div>
//     `
//     $(".item").html(str1)
//     // // 调用放大镜
//     // var oDiv = document.querySelector(".item-left");
//     // new mirror(oDiv)
// })