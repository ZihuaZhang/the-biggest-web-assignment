/*
* @Author: admin
* @Date:   2019-12-19 21:10:51
* @Last Modified by:   admin
* @Last Modified time: 2019-12-24 19:40:01
*/
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj,null)[attr];
}
function animate(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var bool=true;
        for(var k in json){
            var leader;
            if (k=='opacity') {
                if (getStyle(obj,k)==undefined) {
                    leader=100;
                }else {
                    leader=parseInt(getStyle(obj,k)*100);
                }
            }else {
                leader=parseInt(getStyle(obj,k)) || 0;
            }
            var step=(json[k]-leader)/10;
            step=step>0?Math.ceil(step):Math.floor(step);
            leader=leader+step;
            if(k=='zIndex'){
                obj.style[k]=json[k];
            }else if(k=='opacity'){
                obj.style[k]=leader/100;
                obj.style.filter='alpha(opacity='+leader+')';
            }else {
                obj.style[k]=leader+'px';
            }
            if(json[k]!=leader){
                bool=false;
            }
        }
        if(bool){
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    },10);
}
var gaga = document.getElementsByClassName("gaga");
for(var i =0 ;i<gaga.length;i++){
    gaga[i].onmouseover=function(){
        this.children[0].children[0].style.opacity="1";
        this.children[2].children[0].style.opacity="1";
        animate(this.children[0].children[0],{left:10});
        animate(this.children[2].children[0],{right:10});
        this.children[1].style.color="white";
    }
}
for(var i =0 ;i<gaga.length;i++){
    gaga[i].onmouseout=function(){
        animate(this.children[0].children[0],{left:40,opacity:0});
        animate(this.children[2].children[0],{right:40,opacity:0});
        this.children[1].style.color="black";
    }
}
window.onload=function(){
    var imgArr=[
        {"path":"imgs/风景/u=1019449462,852242043&fm=26&gp=0.jpg"},
        {"path":"imgs/风景/u=1025470277,2153604872&fm=26&gp=0.jpg"},
        {"path":"imgs/风景/u=1167668194,1742700524&fm=15&gp=0.jpg"},
        {"path":"imgs/风景/u=119768606,2994477944&fm=26&gp=0.jpg"},
        {"path":"imgs/风景/u=1290470765,3475430246&fm=26&gp=0.jpg"},
        {"path":"imgs/风景/u=1397621751,3685171559&fm=26&gp=0.jpg"},
        {"path":"imgs/风景/u=1590781638,2831777976&fm=11&gp=0.jpg"}
    ];
    var size=[
        {"top":60,"left":0,"width":400,"height":240,"zIndex":1,"opacity":0},
        {"top":60,"left":0,"width":400,"height":240,"zIndex":2,"opacity":40},
        {"top":30,"left":150,"width":500,"height":300,"zIndex":3,"opacity":70},
        {"top":0,"left":300,"width":600,"height":360,"zIndex":4,"opacity":100},
        {"top":30,"left":550,"width":500,"height":300,"zIndex":3,"opacity":70},
        {"top":60,"left":800,"width":400,"height":240,"zIndex":2,"opacity":40},
        {"top":60,"left":800,"width":400,"height":240,"zIndex":1,"opacity":0}
    ];
    var imgSum=imgArr.length;
    var wrap=document.getElementById('wrap');
    var cont=wrap.firstElementChild || wrap.firstChild;
    var falg=true;
    var speed=3000;
    wrap.onmouseover=function(){
        for (var i=0;i<btnArr.length;i++) {
            btnArr[i].style.display='block';
        }
        clearInterval(wrap.timer);
    }
    wrap.onmouseout=function(){
        for (var i=0;i<btnArr.length;i++) {
            btnArr[i].style.display='none';
        }
        wrap.timer=setInterval(function(){
             move(true);
         },speed);
    }
    for (var i=0;i<imgSum;i++) {
        var lis=document.createElement('li');             
        lis.style.backgroundImage='url('+imgArr[i].path+')';
        cont.appendChild(lis);
    }
    var liArr=cont.children;
    move();
    wrap.timer=setInterval(function(){
        move(true);
    },speed);
    btnArr[1].onclick=function(){
        if (falg) {
            move(true);
        }
    }
    btnArr[0].onclick=function(){
        if (falg) {
            move(false);
        }
    }
    function move(bool){
        if(bool!=undefined){
            if(bool){
                size.unshift(size.pop());
            }else {
                size.push(size.shift());
            }
        }
        for (var i=0;i<liArr.length;i++) {
            animate(liArr[i],size[i],function(){
                falg=true;
            });
        }
    }
}