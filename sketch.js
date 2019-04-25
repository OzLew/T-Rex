let bg 
let spriteImg
let spriteData
let cact1
let cact2

let space = 32
let estado = 0 
let salto = 0
let yf = 0
let rexY=152
let bace=152

const parallax = []
const tRex = []
const cactus1 = []
const cactus2 = []

function preload(){
	bg = loadImage('img/scene.png')
	spriteData = loadJSON('data.json')
	spriteImg = loadImage('img/Rex.png')
	cact1 = loadImage('img/cactus1.png')
	cact2 = loadImage('img/cactus2.png')
}

function setup() {
	const animation = []
	createCanvas(windowWidth, windowHeight / 2);

	for(let i = 0; i < 2; i++)
		parallax.push(new Parallaxs(bg, i * width, 0, width, height))

	for(let i = 0; i < 10; i++)
		cactus1.push(new Cac1(cact1, i * width, 147, width, height))

	for(let i = 0; i < 10; i++)
		cactus2.push(new Cac2(cact2, i * width, 144, width, height))

	for(let i = 0, len = spriteData.sprite.length; i < len; i++){
		let d = spriteData.sprite[i]
		let img = spriteImg.get(d.x, d.y, d.s, d.s)
		animation.push(img)
	}

	yf = height * .5
	const n = 4
	for(let i = 0; i < n; i++){
		let p = new Trex(animation, yf, rexY)
		frameRate(30)
		tRex.push(p)
	}
}

function draw() {
	for(let sceneMove of parallax){
		sceneMove.draw()
		sceneMove.move()
	}

	for(let tRexMove of tRex){
		tRexMove.draw()
		tRexMove.move()
		jumps();
	}

	for(let cactu1 of cactus1){
		cactu1.draw()
		cactu1.move()
	}


	for(let cactu2 of cactus2){
		cactu2.draw()
		cactu2.move()
	}

	for(let tRexMove of tRex){
		if (tRexMove.getY() < bace) {
			tRexMove.bajar()
		}
	}
}

function jumps(){
	if(keyIsDown(UP_ARROW)){
		for(let tRexMove of tRex){
			tRexMove.jump()
		}
	}
}

