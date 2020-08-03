var oLis = document.querySelectorAll(".nav-list li");
var oMenu = document.querySelector(".nav-list");
var oH3 = oMenu.querySelectorAll(".nav-sub");
for(var i=1;i<oLis.length;i++){
    oLis[i].onmouseover=function(){
        for(var j=1;j<oLis.length;j++){
            oH3[j].style.display="none";
        }
        this.lastElementChild.style.display="block";
    }
    oLis[i].onmouseout=function(){
        this.lastElementChild.style.display="none";
    }
}
// $(".nav-list").hover(function (e) {
//     if (e.target == $(this).find(".shoye1")[0]) {
//         $(".nav-sub").stop(true).slideUp();
//     }else{
//         $(".nav-sub").stop(true).slideDown();
//     }
// }, function () {
//     $(".nav-sub").stop(true).slideUp();
// })

// function change(a, b) {
//     $(a).mouseover(function () {
//         $(".nav-sub").html(b)
//     })
// }
// change(".nav-list>li:eq(1)", `<div class="nav-sub-con">
//                             <p class="sub-title"><a href="#">热门推荐</a></p>
//                             <div class="sub-cont">
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztds/201611/W020200203396252998723_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">65英寸超薄物...</a>
//                                     <h1>￥10997.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztds/201611/W020200203396755514725_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">65寸轻薄物联电视</a>
//                                     <h1>￥8997.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztds/201611/W020200203397239319679_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">82英寸无边全...</a>
//                                     <h1>￥19999.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztds/201611/W020200203397618704399_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">三色4K激光影院</a>
//                                     <h1>￥99997.00</h1>
//                                 </div>
//                             </div>
//                         </div>`)
// change(".nav-list>li:eq(2)", `<div class="nav-sub-con">
//                             <p class="sub-title"><a href="#">热门推荐</a></p>
//                             <div class="sub-cont">
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztkd/201611/W020200203398197115245_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">CHiQ大3P AI人...</a>
//                                     <h1>￥10999.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztkd/201611/W020200203398834780255_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">CHiQ 大2P智能...</a>
//                                     <h1>￥6799.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztkd/201611/W020200203399515744950_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">CHiQ 1.5P静音...</a>
//                                     <h1>暂无价格</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztkd/201611/W020200203400969250339_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">CHiQ 1P智清洁...</a>
//                                     <h1>￥3199.00</h1>
//                                 </div>
//                             </div>
//                         </div>`)
// change(".nav-list>li:eq(3)", `<div class="nav-sub-con">
//                             <p class="sub-title"><a href="#">热门推荐</a></p>
//                             <div class="sub-cont">
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src = "https://images.changhong.com/chgw/gwsy/zt/ztbx/201611/W020200203401426407692_135.jpg" alt = "" >
//                                     </a>
//                                     <a href="#">656升全面薄水...</a>
//                                     <h1>￥24999.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztbx/201611/W020200203401815965773_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">482升超薄水分...</a>
//                                     <h1>￥15499.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztbx/201611/W020200203402264006928_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">645升M鲜生智...</a>
//                                     <h1>￥10999.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztbx/201611/W020190305579652915744_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">520升M鲜生智...</a>
//                                     <h1>￥9999.00</h1>
//                                 </div>
//                             </div>
//                         </div>`)
// change(".nav-list>li:eq(4)", `<div class="nav-sub-con">
//                             <p class="sub-title"><a href="#">热门推荐</a></p>
//                             <div class="sub-cont">
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztxsq/201612/W020200203467870801568_135.jpeg" alt="">
//                                     </a>
//                                     <a href="#">10公斤洗烘一...</a>
//                                     <h1>￥3599.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztxsq/201612/W020200203468717133364_135.jpeg" alt="">
//                                     </a>
//                                     <a href="#">10公斤智能变...</a>
//                                     <h1>￥2399.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztxsq/201612/W020200203469371311299_135.jpeg" alt="">
//                                     </a>
//                                     <a href="#">8公斤全自动变...</a>
//                                     <h1>￥1999.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztxsq/201612/W020200203469943260300_135.jpeg" alt="">
//                                     </a>
//                                     <a href="#">8公斤全自动波...</a>
//                                     <h1>￥1399.00</h1>
//                                 </div>
//                             </div>
//                         </div>`)
// change(".nav-list>li:eq(5)", `<div class="nav-sub-con">
//                             <p class="sub-title"><a href="#">热门推荐</a></p>
//                             <div class="sub-cont">
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztshjd/201907/W020200203403246394130_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">长虹近吸型烟机</a>
//                                     <h1>￥1999.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztshjd/201907/W020200203403680250730_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">60升 储水式速...</a>
//                                     <h1>￥599.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztshjd/201907/W020200203404052407619_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">嵌入式钢化玻...</a>
//                                     <h1>￥369.00</h1>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztshjd/201907/W020200203404607552894_135.jpg" alt="">
//                                     </a>
//                                     <a href="#">67度多功能低...</a>
//                                     <h1>￥279.00</h1>
//                                 </div>
//                             </div>
//                         </div>`)
// change(".nav-list>li:eq(6)", `<div class="nav-sub-con">
//                             <p class="sub-title"><a href="#">热门推荐</a></p>
//                             <div class="sub-cont">
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztfw/201707/W020170727354567218829.png" alt="">
//                                     </a>
//                                     <a href="#" style="margin-left: 20px">产品报修服务</a>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztfw/201707/W020170727355062363774.png" alt="">
//                                     </a>
//                                     <a href="#"  style="margin-left: 20px">安装与迁移服务</a>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztfw/201707/W020170727355825214427.png" alt="">
//                                     </a>
//                                     <a href="#"  style="margin-left: 30px">服务政策</a>
//                                 </div>
//                                 <div class="sub-box">
//                                     <a href="#">
//                                         <img src="https://images.changhong.com/chgw/gwsy/zt/ztfw/201707/W020170727356083208002.png" alt="">
//                                     </a>
//                                     <a href="#"  style="margin-left: 30px">常见问题</a>
//                                 </div>
//                             </div>
//                         </div>`)
