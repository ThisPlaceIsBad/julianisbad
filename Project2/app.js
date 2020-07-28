var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();

ctx.moveTo(150, 25);
ctx.lineTo(225, 150);
ctx.lineTo(75, 150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "navy";
ctx.fill();
ctx.beginPath();
ctx.arc(150, 150, 50, 0, 6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();