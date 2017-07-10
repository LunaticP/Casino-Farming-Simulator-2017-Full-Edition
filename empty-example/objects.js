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
