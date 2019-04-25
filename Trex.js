class Trex{
	constructor(animation, x, y){
		this.animation = animation 
		this.x = x
		this.y = y
		this.index = 0
		this.salto = false
	}

	draw(){
		image(this.animation[floor(this.index) % 6], this.x, this.y)
	}

	move(){
		this.index++;
	}

	getY(){
		return this.y;
	}

	bajar(){
		this.y++
		//this.salto=false
	}
	
	jump(){
		if(this.salto==false){
			for(var i = 0; i < 22; i += 2){
				this.y-=i;
			}
			this.salto=true
		}else if(this.y<=152){
			this.y++
		}
		if(this.y==152){
			this.salto=false
		}
	}
}