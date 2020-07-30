var game = new Phaser.Gmae(900, 600, Phaser.AUTO, '',{
	preloaf:preload,
	create:create,
	update:update
});

var score = 0;
var life = 3;

function preload(){
	game.load.image("sky", "assets/sky.png");
	game.load.image("ground", "assets/platform.png");
	game.load.image("star", "assets/star.png");
	game.load.spritesheet("dude", "assets/dude.png"m 32, 48);
	game.load.spritesheet("baddie", "assets/baddie.png"m 32, 32);
}

function createv(){
	
}

function upload(){
	
}