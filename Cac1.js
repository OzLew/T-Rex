class Cac1{
	constructor(img,x,y, w, h){
		this.img = img
		this.x = x + 500
		this.y = y
		this.speed = -10
	}

	draw(){
		image(this.img, this.x, this.y)
	}

	move(){
		this.x += this.speed
		if(this.x <= -this.w)
			this.x = this.w
	}
}