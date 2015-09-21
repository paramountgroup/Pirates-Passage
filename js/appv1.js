// JavaScript Document

/*
    Pirates Passage - Classic Arcade Game, Udacity - Front End Web Developer project 3
    ---------------------------------- 
    Bob Ingram - September 20, 2015
    ----------------------------------
	
	This app.js is the primary work space of project 3. In this file the player and enemies are 
	instantiated updated and rendered with the assistance of engine.js and resources.js files. 
	User input is also handled by app.js. Engine.js was updated to handle custom images.
	References for this project were the Udacity discusion board, W3Schools
	Udemy classes, student projects on github (alexx, htm, minkdog, tr12s), Office hours hangouts, 
	recorded office hours, stack overflow and youtube.
	
*/


// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/shark-fin2.png';
	this.x = x;
	this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

var collision = Boolean(false);
Enemy.prototype.update = function(dt) {
	
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	this.randomSpeed = Math.floor((Math.random() * 400) + 1); //randomSpeed is used to make enemies travel different speeds
	this.x += this.randomSpeed * dt;
	if (this.x > 500) {
		this.x = -100; // send enemy back to left side of canvas
	}
	
	// Check for collisions if player and enemy cooridinates are within 40px player is reset
	
	var checkCollisionsx = Math.abs(this.x - player.x);
	var checkCollisionsy = Math.abs(this.y - player.y);
	if ((checkCollisionsx < 40) && (checkCollisionsy < 40)) {  // if true reset player
		collision = true;
		sharkChomping();
		setTimeout(resetPlayer,1000); // time delay to give the shark some time to chomp
	}
	
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
	//this.sprite is the enemies passed to global object Resources in resources.js file
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y) {
	this.x = x;
	this.y = y;
	this.sprite = 'images/pirate-ship.png';
};

Player.prototype.update = function() { 
};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keypressed) {
	
	/* This function takes input key direction from player.handleInput and moves the player.
	It also keeps the player on the canvas and calls resetPlayer() when it reaches the top.
	*/
	
	if (collision) {
		//if collision do nothing and wait for player resetPlayer() to finish
	}
	else if (keypressed === 'up') {
		this.y = this.y - 83;
		if (this.y < -25) {  // return to start after reaching top of canvas
			resetPlayer();
			window.location.reload(); // refresh the screen because the mast of the "player" extends beyond canvas
		}
	 }
	else if (keypressed === 'down' && this.y < 400) {
	  this.y = this.y + 83;
	}
	else if (keypressed === 'left' && this.x > 0) {
	  this.x = this.x - 101;
	}
	else if (keypressed === 'right' && this.x < 400) {
	  this.x = this.x + 101;
	}
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(200,405); // start the player in the middle-bottom of canvas
var allEnemies = [new Enemy(100,63), new Enemy(200, 146), new Enemy(300, 229), new Enemy(400, 312)]; // position enemies in array

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Send Player back to the start
var resetPlayer = function() {
	player.x = 200;
	player.y = 400;
	player.sprite = 'images/pirate-ship.png';
	collision = false;
};

// Shark Chomping eating the player
var sharkChomping = function() {
	
		if (player.sprite === 'images/shark-mouth-closed.png') {
			player.sprite = 'images/shark-mouth-open.png';
			sleep();
		}
		else {
			player.sprite = 'images/shark-mouth-closed.png';
			sleep();
		}
};


// sleep function is used to slow the updates of the player shark sprite for good chomping action
function sleep() {
	var milliseconds = 100;
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
 }
 
