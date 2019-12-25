/*
* @Author: admin
* @Date:   2019-12-22 20:16:43
* @Last Modified by:   admin
* @Last Modified time: 2019-12-22 21:32:18
*/
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");
var E = document.getElementById("E");
var F = document.getElementById("F");
var check = document.getElementById("check");
var j;

function AA(){
	var a = document.getElementsByClassName("notice")[0].innerHTML = "请输入3-10位用户名";
}
function ZZ(){
	var a = document.getElementsByClassName("notice")[0].innerHTML = " ";
}
function SS(){
	var a = document.getElementsByClassName("notice")[1].innerHTML = "请输入11位手机号";
}
function XX(){
	var a = document.getElementsByClassName("notice")[1].innerHTML = "  ";
}
function DD(){
	var a = document.getElementsByClassName("notice")[2].innerHTML = "请输入目的地";
}
function CC(){
	var a = document.getElementsByClassName("notice")[2].innerHTML = "  ";
}
function FF(){

}
function VV(){

}
function GG(){
	var a = document.getElementsByClassName("notice")[4].innerHTML = "请输入出行人数";
}
function BB(){
	var a = document.getElementsByClassName("notice")[4].innerHTML = "  ";
}
function HH(){

}
function NN(){
	
}
check.onclick = function(){
	var T = 0;
	if(B.value.length != 11)
	{
		var di2 = document.getElementById("di2");
		di2.innerHTML = "手机号位数不对";
		T = 1;
	}
	if(E.value<=0)
	{
		var di1 = document.getElementById("di5");
		di1.innerHTML = "出行人数不对";
		T = 1;
	}
	if(T==0)
	{
		alert("登录成功");
	}

}