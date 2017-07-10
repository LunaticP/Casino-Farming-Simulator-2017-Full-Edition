new p5();

function gauge()
{
	var amount;

	this.amount = 0;
	this.show = function (w, size, maxv, px, py)
	{
		fill(255,0,0);
		rect(px - w, py - ((this.amount / maxv) * size),px,py);
	}
}


function num()
{
	var val;
	var col;

	this.setRand = function()
	{
		this.col = {r:0,g:0,b:0};
		this.val = floor(random(0,14.99999));
		if(this.val > 0 && this.val < 8)
			this.col.r = 255;
		else if (this.val == 0)
			this.col.g = 255;
	}
	this.show = function(vx, vy)
	{
	    if (vx && vy)
	    {
            noStroke();
            textAlign(CENTER, CENTER);
            fill(this.col.r, this.col.g, this.col.b);
            rect(vx - 25, vy - 25, 50, 50);
            fill(255);
            textSize(22);
            textStyle(BOLD);
            text(this.val, vx, vy);
        }
        else
            console.log("undefined position");
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

function showLast(tab, size)
{
   for (var len = tab.length; len > tab.length - size && len > 0; len--)
        tab[len - 1].show(400 - (tab.length - len) * 75, 175);
}

function setup() {
	createCanvas(1000,1000);
    background(255);
	frameRate(2);
	j = 0;
}

var tab = [];
var rGraph = new gauge();
/*
var suites = {R:[],B:[],G:[]};

function checkStatus(num)
{
    if (num == 0)
        return (0);
    if (num < 0 && num < 8)
        return (1);
    return (2);
}

function analyzeTab()
{
    var len = tab.length;
    var status = checkStatus(tab[len]);

    while()
    {

        len --;
    }
}
*/
function draw()
{
	background(255);
	tab[j] = new num();
	tab[j].setRand();
	tab[j].show(100, 100);
	showLast(tab, 5);
	if (tab[j].col.r == 255)
		rGraph.amount++;
	rGraph.show(200, 200, tab.length, 400, 400);
//	analyzeTab();
	j++;
//	console.log(tab);
}
