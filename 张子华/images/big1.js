function getStyle(obj, attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}
function animate(obj,json,t,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var isStop = true;
        for(var attr in json){
            var now = 0;
            if(attr == 'opacity'){
                now = parseInt(getStyle(obj,attr)*100);
            }else{
                now = parseInt(getStyle(obj,attr));
            }
            var speed = (json[attr] - now) / t;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            var cur = now + speed;
            if(attr == 'opacity'){
                obj.style[attr] = cur / 100;
            }else{
                obj.style[attr] = cur + 'px';
            }
            if(json[attr] !== cur){
                isStop = false;
            }
        }
        if(isStop){
            clearInterval(obj.timer);
            callback&&callback();
        }
    }, 30)
}
var gaga = document.getElementsByClassName("gaga");
gaga[0].children[0].children[0].style.left="10px";
gaga[0].children[2].children[0].style.right="10px";
gaga[0].children[1].style.color="white";
for(var i =0 ;i<gaga.length;i++){
    gaga[i].onmouseover=function(){
        this.children[0].children[0].style.opacity="1";
        this.children[2].children[0].style.opacity="1";
        animate(this.children[0].children[0],{left:10},4);
        animate(this.children[2].children[0],{right:10},4);
        this.children[1].style.color="white";
    }
}
for(var i =1 ;i<gaga.length;i++){
    gaga[i].onmouseout=function(){
        animate(this.children[0].children[0],{left:40,opacity:0},4);
        animate(this.children[2].children[0],{right:40,opacity:0},4);
        this.children[1].style.color="black";
    }
}



function getStyle(obj, attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}
function animateother(obj,json,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var isStop = true;
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        right.onclick = function(e){
            e.preventDefault();
        }
        left.onclick = function(e){
            e.preventDefault();
        }
        for(var attr in json){
            var now = 0;
            if(attr == 'opacity'){
                now = parseInt(getStyle(obj,attr)*100);
            }else{
                now = parseInt(getStyle(obj,attr));
            }
            var speed = (json[attr] - now) / 8;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            var cur = now + speed;
            if(attr == 'opacity'){
                obj.style[attr] = cur / 100;
            }else{
                obj.style[attr] = cur + 'px';
            }
            if(json[attr] !== cur){
                isStop = false;
            }
        }
        if(isStop){
            clearInterval(obj.timer);
            callback&&callback();
            left.setAttribute("onclick","nextleft()");
            right.setAttribute("onclick","nextright()");
        }	
    }, 30)
}   
var slider = document.getElementsByClassName("slider");
for(i=0;i<slider.length;i++){
    slider[i].setAttribute("style","left:"+(i-1)*1400+"px;")
}

var slide = document.getElementsByClassName("slide")[0];
var index = 0;
var timer = window.setInterval(function(){
    nextright()
},3000);
var left = document.getElementById("left");
var right = document.getElementById("right");
function nextright(){
    index++;
    change();
    animateother(slide,{left:(-1400)*index},function(){
        if(index==3){
            slide.style.left="0px";
            index=0;
        }
    });   
}
right.onclick=nextright;

function nextleft(){
    index--;
    change();
    animateother(slide,{left:(-1400)*index},function(){
        if(index==-1){
            slide.style.left="-2800px";
            index=2;
        }
    });   
}
left.onclick=nextleft;

var big = document.getElementsByClassName("big")[0];
big.onmouseover=function(){
    window.clearInterval(timer);
    animateother(left,{opacity:50});
    animateother(right,{opacity:50});
}
big.onmouseout = function(){
    timer = window.setInterval(function(){
        nextright();
    },3000);
    animateother(left,{opacity:0});
    animateother(right,{opacity:0});
}

var image = document.getElementsByClassName("point");
for(var i= 0 ;i<image.length;i++){
    image[i].idx=i;
    image[i].onclick=function(){
        var t =document.getElementById("ha");
        t.removeAttribute("id");
        this.setAttribute("id","ha");
        index = this.idx;
        animateother(slide,{left:-1400*this.idx});
    }
}
function change(){
    var t =document.getElementById("ha");
    t.removeAttribute("id");
    image[(index+3)%3].setAttribute("id","ha");
}



var more = document.getElementsByClassName("more");
for(var i=0;i<more.length;i++){
    more[i].onmouseover=function(){
        animate(this,{marginLeft:20},4);
        this.style.backgroundColor="rgb(63, 155, 127)";
    }
}
for(var i=0;i<more.length;i++){
    more[i].onmouseout=function(){
        animate(this,{marginLeft:0},4);
        this.style.backgroundColor="rgb(62, 158, 196)";
    }
}

var psycho = document.getElementsByClassName("psycho");
for(var i =0 ;i<psycho.length;i++){
    psycho[i].onmouseover=function(){
        animate(this.children[1],{top:-20,opacity:100},8);
        animate(this.children[2],{bottom:-20,opacity:100},8);
    }
}
for(var i =0 ;i<psycho.length;i++){
    psycho[i].onmouseout=function(){
        animate(this.children[1],{top:-100,opacity:0},4);
        animate(this.children[2],{bottom:-100,opacity:0},4);
    }
}

var mo = document.getElementsByClassName("mo");
for(var i =0 ;i<mo.length;i++){
    mo[i].onmouseover=function(){
       
        animate(this.children[0],{left:10},4);
        animate(this.children[1],{opacity:100},4);
    
    }
}
for(var i =0 ;i<mo.length;i++){
    mo[i].onmouseout=function(){
        animate(this.children[0],{left:25},4);
        animate(this.children[1],{opacity:0},4);
    }
}

var tu =document.getElementsByClassName("tu");
for(var i =0 ;i<tu.length;i++){
    tu[i].onmouseover=function(){
       
        animate(this,{height:250,width:300,right:-20,top:-20},3);
    }
}
for(var i =0 ;i<tu.length;i++){
    tu[i].onmouseout=function(){
        animate(this,{height:200,width:250,right:0,top:0},3);
    }
}

var travel =document.getElementsByClassName("travel");
for(var i =0 ;i<travel.length;i++){
    travel[i].onmouseover=function(){
        this.children[1].children[0].style.color=" rgb(62, 158, 196)";
    }
}
for(var i =0 ;i<travel.length;i++){
    travel[i].onmouseout=function(){
        this.children[1].children[0].style.color="black";
    }
}
var free = document.getElementsByClassName("imag")[0];
free.onmouseover=function(){
    animate(travel[0],{left:0},10);
    setTimeout(function(){
        animate(travel[1],{left:0},10);
    },250);
    setTimeout(function(){
        animate(travel[2],{left:0},10);
    },500);
}

var shining1 = document.getElementsByClassName("shining1");
var shining2 = document.getElementsByClassName("shining2");
var shining3 = document.getElementsByClassName("shining3");
var ind = 0;
setInterval(function(){
    if(ind==0){
        animate(shining1[0],{opacity:0},5);
        animate(shining1[1],{opacity:0},15);
        animate(shining1[2],{opacity:0},25);
        animate(shining1[3],{opacity:0},35);
        animate(shining1[4],{opacity:0},45);
        ind=(ind+1)%6;
    }
    else if(ind==1){
        animate(shining2[0],{opacity:100},10);
        animate(shining2[1],{opacity:100},15);
        animate(shining2[2],{opacity:100},20);
        animate(shining2[3],{opacity:100},25);
        animate(shining2[4],{opacity:100},30);
        ind=(ind+1)%6;
    }
    else if(ind==2){
        animate(shining2[0],{opacity:0},5);
        animate(shining2[1],{opacity:0},15);
        animate(shining2[2],{opacity:0},25);
        animate(shining2[3],{opacity:0},35);
        animate(shining2[4],{opacity:0},45);
        ind=(ind+1)%6;
    }
    else if(ind==3){
        animate(shining3[0],{opacity:100},10);
        animate(shining3[1],{opacity:100},15);
        animate(shining3[2],{opacity:100},20);
        animate(shining3[3],{opacity:100},25);
        animate(shining3[4],{opacity:100},30);
        ind=(ind+1)%6;
    }
    else if(ind==4){
        animate(shining3[0],{opacity:0},5);
        animate(shining3[1],{opacity:0},15);
        animate(shining3[2],{opacity:0},25);
        animate(shining3[3],{opacity:0},35);
        animate(shining3[4],{opacity:0},45);
        ind = (ind+1)%6;
    }
    else if(ind==5){
        animate(shining1[0],{opacity:100},10);
        animate(shining1[1],{opacity:100},15);
        animate(shining1[2],{opacity:100},20);
        animate(shining1[3],{opacity:100},25);
        animate(shining1[4],{opacity:100},30);
        ind = (ind+1)%6;
    }
},2200)

var route1 = document.getElementsByClassName("route1")[0];
route1.onmouseover=function(){
    animate(this.children[3],{left:0},10);
}
route1.onmouseout=function(){
    animate(this.children[3],{left:-500},5);
}
var route2 = document.getElementsByClassName("route2")[0];
route2.onmouseover=function(){
    animate(this.children[3],{left:0},10);
}
route2.onmouseout=function(){
    animate(this.children[3],{left:-500},5);
}
var route3 = document.getElementsByClassName("route3")[0];
route3.onmouseover=function(){
    animate(this.children[3],{left:0},10);
}
route3.onmouseout=function(){
    animate(this.children[3],{left:-500},5);
}
