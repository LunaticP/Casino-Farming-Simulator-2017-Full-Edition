function gauge()
{
	var amount;

	this.amount = 0;
	this.showV = function (w, size, maxv, px, py, col)
	{
	    fill(col);
		rect(px, py, w, -((this.amount / maxv) * size));
	};
    this.showH = function (w, size, maxv, px, py, col, bg, pad)
    {
        fill(bg);
        rect(px - pad, py - pad, ((this.amount / maxv) * size) + pad * 2, w + pad * 2);
        fill(col);
        rect(px, py, ((this.amount / maxv) * size), w);
    };
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
