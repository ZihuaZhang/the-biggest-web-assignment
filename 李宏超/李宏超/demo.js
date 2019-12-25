function getStyle(obj, attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}
function animate(obj,json,callback){
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
            var speed = (json[attr] - now) / 4;
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
gaga[1].children[0].children[0].style.left="10px";
gaga[1].children[2].children[0].style.right="10px";
gaga[1].children[1].style.color="white";
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
        if(i!=1){
            animate(this.children[0].children[0],{left:40,opacity:0});
            animate(this.children[2].children[0],{right:40,opacity:0});
            this.children[1].style.color="black";
        }
        
    }
}