new p5();

function graph()
{


}

function num()
{
	var val;
	var pos;
	this.pos = {x:10,y:10};
	this.setRand = function()
	{
		this.val = floor(random(0,15.99999));
	}
	this.show = function()
	{
		noStroke();
		textAlign(CENTER,CENTER);
		fill(255, 0, 0);
		ellipse(this.pos.x, this.pos.y, 50, 50);
		fill(255);
		textSize(20);
		textStyle(BOLD);
		text(this.val,this.pos.x,this.pos.y);
	}
}
/*
function particle() {
	this.posx = mouseX;
	this.posy = mouseY;
	this.size = random(2,4);
	this.velx = random(-1,1);
	this.vely = random(-1,1);
	this.lifetime = random(0,maxpart);

	this.refresh = function()
	{
		this.posx += this.velx;
		this.posy += this.vely;
		this.lifetime--;
		if(this.posx > wid || this.posx < 0)
			this.velx *= -1;
		if(this.posy > hei || this.posy < 0)
			this.vely *= -1;
	}
	this.show = function()
	{
		if(this.lifetime > 0)
		{
			ellipse(this.posx, this.posy, this.size, this.size);
		}
	}
}*/


function setup() {
	createCanvas(500,500);
}

var v1 = new num();

function draw() {
	background(255);
		v1.setRand();
		v1.show();
		v1.pos.x++;
		v1.pos.y++;
}
