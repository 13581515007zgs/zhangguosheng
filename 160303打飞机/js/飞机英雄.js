function PlaneHero(){
	// 飞机的图片
	this.planeImg = new Image;
	this.planeImg.src = "img/herofly.png";
	// 飞机的位置x 和 y
	this.planeX = (canvas.width -PLANEWIDTH) / 2;
	this.planeY = canvas.height - PLANEHEIGHT;
	
	// 用来切换飞机图片的状态 一会从0开始累加，每次加1
	 this.statusCutX = 0;
	// 定义一个变量 用来记录飞机移动的方向
	// 规定 0--左，1-右边 2-上 3-下 -1--飞机不动
	this.direction = -1;
	
	// 子弹的信息
	this.bulletInfo = {name:"bullet1",bulletWidth:6,bulletHeight:14};
	
	 
	 // 飞机喷火的动画
	 this.animatePlane = function(){
	 	this.statusCutX ++;
	 	if (this.statusCutX > 1) {
	 		this.statusCutX = 0;
	 	}
	 }
	 
	// 飞机的移动 ,参数用来控制飞机的移动速度
	this.movePlane = function(moveSpeed){
		switch (this.direction){
			case 0:
				this.planeX -= moveSpeed;
				if (this.planeX <= 0) {
					this.planeX = 0;
				}
				break;
			case 1:
				this.planeX += moveSpeed;
				if (this.planeX >= canvas.width - PLANEWIDTH) {
					this.planeX = canvas.width - PLANEWIDTH;
				}
				break;
			case 2:
				this.planeY -= moveSpeed;
				if (this.planeY <= 0) {
					this.planeY = 0;
				}
				break;
			case 3:
				this.planeY += moveSpeed;
				if (this.planeY >= canvas.height - PLANEHEIGHT) {
				this.planeY = canvas.height - PLANEHEIGHT;		
				}
				break;
			
			default:
				break;
		}
	
	this.animatePlane();
	// 重新绘制飞机
	this.drawPlane();
		
	}
	 
	 
	// 绘制飞机的方法
	this.drawPlane = function(){
		context.beginPath();
		context.drawImage(this.planeImg,this.statusCutX * PLANEWIDTH,0,PLANEWIDTH,PLANEHEIGHT,this.planeX,this.planeY,PLANEWIDTH,PLANEHEIGHT);
		context.save();
	}
	
	
}
