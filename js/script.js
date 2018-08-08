console.log("JS working");
// GLOBAL VARIABLES
var canvas;
var canvasContext;
var ballX = 50; 
var ballY = 50;
// var ballSpeedX = 10;
var enemy1SpeedY = 15; 

var player1X = 275; // this is the players starting x coordinates. used in: drawEverything
var player1Y = 575; // this is the players starting y coordinates. used in: drawEverything

var enemy1X = 275 // this is the enemys starting x coordinates. used in: drawEverything - this will be CHANGED
var enemy1Y = 50 // this is the enemys starting x coordinates. used in: drawEverything

const PLAYER_WIDTH = 50; // this is the players width size - only adjust when adding art
const PLAYER_HEIGHT = 100; // this is the players height size - only adjust when adding art

const ENEMY_1_WIDTH = 50; // this is the enemy's width size - only adjust when adding art
const ENEMY_1_HEIGHT = 100; // this is the enemy's height size - only adjust when adding art


// MOUSE POSITION CALCULATION - I don't know how it works but it'll spit out x , y coordinates of the mouse 
function calculateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop;
	return {
		x:mouseX,
		y:mouseY
	};
}

// Onload function to build the board and run drawEverything and moveEverything
window.onload = function() {
	console.log("Hello World");
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	var framesPerSecond = 30 //this is a local variable to make frame rate calculation easier. it's forgotten and never used again after this
		setInterval(function(){
			moveEverything();
			drawEverything();
		}, 1000/framesPerSecond );

	canvas.addEventListener('mousemove', //adds event listener as outined in the init function to capture mouse position on X & Y axis 
		function(evt) {
			var mousePos = calculateMousePos(evt);
			player1X = mousePos.x-(PLAYER_WIDTH/2); 
			player1Y = mousePos.y-(PLAYER_HEIGHT/2);
		});
};

function enemyReset(){
	enemy1Y = -canvas.height;
	enemy1X = getRandomPos();
}; 

// End game state - not used yet 
function endGame(){ 
	console.log("You'll never make it home");
};

// This function will move enemies downward along Y axis 
function moveEverything(){
	enemy1Y = enemy1Y + enemy1SpeedY;

	if(enemy1Y >= canvas.height) {
		enemyReset(); 
	};
	
	// collision detection between player position and enemy pos 
	var playerPos = player1X && player1Y; 
	var enemyPos = enemy1Y && enemy1X; 
	if(playerPos = enemy1Y) {
		endGame(); 
	}; 
};

//This function gets a random number which I can use to populate X or Y axis reset value 
function getRandomPos(min, max) {
  min = Math.ceil(canvas.width);
  max = Math.floor(0);
  return Math.floor(Math.random() * (max - min)) + min; 
}


// Following two functions paint the rectangle boxes on the screen, including the background - art MIGHT go here 
function drawEverything() {
	colorRect(0,0,canvas.width,canvas.height,"black"); // background screen size and color
	colorRect(player1X,player1Y,PLAYER_WIDTH,PLAYER_HEIGHT,"green"); // player
	colorRect(enemy1X,enemy1Y,ENEMY_1_WIDTH,ENEMY_1_HEIGHT,"red"); // enemy 
};

function colorRect(leftX, topY, width, height, drawColor){ //refactors draw elements so they're easier to scale. Your player images will probably go here
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height);
};























































































































//EVERYTHING BELOW THIS IS WHAT WAS WORKING ON MONDAY AUG 7 - BAD CODE BUT FUNCTIONAL 


// // BACKGROUND SETUP
// var bg = new Image();
// bg.src = "../project1-game/img/bg.png"

// // CREATE BACKGROUND ANIMATION
// function background() {
// 	this.x = 0, this.y = -1240, this.w = bg.width, this.h = bg.height;
// 	this.render = function() {
// 		c.drawImage(bg, 0, this.y+=8);
// 		if(this.y >= 0) {
// 			this.y = -1240;
// 		}
// 	}
// };
// var background = new background();

// // INITIAL SETUP AND BACKGROUND
// let innerWidth = 360,
// 	innerHeight = 620;
// 	canvas.width = innerWidth;
// 	canvas.height = innerHeight;


// // EVENT LISTENERS FOR KEYBOARD INPUTS
// document.addEventListener('keydown', event => {
// 	if (event.keyCode === 37) {
// 		player.x += -15;
// 	} else if (event.keyCode === 39) {
// 		player.x += 15;
// 	} else if (event.keyCode === 40) {
// 		player.y += 15;
// 	} else if (event.keyCode === 38) {
// 		player.y += -15;
// 	}
//  });

// // PLAYER SETUP
// let player = {},
// 	player_width = 125,
// 	player_height = 125,
// 	player_img = new Image();
// 	player_img.src = "../project1-game/img/Car.png";

// // CREATE PLAYER OBJECT
// player = {
// 	width : player_width,
// 	height: player_height,
// 	x : innerWidth/2 - player_width/2,
// 	y : innerHeight - (player_height+40),
// 	draw: function() {
// 		c.drawImage(player_img, this.x, this.y, this.width, this.height); 
// 	}
// };


// // COLLOSION DETECTED


// // ANIMATION LOOP
// function animate() {
// 	requestAnimationFrame(animate);
// 	c.clearRect(0, 0, canvas.width, canvas.height);
// 	background.render();
// 	player.draw(); 
	
// }
// animate();















