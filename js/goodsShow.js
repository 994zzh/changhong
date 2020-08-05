// 列表商品的详情页
$.getJSON('./jq/kt.json',function(data){
    var urls = location.href;
    var str = urls.split('?')[1].split('=')[1]
    var dt = data[parseInt(str)-1];
    var imgurls = dt.URL1.split("jpg")
    console.log(dt.图片)
    // console.log(typeof(dt.URL1))
    var str1 = `
        <div class="item-left float_left">
            <div id="item-imgBox">
                <img src="${dt.URL}" alt="">
                <div class="big-mirror"></div>
            </div>
            <div class="item-banner">
                <a href="#" class="float_left btn-left"></a>
                <img src="${imgurls[0]}jpg" alt="">
                <img src="${imgurls[1]}jpg" alt="">
                <img src="${imgurls[2]}jpg" alt="">
                <img src="${imgurls[3]}jpg" alt="">
                <img src="${imgurls[4]}jpg" alt="">
                <a href="#" class="float_right btn-right"></a>
            </div>
            <div id="big-pic">
                <img src="${dt.图片}" alt="">
            </div>
        </div>
        <div class="item-right">
            <div class="item-right-name">
                <h2>${dt.标题链接}</h2>
                <a href="#">加入对比</a>
            </div>
            <div class="item-right-price">
                <span>${dt.progoodstext}</span>
            </div>
            <div class="price-where">
                <div>
                    <span class="float_left">配送地址：</span>
                    <div class="address-sel float_left" >
                        <h1>北京市 市辖区 东城区</h1>
                        <div class="address-box">
                            <ul class="select-area">
                                <select name="province">
                                    <option value="请选择省">请选择省</option>
                                </select>
                                <select name="city">
                                    <option value="请选择市">请选择市</option>
                                </select>
                                <select name="area">
                                    <option value="请选择区">请选择区</option>
                                </select>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>
                    <span>服务信息： 由长虹官方发货，并提供售后服务。</span>   
                </p>
            </div>
            <div class="price-num">
                <div class="item-num">
                    <span class="goods-num">商品数量：</span>
                    <div>
                        <a href="#">-</a>
                        <input type="text" value="1" class="float_left clear_border">
                        <a href="#" style="border-left: 1px solid #d4d4d4;">+</a>
                    </div>
                </div>
                <div class="item-buy">
                    <a href="shoppingCar.html" class="nowBuy clear_border" style="background:#F12020;color:#fff">立即购买</a>
                    <a href="#" class="addinCar" >加入购物车</a>
                </div>
                <p>
                    <a href="#" class="kefu">在线客服</a>
                    <a href="#" class="addLove">收藏</a>
                    <a href="#" class="share">分享</a>
                </p>
                <div class="item-links">
                    <a href="#">
                        <img src="./picture/share-sinaminiblog.gif" alt="">
                    </a>
                    <a href="#">
                        <img src="./picture/share-weixin.png" alt="">
                    </a>
                    <a href="#">
                        <img src="./picture/share-qzone.gif" alt="">
                    </a>
                    <a href="#">
                        <img src="./picture/share-douban.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    `
    $(".item").html(str1)
    // 调用放大镜
    var oDiv = document.querySelector(".item-left");
    new mirror(oDiv)

    // 加入购物车
    $(".addinCar").click(function(){
        var cartList=JSON.parse(localStorage.getItem('cartList'))
        var flg = true
        if(cartList){
            cartList.forEach(item=>{
                if(item['标题链接'] == dt['标题链接']){
                    flg = false
                }
            })
            if(flg){
                cartList.push(dt);
                localStorage.setItem("cartList",JSON.stringify(cartList));

            }
        }else{
            var arr = []
            arr.push(dt)
            arr = JSON.stringify(arr);
            localStorage.setItem("cartList",arr)
        }
    })



    // 首页导航

    // 省市区三级联动
    $(".address-sel>h1").mouseover(function(){
        $(".address-box").show()
    })
    $(".select-area").show()
    console.log($(".select-area"))

    $.getJSON('./jq/sh.json',function(data){
        console.log(data)
        // 将省份添加到下拉列表中
        for(var i=0;i<data.length;i++){
            $("[name='province']")[0].add(new Option(data[i].name),null);
        }
        var sheng;
        var cheng;
        var area;
        $("[name='province']").change(function(){
            $("[name='city']")[0].options.length=1;
            sheng = $(this)[0].options[$(this)[0].selectedIndex].value;
            // console.log(sheng)  //获取当前的省份
            // $(".address-sel>h1").html(sheng+"市")
            for(var i=0;i<data.length;i++){
                if(data[i].name == sheng){
                    for(let j=0;j<data[i].city.length;j++){
                        // console.log(data[i].city[j].name)
                        var city1 = data[i].city[j].name;
                        $("[name='city']")[0].add(new Option(city1,city1),null);
                        $(".address-sel>h1").html(sheng+"省  ")
                    }
                }
            }
        })
        $("[name='city']").change(function(){
            $("[name='area']")[0].options.length=1;
            cheng = $(this)[0].options[$(this)[0].selectedIndex].value;
            for(var i=0;i<data.length;i++){
                if(data[i].name == sheng){
                    for(let j=0;j<data[i].city.length;j++){
                        if(data[i].city[j].name == cheng){
                            for(var k=0;k<data[i].city[j].area.length;k++){
                                // console.log(data[i].city[j].area[k])
                                var city2 = data[i].city[j].area[k];
                                $("[name='area']")[0].add(new Option(city2,city2),null);
                                $(".address-sel>h1").html(sheng+"省  "+cheng+"市  ")
                            }
                        }
                    }
                }
            }
        })
        $("[name='area']").change(function(){
            area = $("[name='area']")[0].options[$("[name='area']")[0].selectedIndex].value;
            // console.log(sheng,cheng,area)
            $(".address-sel>h1").html(sheng+"省  "+cheng+"市  "+area);
            $(".address-box").hide();
        })
    })
})


// 放大镜
function mirror(ele){
    this.ele = ele; // item-left的盒子
    this.box = this.ele.querySelector("#item-imgBox");
    this.mark = this.ele.querySelector(".big-mirror");
    this.rightImg = this.ele.querySelector("#big-pic");
    this.img1 = this.rightImg.querySelector("img");
    console.log(this.img1)
    this.imgsBox = this.ele.querySelector(".item-banner");
    this.imgs = this.imgsBox.querySelectorAll("img");
    this.init()
    // console.error(this) //指向mirror
}
mirror.prototype.init = function(){
    this.addEvent();
    this.bindClick();
}
mirror.prototype.addEvent = function(){
    // console.log(this);//指向mirror
    this.box.onmouseover = (e) =>{
        var e = e || window.event;
        // console.log(this); //事件绑定函数时指向box,箭头函数时指向mirror
        this.mark.style.display = "block";
        this.rightImg.style.display = "block";
        this.move(e);
    }
    this.box.onmouseout = (e) =>{
        var e = e || window.event;
        this.mark.style.display = "none";
        this.rightImg.style.display = "none";
    }
    this.box.onmousemove = (e) =>{
        var e = e || window.event;
        this.move(e);
    }
}
mirror.prototype.move = function(e){
    var left = e.clientX-this.ele.offsetLeft-this.mark.offsetWidth/2;
    var top = e.pageY-this.ele.offsetTop-this.mark.offsetHeight/2;
    var minX=0,minY=0;
    var maxX=this.box.offsetWidth-this.mark.offsetWidth;
    var maxY=this.box.offsetHeight-this.mark.offsetHeight;
    if(left<=minX){
        left=minX;
    }else if(left>maxX){
        left=maxX;
    }
    this.mark.style.left = left + "px";
    if(top<=minY){
        top=minY;
    }else if(top>=maxY){
        top=maxY;
    }
    this.mark.style.top = top + "px";
    this.img1.style.left = -2*left + "px";
    this.img1.style.top = -2*top + "px";
}
mirror.prototype.bindClick = function(){
    for(let i=0;i<this.imgs.length;i++){
        this.imgs[i].onmouseover = () =>{
            for(let j=0;j<this.imgs.length;j++){
                this.imgs[j].style.border="none";
            }
            this.imgs[i].style.border="1px solid #ED3C42";
            var src1 = this.imgs[i].getAttribute("src");
            var img2 = this.box.querySelector("img");
            this.img1.setAttribute("src",src1);
            img2.setAttribute("src",src1);
        }
    }
}


// 点击首页
var oMenu = document.querySelector(".nav-menu");
var oH3 = oMenu.querySelectorAll("h3");
console.log(oH3)
var a=0;
function menuShow(){
    a++;
    if(a%2!==0){
        $(".nav-menu").slideDown();
    }else{
        $(".nav-menu").slideUp();
    }
}
var oLis = document.querySelectorAll(".nav-menu li");
for(var i=0;i<oLis.length;i++){
    oLis[i].onmouseover=function(){
        for(var j=0;j<oLis.length;j++){
            oLis[j].style.background="#fff";
            oH3[j].style.display="none";
        }
        this.style.background="#F12020";
        this.lastElementChild.style.display="block";
    }
    oLis[i].onmouseout=function(){
        this.lastElementChild.style.display="none";
    }
}

// 我的长虹，长虹有品，滑过显示效果
var oComment = document.querySelectorAll(".header-CHwidth .Ch-inner");
for(var i=0;i<oComment.length;i++){
    oComment[i].onmouseover=function(){
        for(var j=0;j<oComment.length;j++){
            oComment[j].nextElementSibling.style.display="none";
        }
        this.nextElementSibling.style.display="block";
    }
    oComment[i].onmouseout=function(){
        this.nextElementSibling.style.display="none";
    }
} 


// 技术特征|技术参数|客户评价|服务|配件|评测  切换效果
var oTab = document.getElementsByClassName("tab")[0];
var oLinks = oTab.querySelectorAll("a");
var oCon = document.getElementsByClassName("con")[0];
// console.log(oLinks);
var oCons = oCon.querySelectorAll("li");
oCons[0].style.display = "block";
for(let i=0;i<oLinks.length;i++){
    oLinks[i].onclick = function(){
        for(var j=0;j<oLinks.length;j++){
            oLinks[j].className = "";
        }
        this.className = "tab-sel";
        for(var k=0;k<oCons.length;k++){
            oCons[k].style.display = "none";
        }
        oCons[i].style.display = "block";
    }
}


