var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var bulletMusic = document.getElementById("bullet_music");

// 判断当前设备类型
if(IsPC()){
	canvas.width = 320;
	canvas.height = 568;
}else{
	canvas.width = document.documentElement.clientWidth || document.body.clientWidth;
	canvas.height = document.documentElement.clientHeight || document.body.clientHeight;
}
// 定义飞机英雄的宽高
var PLANEWIDTH = 66;
var PLANEHEIGHT = 82;
var p = document.getElementById("p")