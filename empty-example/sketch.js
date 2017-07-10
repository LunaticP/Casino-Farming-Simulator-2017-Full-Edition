new p5();

var tab = [];
var suites = [[], [], []];
var elem = [0, 0, 0];

function graph()
{


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

function checkStatus(num)
{
    var out;

    if (num === 0)
        out = 0;
    if (num > 0 && num < 8)
        out = 1;
    if (num > 7)
        out = 2;
    return (out);
}

function analyzeTab()
{
    var rep = 0;
    var len = tab.length - 2;
    var status = checkStatus(tab[len].val);

    while (len > 0 && checkStatus(tab[len - 1].val) === status)
    {
        rep++;
        len--;
    }
    if (suites[status][rep])
        (suites[status][rep])++;
    else
        suites[status][rep] = 1;
}

function setup() {
    createCanvas(1000,1000);
//    frameRate(1);
    j = 0;
}

function draw()
{
    background(255);
	tab[j] = new num();
	tab[j].setRand();
	tab[j].show(100, 100);
	showLast(tab, 5);
	if (j > 0 && checkStatus(tab[j].val) !== checkStatus(tab[j - 1].val))
	    analyzeTab();
	elem[checkStatus(tab[j].val)]++;
	fill(255, 0, 255);
	text(j, 500, 100, 50, 50);
    fill(0,255, 0);
    text((elem[0] / j * 100).toFixed(2), 700, 100, 50, 50);
    fill(255, 0, 0);
    text((elem[1] / j * 100).toFixed(2), 700, 150, 50, 50);
    fill(0);
    text((elem[2] / j * 100).toFixed(2), 700, 200, 50, 50);
	//console.log(suites[0]);
    //console.log(suites[1]);
    //console.log(suites[2]);
    //console.log("---------------------------------");
	j++;
}