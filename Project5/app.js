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
	game.physics.starSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, "sky");

	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	var ground = platforms.create(0, 550, "ground");
	ground.scale.setTo(2,2);
	ground.body.immovable = true;

	var ledge = platforms.create(400,400, "ground");
	ledge.body.immovable = true;
	ledge = platforms.create(-100,250, "ground");
	ledge.body.immovable = true;

	var style = {font: "bold 32px Arial", fill:"#fff"}
	scorelabel = game.add.text(300, 560, "Score: ", style);
	scoretext = game.addtest(420, 560, score, style);
	lifelabel = game.add.text(10, 5, "Lives: ", style);
	lifetext = game.addtest(120, 5, live, style);
}

function upload(){
	
}