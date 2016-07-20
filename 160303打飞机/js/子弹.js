// 这个是子弹的模型类，包含了每个子弹的基本信息
function BulletModelClass(x,y,width,height,type){
	// 特征属性
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	// 子弹的图片
	this.typeImg =  new Image;
	this.typeImg.src = "img/" + type + ".png";
	
}
// 控制子弹的行为，包括移动等
function BulletControllerClass(){
	// 定义装载子弹的数组
	this.bulletArray = [];
	// 用来控制子弹的产生速度
	this.count = 0;
	
	// 子弹移动起来，这个方法需要在定时器里面去调用
	this.moveBullet = function(aPlane){	
		this.count ++;
		if (this.count % 7 == 0 ) {
			// 第一种子弹的大小为  6 * 14
		var aBullet = new BulletModelClass(aPlane.planeX + PLANEWIDTH / 2 - aPlane.bulletInfo.bulletWidth / 2, aPlane.planeY - 5,aPlane.bulletInfo.bulletWidth,aPlane.bulletInfo.bulletHeight,aPlane.bulletInfo.name);
		// 把子弹加入到数组里面
		this.bulletArray.push(aBullet);
		
		// 播放子弹的音乐
		bulletMusic.play();
		
		}
		
		if (this.count >= 49) {
			this.count = 0;
		}
		
			
		// 子弹动起来
		for (var i = 0;i < this.bulletArray.length;i++) {
			// 判断，当前子弹是否有出界的
			if (this.bulletArray[i].y < 0) {
				// 从数组移除这个子弹
				this.bulletArray.splice(i,1);
				continue;
			}
			
			// 减小子弹的 y 值，让子弹往上移动
			this.bulletArray[i].y -= 10;
			// 绘制子弹
			context.beginPath();
		context.drawImage(this.bulletArray[i].typeImg,this.bulletArray[i].x,this.bulletArray[i].y);
			context.save();
			
		}
		
	}
	
}
