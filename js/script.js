console.log("Hello World");


document.addEventListener('DOMContentLoaded', function() {

	document.getElementById("startButton").addEventListener("click", startGame);
});

// window.onload = function()

var startGame = function() {

	clearStartScreen();
	createCanvas(); 

	console.log("On Load");
	// canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	//this refreshes the canvas so all movement is recorded 
	var framesPerSecond = 30
		interval = setInterval(function(){
			drawEverything();
			findCollision();
			moveEverything();
		}, 1000/framesPerSecond );
		
	setInterval(function() {
		time++;
	},1000); 

	canvas.addEventListener('mousemove', mouseMove); //adds event listener as outined in the init function to capture mouse position on X & Y axis 
	function mouseMove(evt) {
		var mousePos = calculateMousePos(evt);
		player.X = mousePos.x-(player.width/2); 
		player.Y = mousePos.y-(player.height/2);
	};
};

function createCanvas(){
		canvas = document.createElement("canvas")
		canvas.setAttribute("id", "gameCanvas");
		canvas.setAttribute("width", 600);
		canvas.setAttribute("height", 700);
		document.getElementById("gameScreen").appendChild(canvas);
};

function clearStartScreen(){
	var startScreen = document.getElementById("startScreen");
	while (startScreen.firstChild) {
		startScreen.removeChild(startScreen.firstChild);
	}
};

function stop() {
		clearInterval(interval);
};

function drawEverything() {
	
	//draws background
	colorRect(bg.X,bg.Y,bg.width,bg.height,bg.drawColor,bg.img); 

	//draws player
	colorRect(player.X, player.Y, player.width, player.height, player.drawColor, player.img);

	//for loop to draw all ememies 
	for (var i = 0; i < enemies.length; i++) { 
		// console.log(enemies, i)
			colorRect(enemies[i].X,enemies[i].Y,enemies[i].width,enemies[i].height,enemies[i].drawColor,enemies[i].img);	
	};
	//draws timer
	canvasContext.font="26px Helvetica";
	canvasContext.fillStyle="white";
	canvasContext.fillText(("Time: " + time.toString()), 25, 50); 
};

function colorRect(leftX, topY, width, height, drawColor, img){
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height);

	var image = document.createElement("img");
	// console.log(img)
	image.src=img;
	canvasContext.drawImage(image, leftX, topY, width, height);
};

















	// canvas.addEventListener('mousemove', //adds event listener as outined in the init function to capture mouse position on X & Y axis 
	// function(evt) {
	// 	var mousePos = calculateMousePos(evt);
	// 	player.X = mousePos.x-(player.width/2); 
	// 	player.Y = mousePos.y-(player.height/2);
	// });



























