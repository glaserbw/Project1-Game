// MOUSE POSITION CALCULATION - I don't know how it works but it'll spit out x , y coordinates of the mouse 
function calculateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop;
	return {
		x:mouseX,
		y:mouseY
	}
};

function moveEverything(){
	for(var i = 0; i < enemies.length; i++) {
		enemies[i].Y += enemies[i].speed; 
		
		if(enemies[i].Y >= canvas.height) {
			enemyReset(enemies[i]); 
		};
	}
};

//taylors function to reset EACH car 
function enemyReset(taylor){
	taylor.Y = getRandomPos();
	taylor.speed += getRandomSpeed(); //taylor.speedIncrement was here
	if(taylor.speed >= taylor.speedMax) {
		taylor.speed = taylor.speedReset; 
	}
};

function findCollision(){
	// player coordinate variables
	console.log(`PlayerX: ${player.x} PlayerY: ${player.y}`)
		var Px1 = player.X;
		var Px2 = player.X + player.width;

		var Py1 = player.Y;
		var Py2 = player.Y + player.height; 

	for(var i = 0; i < enemies.length; i++) {
	// enemy coordinates variables
		var Ex1 = enemies[i].X;
		var Ex2 = enemies[i].X + enemies[i].width; 

		var Ey1 = enemies[i].Y;
		var Ey2 = enemies[i].Y + enemies[i].height;

	// collision logic	
		if (((Px1 < Ex1 && Px2 > Ex1) || (Px1 < Ex2 && Ex2 < Px2)) &&
			((Py1 < Ey1 && Py2 > Ey1) || (Py1 < Ey2 && Ey2 < Py2))
			) {
			endGame();
		}
	}
}; 

function endGame(){ 
	console.log("You Crashed!!!");
};

//gets a random Y position for the car to restart 
function getRandomPos(min, max) {
  min = Math.ceil(-canvas.height);
  max = Math.floor(0);
  return Math.floor(Math.random() * (max - min)) + min; 
};

//gets a random speed increment for enemy reset 
function getRandomSpeed(min, max) {
  min = Math.ceil(5);
  max = Math.floor(0);
  return Math.floor(Math.random() * (max - min)) + min; 
};



