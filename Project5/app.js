var game = new Phaser.Game(800, 600, Phaser.AUTO, '',{
	preload:preload,
	create:create,
	update:update
});

var score = 0;
var life = 3;

function preload(){
	game.load.image("sky", "assets/sky.png");
	game.load.image("ground", "assets/platform.png");
	game.load.image("star", "assets/star.png");
	game.load.spritesheet("dude", "assets/dude.png", 32, 48);
	game.load.spritesheet("baddie", "assets/baddie.png", 32, 32);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

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
	scoretext = game.addtext(420, 560, score, style);
	lifelabel = game.add.text(10, 5, "Lives: ", style);
	lifetext = game.addtext(120, 5, life, style);

	player = game.add.sprite(32, 400, "dude");
	player.animations.add("left", [0,1,2,3], 10, true);
	player.animations.add("right", [5,6,7,8], 10, true);
	game.physics.arcade.enable(player);
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.colliderWorldBounds = true;

	enemy = game.add.sprite(32, 400, "baddie");
	enemy.animations.add("left", [0, 1], 10, true);
	enemy.animations.add("right", [2, 3], 10, true);
	enemy.physics.arcade.enable(enemy);
	enemy.body.bounce.y = 0.2;
	enemy.body.gravity.y = 300;
	enemy.body.colliderWorldBounds = true;

	stars = game.add.physicsGroup();
	stars.enableBody = true;
	for (int i = 0; - 1; i < 12; i++) {
		var star = stars.create(i * 70, 0, "star");
		star.body.bounce.y = 0.3;
		star.body.gravity.y = 100;
	}

	cursors = game.input.keyboard.createCursorKeys();
}

function upload(){
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(enemy, platforms);
	game.physics.arcade.collide(stars, platforms);

	player.body.velocity.x = 0;

	if(cursot.left.isDown) {
		player.body.velocity.x = -150
		player.animations.play("left");
	} else if (cursors.right.isDown) {
		player.body.velocity.x = 150;
		player.animations.play("right");
	} else {
		player.animations.stop();
		player.frame = 4;
	}

	if(cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300;
	}

	game.physics.arcade.overlap(player, stars, collectingStar);
	game.physics.arcade.overlap(player, enemy, loseLife);

	moveEnemy();

	if (life == 0) {
		endGame();
	}
}

function collectStar(player, star) {
	score +=1
	scoretext.setText(score);
	star.kill();
	star.reset(Math.random(Math.random() * 750), 0);
}

function loseLife(player, enemy) {
	life -=1
	lifetext.setText(score);
	enemy.kill();
	enemy.reset(10,20);
}







