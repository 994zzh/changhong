var n2 = getCookie("user");
if(n2){
    var str2=`
        <a href="#" style="margin-right:10px">${n2}</a>
        <a href="login.html">退出</a>
    `
    // console.log($(".header-login"))s
    $(".header-login").html(str2); 
}


// console.log(localStorage.getItem("cartList"))
var cartList=JSON.parse(localStorage.getItem('cartList')) || []
if(n2){
    if(cartList.length>0){
        showGoods()
    }else{
        var str1='';
        str1=`
            <h4>您的购物车还没有商品</h4>
        `
        $(".car-con").html(str1)
    }
}else{
    alert('您还没有登录，请登录之后再跳转')
    location.href='login.html'
}
function showGoods(){
    var str2=`
        <div class="car-con-top clear_fix">
            <div class="car-lf clear_fix float_left">
                <div class="car-all-check er">
                    <input type="checkbox" class="quan float_left">
                </div>
                <p class="car-lf-sp float_left">
                    全选<span id="total_num">0</span>种商品
                </p>
            </div>
            <p class="rt-sp float_right">
                <span class="float_left">0</span>种商品已失效
            </p>
        </div>  
    `
    cartList.forEach(item=>{
        str2+=`
            <div class="car-item-lb">
                <div class="car-check-box float_left"><input type="checkbox" name="a1"></div>
                <div class="car-deal-rt float_left">
                    <div class="car-deal-top">
                        <div class="car-opt-bk">
                            <a class="opt-like "></a>
                            <a class="opt-del"></a>
                        </div>
                    </div>
                    <div class="car-deal-sp clear_fix">
                        <a class="car-deal-pc"><img src="${item.URL}" alt=""></a>
                        <div class="car-deal-name">
                            <a class="titName">${item.标题链接}</a>
                        </div>
                        <div class="car-deal-price">
                            <p class="now-price">单价<span class="per-price">${item.progoodstext}</span>元</p>
                        </div>
                        <div class="car-deal-qt">
                            <label>数量</label>
                            <div class="car-quantity-form">
                                <a class="reduceNum float_left">-</a>
                                <input type="text" value="1">
                                <a class="addNum float_right">+</a>
                            </div>
                        </div>
                        <div class="car-item-sta">
                            <span>有货</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    $(".car-con").html(str2);
}

// 加
$(".addNum").click(function(){
    var n = $(this).prev().val();
    n++;
    $(this).prev().val(n);
    calTotal();
})
// 减
$(".reduceNum").click(function(){
    var n = $(this).next().val();
    n--;
    if(n<=1){
        n=1;
    }
    $(this).next().val(n);
    calTotal();
})
// 全选
$(".quan").click(function(){
    var a=0;
    if($(".quan").prop("checked")){
        $("input[name='a1']").each(function(index,item){
            $(item).prop("checked",true);
            a++
        })
    }else{
        $("input[name='a1']").each(function(index,item){
            // console.log(item)
            $(item).prop("checked",false);
        })
    }
    $("#total_num").html(a);
    calTotal();
})
$("input[name='a1']").click(function(){
    var b=0;
    var arr = []
    $("input[name='a1']").each(function(index,item){

        var flg = $(item).prop("checked")
        arr.push(flg)
        if($(item).prop("checked")){
            b++;
        }
    })
    var p = arr.every(function(item){return item})
    $(".quan").prop("checked",p);
    $("#total_num").html(b);
    calTotal();
})
// 删除
$(".opt-del").click(function(){
    // $(this).parents(".car-item-lb").remove();
    // console.log($("#total_num").html())
    var c = $("#total_num").html();
    c--;
    $("#total_num").html(c)
    var titName = $(this).parents(".car-item-lb").find(".titName").html();
    var arr3 = JSON.parse(localStorage.getItem("cartList"));
    console.log(arr3)
    for(var i=0;i<arr3.length;i++){
        if(arr3[i]['标题链接'] == titName){
            arr3.splice(i,1);
            localStorage.setItem("cartList",JSON.stringify(arr3));
            $(this).parents(".car-item-lb").remove();
        }
        if(arr3.length==0){
            var str1='';
            str1=`
                <h4>您的购物车还没有商品</h4>
            `
            $(".car-con").html(str1)
        }
    }
})
// 点击结算
$(".car-pay-btn").click(function(){
    var flag=false;
    $("input[name='a1']").each(function(index,item){
        // console.log(item)
        if($(item).prop("checked")){
            flag=true;
        }
    })
    if(flag){
        var d = $(".sum-price>span").html()
        alert("你已支付"+d+"元")
        $("input[name='a1']").each(function(index,item){
            // console.log(item)
            if($(item).prop("checked")){
                var titName1 = $(this).parents(".car-item-lb").find(".titName").html();
                var arr3 = JSON.parse(localStorage.getItem("cartList"));
                for(var i=0;i<arr3.length;i++){
                    if(arr3[i]['标题链接'] == titName1){
                        arr3.splice(i,1);
                        localStorage.setItem("cartList",JSON.stringify(arr3));
                        $(this).parents(".car-item-lb").remove();
                    }
                    if(arr3.length==0){
                        var str1='';
                        str1=`
                            <h4>您的购物车还没有商品</h4>
                        `
                        $(".car-con").html(str1)
                    }
                }
            }
        })
    }else{
        alert("请至少购买一件商品")
    }
})



function calTotal(){
    var c=0;
    var sum=0;
    $("input[name='a1']").each(function(i,item){
        if($(item).prop("checked")){
            var num1 = $(`input[type='text']:eq(${i})`).val()-0;
            c+=num1;
            var perPrice = $(`.per-price:eq(${i})`).html().split("￥")[1]-0;
            var perTolPrice = num1*perPrice;
            sum+= perTolPrice;
        }
    })
    $(".num-count").html(c);
    $(".sum-price>span").html(sum.toFixed(2))
}   

// 给header做移入移出事件
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