var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

var img = new Image();
img.src= "Eh.jpg";
img.onload = function() {
	ctx2.drawImage(img, 200, 200, 180, 180);
};

var WIDTH = 800;
var HEIGHT = 800;

var x;
var y;
var mx;
var my;


function animate() {
	x = 300;
	y = 300;
	mx = 3;
	my = 5;
	return setInterval(draw, 10);
}

function circle(x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fill();
}

function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}


function draw() {
	clear();
	circle(x, y, 25);

	if (x + mx < 0 || x + mx> WIDTH) {
		mx = -mx;
	}

	if (y + mx < 0 || y + my> WIDTH) {
		my = -my;
	}

	x+= mx;
	y += my;
}
animate();
