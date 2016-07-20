function EnemyModelClass(x,y,width,height,type,blood,speed,sumStatus){
	// 敌人的坐标信息
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	// 敌人的类型（图片）
	this.img =  new Image;
	this.img.src = "img/" + type + ".png";
	// 敌人的血量
	this.blood = blood;
	// 敌人移动的速度
	this.speed = speed;
	// 用来记录敌人的类型
	this.type = type;
	// 用来敌人是否已经死亡
	this.isDie = false;
	// 用来记录飞机的状态
	this.status = 0;
	// 用来记录飞机总的变化状态的数量
	this.sumStatus = sumStatus;
	
}
// 随机一个 min--max 范围之内的整数
function randNumber(min,max){
	return parseInt(Math.random() * (max - min + 1) + min);
}

function EnemyControllerClass(){
	// 创建保存敌人的数组
	this.enemyArray = [];
	// 创建显示敌人
	// 有待完善（敌人不会随分数的增加而增多）
	this.createAndShowEnemy = function(){
		//1、创建一个敌人
		//2、不能每次都创建一个新的敌人
		var num = randNumber(1,200);
		if (num > 20 && num < 30) {
			// 创建一个敌人，敌人1
			var enmey1 = new EnemyModelClass(randNumber(0,canvas.width - 38),-34,38,34,"enemy1",1,randNumber(2,5),5);
			this.enemyArray.push(enmey1);
		}
		// 敌人2
		if (num == 10) {
			var enmey2 = new EnemyModelClass(randNumber(0,canvas.width - 110),-164,110,164,"enemy2",5,randNumber(1,3),10);
		this.enemyArray.push(enmey2);
		}
		
		// 敌人3
		if (num == 14) {
			var enmey3 = new EnemyModelClass(randNumber(0,canvas.width - 46),-64,46,64,"enemy3",3,randNumber(1,3),6);
			this.enemyArray.push(enmey3);
		}
	
	// 	让敌人动起来
		for (var i = 0; i <  this.enemyArray.length; i++) {
			if (this.enemyArray[i].y > canvas.height) {
				// 移除这个元素
				this.enemyArray.splice(i,1);
				continue;
			}
			// 敌人死亡的时候
			if (this.enemyArray[i].isDie) {
				this.enemyArray[i].status ++;
				if (this.enemyArray[i].status > this.enemyArray[i].sumStatus) {
					// 消失，移除
					this.enemyArray.splice(i,1);
					continue;
				}
			}else{
				// 增加敌人的 y 值，让敌人位置发生变化
		this.enemyArray[i].y += this.enemyArray[i].speed;
			}
			
			
		
		
		// 绘制敌人
		context.beginPath();
		context.drawImage(this.enemyArray[i].img,this.enemyArray[i].status * this.enemyArray[i].width,0,this.enemyArray[i].width,this.enemyArray[i].height,this.enemyArray[i].x,this.enemyArray[i].y,this.enemyArray[i].width,this.enemyArray[i].height);
		context.save();
			
		}
	
		
	}
}
