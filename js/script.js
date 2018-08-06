console.log("JS hooked up");
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

// var bg = new Image();
// // bg.src = "NEED BACKGROUND"

// INITIAL SETUP AND BACKGROUND
let innerWidth = 360,
	innerHeight = 620;
	canvas.width = innerWidth;
	canvas.height = innerHeight;


document.addEventListener('keydown', event => {
	if (event.keyCode === 37) {
		player.x += -15;
	} else if (event.keyCode === 39) {
		player.x += 15;
	} else if (event.keyCode === 40) {
		player.y += 15;
	} else if (event.keyCode === 38) {
		player.y += -15;
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

// CREATE BACKGROUND
// let background = 


// ANIMATION LOOP
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	player.draw(); 
}
animate();














