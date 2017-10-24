var bubble = {
	x: 300,
	y: 200,
}

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(600, 400); 
	bubble1 = new Bubble(200,200, 40);
	bubble2 = new Bubble(400,200, 20);
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	bubble1.move();
	bubble1.show();
	bubble2.move();
	bubble2.show();
}

class Bubble {
	contructor(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;
	}
	
	move(){
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}
	show(){
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, this.r*2);
	}
}

/*move(){
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}
	show(){
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, 24, 24);
	}
	*/
