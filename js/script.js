console.log("JS hooked up");
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

// BACKGROUND SETUP
var bg = new Image();
bg.src = "../project1-game/img/bg.png"

// INITIAL SETUP AND BACKGROUND
let innerWidth = 360,
	innerHeight = 620;
	canvas.width = innerWidth;
	canvas.height = innerHeight;

document.addEventListener('keydown', event => {
	if (event.keyCode === 37) {
		player.x += -20;
	} else if (event.keyCode === 39) {
		player.x += 20;
	} else if (event.keyCode === 40) {
		player.y += 20;
	} else if (event.keyCode === 38) {
		player.y += -20;
	}
 });

// PLAYER SETUP
let player = {},
	player_width = 125,
	player_height = 125,
	player_img = new Image();
	player_img.src = "../project1-game/img/Car.png";

// CREATE PLAYER OBJECT
player = {
	width : player_width,
	height: player_height,
	x : innerWidth/2 - player_width/2,
	y : innerHeight - (player_height+40),
	draw: function() {
		c.drawImage(player_img, this.x, this.y, this.width, this.height); 
	}
};

// CREATE BACKGROUND ANIMATION
function background() {
	this.x = 0, this.y = -1240, this.w = bg.width, this.h = bg.height;
	this.render = function() {
		c.drawImage(bg, 0, this.y+=8);
		if(this.y >= 0) {
			this.y = -1240;
		}
	}
};
var background = new background();


// ANIMATION LOOP
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	background.render();
	player.draw(); 
	
}
animate();















