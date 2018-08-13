//GLOBAL VARIABLES

//world building
var canvas;
var canvasContext;

var time = 0 // displays start time

// interval varibable to clear game on loss 
var interval; 

//background variables
var bg = {
	drawColor: "Transparent",
	X: 0, 
	Y: -1700,
	resetY: -1700,
	width: 600,
	height: 2400,
	heightMax: 460, 
	speed: 28, 
	img: "img/bg1.png"
}

// player object
var player = {
	drawColor: "Transparent",
	X: 275,
	Y: 575,
	width: 50,
	height: 100,
	img: "img/Car.png"
}

var enemies = [{
	// enemy 1
		drawColor: "Transparent", // this is the color of the rectangle spawned 
		X: 25, // enemy starting X coordinates 
		Y: getRandomStart(), // enemy starting Y coordinates 
		resetY: -100,
		speed: 5, // enemy start speed 
		// speedIncrement: 1, // enemy speed increment 
		speedReset: 5, //speed to reset after max has been reached 
		speedMax: 25, // enemy max speed 
		width: 50, // enemy width  
		height: 100, // enemy height 
		img: "img/Black_viper.png"
	},{
	// enemy 2
		drawColor: "Transparent",
		X: 125,
		Y: getRandomStart(),
		resetY: -100,
		speed: 5,
		// speedIncrement: 2, 
		speedReset: 6,
		speedMax: 25,
		width: 50,
		height: 100,
		img: "img/Mini_truck.png"
	},{
	// enemy 3
	 	drawColor: "Transparent",
		X: 225,
		Y: getRandomStart(),
		resetY: -100,
		speed: 5,
		// speedIncrement: 4, 
		speedReset: 6,
		speedMax: 25, 
		width: 50,
		height: 100,
		img: "img/Mini_van.png"
	},{
	// enemy 4
		drawColor: "Transparent",
		X: 325,
		Y: getRandomStart(),
		resetY: -100,
		speed: 6,
		// speedIncrement: 0,
		speedReset: 6,
		speedMax: 25,
		width: 50,
		height: 100,
		img: "img/Audi.png"
	},{
	//enemy 5
	  	drawColor: "Transparent",
		X: 425,
		Y: getRandomStart(),
		resetY: -100,
		speed: 5,
		// speedIncrement: 2, 
		speedReset: 6,
		speedMax: 25,
		width: 50,
		height: 100,
		img: "img/taxi.png"
	},{
	// enemy 6	
	  	drawColor: "Transparent",
		X: 525,
		Y: getRandomStart(),
		resetY: -100,
		speed: 5,
		// speedIncrement: 2, 
		speedReset: 6,
		speedMax: 25,
		width: 50,
		height: 100,
		img: "img/Ambulance.png"
}]; 

function getRandomStart(min, max) {
  min = -100;
  max = -800;
  return Math.floor(Math.random() * (max - min)) + min; 
};






















