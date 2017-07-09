new p5();

function graph()
{


}

function num()
{
	var val;
	var pos;
	var col;

	this.pos = {x:100,y:100};
	this.setRand = function()
	{
		this.col = {r:0,g:0,b:0};
		this.val = floor(random(0,15.99999));
		if(this.val > 0 && this.val < 8)
			this.col.r = 255;
		else if (this.val == 0)
			this.col.g = 255;
	}
	this.show = function()
	{
	    noStroke();
		textAlign(CENTER,CENTER);
		fill(this.col.r, this.col.g, this.col.b);
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
	frameRate(3);
	j = 0;
}

var v1 = new num();
var tab = [];

function draw()
{
	background(255);
	v1.setRand();
	tab[j] = v1.val;
	j++;
	v1.show();
	console.log(tab);
}
