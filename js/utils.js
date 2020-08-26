//判断一个数是否是质数
function isZhiShu(num){
    for(var i = 2 ; i < num ; i++){
        if(num % i === 0){
            return false
        } else {
            return true
        }
    }
}
// 拆分千位，百位...等
function split(num){
    var arrNum = [] 
    while(num){
        arrNum.push(num % 10)
        num = parseInt(num / 10)
    }
    arrNum.reverse()
    //数组的最后1位就是个位
    return arrNum
}

//两个数的公倍数
function gongBeiShu(a,b){
    var max = a
    var min = b
    if(a < b){
        max = b
        min = a
    }
    for(var i = max ; i > 0 ; i++){
        if(i % max == 0 && i % min == 0){
            return i
        }
    }
}

//两个数的公约数
function gongYueShu(a, b){
    var max = a 
    var min = b
    if(a < b){
        max = b
        min = a
    }
    var gys = 0
    for(var i = min ; i >= 1 ; i--){
        if(min % i === 0 && max % i === 0){
            gys = i
            break
        }
    }
    return gys
}

// 求两个数的随机数字
function random(x,y){
    var max = Math.max(x,y)
    var min = Math.min(x,y)
    var res = Math.floor(Math.random() * (max - min + 1)  +min)
    return res
}

// 时间差
function timeDiff(star,end){
    var n = end.getTime() - star.getTime()
    var day = Math.floor(n / 1000 / 60 / 60 / 24)
    var hours = Math.floor(n / 1000 / 60 / 60 % 24)
    var minutes = Math.floor(n / 1000 / 60 % 60)
    var seconds = Math.floor(n / 1000 % 60)
    var ms = Math.floor(n % 1000)
    var obj = {}
    obj.day = day
    obj.hours = hours
    obj.minutes = minutes
    obj.seconds = seconds
    obj.ms = ms
    return obj
}


// 减速运动函数（有鬼畜）
// 这里的target接收的是一个对象
function move(ele,target,fn = ()=>{}){
    // 这里声明一个对象，用来接收定时器，方便关掉定时器
    let obj = {}
    // 用let是因为，要记录key，形成多个作用域
    for(let key in target){
        obj[key] = setInterval(function(){
            // 获取非行内left属性
            var starLeft = parseInt(getComputedStyle(ele)[key])
            // console.log(starLeft)
            // 每20ms移动差值的10分之一
            var distance = (target[key] - starLeft) / 10
            distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance)

            if(starLeft == target[key]){
                clearTimeout(obj[key])
                delete obj[key]
                let n = 0
                for(var k in obj) n++
                if(n == 0)fn()
            }else{
                ele.style[key] = starLeft + distance + 'px'
            }
            
        },20)
    }
}

// 减速运动函数，没有鬼畜
// 这里的target接收的是一个对象
function moveUp(ele,target,fn = ()=>{}){
    clearTimeout(ele.a)
    // 这里声明一个对象，用来接收定时器，方便关掉定时器
    var obj = {}
    for(let key in target){
        ele.a = setInterval(function(){
            // 获取非行内left属性
            var starLeft = parseInt(getComputedStyle(ele)[key])
            // console.log(starLeft)
            // 每20ms移动差值的10分之一
            var distance = (target[key] - starLeft) / 100
            distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance)

            if(starLeft == target[key]){
                clearTimeout(obj[key])
                delete obj[key]
                let n = 0
                for(var k in obj) n++
                if(n == 0)fn()
            }else{
                ele.style[key] = starLeft + distance + 'px'
            }
            
        },10)
    }
}



// 获取非行内属性
function getStyle(dom,attr){
	//获取指定节点的指定属性
	if(dom.currentStyle){
		return dom.currentStyle[attr]
	}else{
		return getComputedStyle(dom,false)[attr]
	}
}

// 缓冲函数 最终版
function moveJson(dom,json,fn=function(){},judge=false,n=5){
    clearTimeout(dom.timer)
    dom.timer = setInterval(function(){
        var flag = true
        for(var key in json){
            if(key == 'opacity'){
                //初始值透明
                var current = parseInt(getComputedStyle(dom)[key]*100)
                var target = json[key]*100
            
            }else if(key == 'zIndex'){
                var target = json[key]
                dom.style.zIndex = target
            }else{
                var current = parseInt(getComputedStyle(dom)[key])
                var target = json[key]
            }
            //是否匀速
            if(judge){
                var speed = n
            }else{
                var speed = target > current ? Math.ceil((target - current)/10) : Math.floor((target - current)/10)
            }
            //是否是层级
            if(key == 'zIndex'){
                var next = target
            }else{
                var next = current + speed
            }
            if(next == target){
                if(key == 'opacity'){
                    dom.style[key] = target / 100
                    dom.style.filter = 'alpha(opacity=' + target + ')'
                } else if(key == 'zIndex'){
                    dom.style[key] = target
                }else {
                    dom.style[key] = target + 'px'
                }
            } else {
                if(key == 'opacity'){
                    dom.style[key] = next / 100
                    dom.style.filter = 'alpha(opacity=' + next + ')'
                }else{
                    dom.style[key] = next + 'px'
                }
                flag = false
            }
        }
        if(flag){
            clearTimeout(dom.timer)
            fn()
        }
    },20)
}

// 拖拽函数
function tuo(dom){
    var flag = true
    dom.style.position = 'absolute'
    dom.style.cursor = 'pointer'
    dom.onmousedown = function(){
        flag = true
            dom.onmousemove = function(e){
                if(!flag) return
                var e = e || window.event
                var x = e.clientX - dom.offsetWidth / 2
                var y = e.clientY - dom.offsetHeight / 2      

                dom.style.left = x + 'px'
                dom.style.top = y + 'px'
            }
    }
    dom.onmouseup = function(){
        flag = false
    }
}

// 碰撞检测
function crash(dom1,dom2){
    var l1 = dom1.offsetLeft
    var t1 = dom1.offsetTop
    var r1 = dom1.offsetLeft + dom1.offsetWidth
    var b1 = dom1.offsetHeight + dom1.offsetTop

    var l2 = dom2.offsetLeft
    var t2 = dom2.offsetTop
    var r2 = dom2.offsetLeft + dom2.offsetWidth
    var b2 = dom2.offsetTop + dom2.offsetHeight
    // 没有碰撞的条件
    if(r1 < l2 || b1 < t2 || l1 > r2 || t1 > b2){
        return false
    } else {
        return true
    }
}