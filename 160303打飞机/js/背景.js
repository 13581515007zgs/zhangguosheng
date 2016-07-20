function BackgroundClass(){
	// 背景图片对象
	this.imgOne = new Image;
	this.imgOne.src = "img/background.png";
	this.imgTwo = new Image;
	this.imgTwo.src = "img/background.png";
	
	// 俩张背景的 y 坐标
	this.imgOne_y = -canvas.height;
	this.imgTwo_y = 0;
	
	this.drawBack = function(){
		context.beginPath();
		context.drawImage(this.imgOne,0,this.imgOne_y,canvas.width,canvas.height + 10);
		context.drawImage(this.imgTwo,0,this.imgTwo_y,canvas.width,canvas.height + 10);
		context.save();
	}
	
	
	// 背景滑动
	this.backgroundMove = function(speed){
		this.imgOne_y += speed;
		if (this.imgOne_y >= canvas.height) {
			this.imgOne_y = -canvas.height;
		}
		this.imgTwo_y += speed;
		// 图片滑动底部的时候，移动到最上面
		if (this.imgTwo_y >= canvas.height) {
			this.imgTwo_y = -canvas.height;
		}	
		// 绘制背景
		this.drawBack();
		
	}
	
}
