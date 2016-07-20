function HandleClass(){
	
//	// 判断子弹是否打到敌人
	this.bulletFireEnemy = function(bulletController,enemyController){
	// 拿出装载子弹的数组
		bulletController.bulletArray;
	// 拿出装载敌人的数组
		enemyController.enemyArray;
	
		for (var i = 0;i < bulletController.bulletArray.length;i++) {
			for (var j = 0; j < enemyController.enemyArray.length;j ++) {
			// 判断是否发生了碰撞
	var bulletX = bulletController.bulletArray[i].x;
	var bulletY = bulletController.bulletArray[i].y;
	var bulletWidth = bulletController.bulletArray[i].width;
	var bulletHeight = bulletController.bulletArray[i].height;

var enemyX = enemyController.enemyArray[j].x;
var enemyY = enemyController.enemyArray[j].y;
var enemyWidth = enemyController.enemyArray[j].width;
var enemyHeight = enemyController.enemyArray[j].height;
	if (bulletX < (enemyX + enemyWidth) && bulletY < (enemyY + enemyHeight) && (bulletX + bulletWidth) > enemyX && (bulletY + bulletHeight) > enemyY) {
	
	// 移除子弹
	bulletController.bulletArray.splice(i,1);
		// 碰撞了
		//1、敌人血量减1
		enemyController.enemyArray[j].blood -= 1;
		// 血量小于0以后
		if (enemyController.enemyArray[j].blood  <= 0) {
			// 发出响声
			//  拿到对应 auido 标签的 id 值
				var enemyAudio = enemyController.enemyArray[j].type + "_music";
			// 播放音乐
				document.getElementById(enemyAudio).play();
				// 消失
				enemyController.enemyArray.splice(j,1);
			enemyController.enemyArray[j].isDie = true;
			}
		
		}


				
		}
			
			
}

	
	
}
	
	
	// 操作飞机的方法
	this.handlePlane = function(aPlane){
//		
//		canvas.addEventListener("touchstart",function(event){
//			var ev = event || window.event;
//			// 取出手指的坐标(相对于 canvas 画布的坐标)
//			var x = 	ev.touches[0].clientX - this.offsetLeft;
//			var y = ev.touches[0].clientY - this.offsetTop;	
//			var disX = x - aPlane.planeX;
//			var disY = y - aPlane.planeY;
//			// 必须点到飞机的时候才可以拖拽
//			if (x>aPlane.planeX && x < (aPlane.planeX + PLANEWIDTH) && y > aPlane.planeY && y < (aPlane.planeY + PLANEHEIGHT)) {
//				document.addEventListener("touchmove",handleMoveFun,false);
//			}
//		// 手指离开的时候 移除事件
//		document.addEventListener("touchend",function(){
//			document.removeEventListener("touchmove",handleMoveFun,false);
//		},false);
//		
//			function handleMoveFun(event){
//				var ev = event || window.event;
//				//确定飞机的新坐标
//				var newX = ev.touches[0].clientX - disX;
//				var newY = ev.touches[0].clientY - disY;
//				if (newX <= 0) {
//					newX = 0;
//				}
//				if (newX >= canvas.width - PLANEWIDTH) {
//					newX = canvas.width - PLANEWIDTH;
//				}
//				if (newY<= 0) {
//					newY = 0;
//				}
//				if (newY >= canvas.height - PLANEHEIGHT) {
//					newY = canvas.height - PLANEHEIGHT;
//				}
//				aPlane.planeX = newX;
//				aPlane.planeY = newY;
//			}
//			
//		},false);
	
		
		
		
		document.onkeydown = function(event){
			var ev = event || window.event;
			// 规定 0--左，1-右边 2-上 3-下 -1--飞机不动
			switch (ev.keyCode){
				case 37: // 左
					aPlane.direction = 0;
					break;
				case 38: // 上
				aPlane.direction = 2;
					break;
				case 39: // 右
					aPlane.direction = 1;
					break;
				case 40: // 下
				aPlane.direction = 3;
					break;
				default:
					break;
			}
		aPlane.movePlane(5);
		}
//		document.onkeyup = function(event){
//			var ev = event || window.event;
//			if (ev.keyCode == 37 || ev.keyCode == 38 || ev.keyCode == 39 || ev.keyCode == 40) {
//				aPlane.direction = -1;
//			}
//		}
	}
}
