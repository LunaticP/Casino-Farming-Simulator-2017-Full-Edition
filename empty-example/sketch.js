new p5();

var tab = [];
var suites = [[], [], []];
var elem = [0, 0, 0];
var gGraph = new gauge();
var rGraph = new gauge();
var bGraph = new gauge();


function circleGraph(table, rad, col, posx, posy)
{
    var len = 0;

    noFill();
    stroke(col);
    strokeWeight(2);
    while (len < table.length)
    {
        arc(posx, posy, rad - (len * (rad / table.length)), rad - (len * (rad / table.length)), -HALF_PI, (table[len] / table[0]) * TWO_PI);
        len++;
    }

}

function showLast(tab, size)
{
   for (var len = tab.length; len > tab.length - size && len > 0; len--)
        tab[len - 1].show(400 - (tab.length - len) * 75, 175);
}

function setup() {
	createCanvas(windowWidth,windowHeight);
    background(255);
	//frameRate(30);
	j = 0;
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

function draw()
{
	background(100);
	tab[j] = new num();
	tab[j].setRand();
	tab[j].show(100, 100);
	showLast(tab, 5);
	if (j > 0 && checkStatus(tab[j].val) !== checkStatus(tab[j - 1].val))
	    analyzeTab();
	elem[checkStatus(tab[j].val)]++;
	fill(255);
	text(j, 500, 100, 50, 50);
    gGraph.amount = elem[0];
    rGraph.amount = elem[1];
    bGraph.amount = elem[2];
    gGraph.showH(45, 1500, tab.length, 685, 87, color(0, 255, 0), 200, 2);
    rGraph.showH(45, 1500, tab.length, 685, 137, color(255, 0, 0), 200, 2);
    bGraph.showH(45, 1500, tab.length, 685, 187, color(0), 200, 2);
    textAlign(LEFT, TOP);
    fill(255);
    text((elem[0] / j * 100).toFixed(2), 700, 100, 50, 50);
    text((elem[1] / j * 100).toFixed(2), 700, 150, 50, 50);
    text((elem[2] / j * 100).toFixed(2), 700, 200, 50, 50);
    gGraph.amount = elem[0];
    rGraph.amount = (elem[1] * (15 / 7)) / 15;
    bGraph.amount = (elem[2] * (15 / 7)) / 15;
    gGraph.showV(50, 1500, tab.length, 100, 600, color(0, 255, 0));
    rGraph.showV(50, 1500, tab.length, 155, 600, color(255, 0, 0));
    bGraph.showV(50, 1500, tab.length, 210, 600, color(0));
    circleGraph(suites[0], 100, color(0, 255, 0), 700, 700);
    circleGraph(suites[1], 100, color(255, 0, 0), 900, 700);
    circleGraph(suites[2], 100, color(0), 1100, 700);
	j++;
}
