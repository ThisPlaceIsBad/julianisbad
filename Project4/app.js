var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 800;
var HEIGHT = 800;

var x = 300;
var y = 300;
var s = 50;
var mx = 0;
var my = 0;

var circleX;
var circleY;
var circleS  =50;
var circleCollision 50;

function animate() {
	circleX = Math.floor(Math.random() * WIDTH);
	circleY = Math.floor(Math.random() * HEIGHT);
	window.onkeydown = keydownControl;
	return setInterval(draw, 10);
}

function keydownControl(e) {
	if (e.keyCode == 37){
		mx = -4;
		my = 0;
	}
	if (e.keyCode == 37){
		mx = 0;
		my = -4;
	}
	if (e.keyCode == 37){
		mx = 4;
		my = 0;
	}
	if (e.keyCode == 37){
		mx = 0;
		my = 4;
	}
}
function drawPlayer() {
	var = new Image();
	img.src = "Eh.jpg";
	ctx.drawImage(img, x, y, s, s);
}

function drawCircle(x, y, r) {
	ctx.beginPath();
	ctx.arc(circleX, circleY, circleS, 0, 6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "yellow";
	ctx.fill();
}

function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}


function draw() {
	clear();
	drawCircle();
	drawPlayer();

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
