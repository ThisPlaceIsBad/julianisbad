var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.moveTo(5,5);
ctx.lineTo(125,125);

ctx.moveTo(100,100);
ctx.lineTo(200,200);

ctx.moveTo(50,50);
ctx.lineTo(700,600);

ctx.strokeStyle = "red";
ctx.lineWidth = 6;
ctx.stroke();

ctx.fillStyle = "green";
ctx.fillRect(100, 100, 150, 100);

ctx.strokeStyle = "blue";
ctx.strokeRect(150, 150, 75, 150);