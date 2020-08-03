function mirror(ele){
    this.ele = ele; // item-left的盒子
    this.box = this.ele.querySelector("#item-imgBox");
    this.mark = this.ele.querySelector(".big-mirror");
    this.rightImg = this.ele.querySelector("#big-pic");
    this.img1 = this.rightImg.querySelector("img");
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