//GLOBAL VARIABLES

//world building
var canvas;
var canvasContext;

var time = 0 // displays start time

// interval varibable to clear game on loss 
var interval; 

//background variables
var bg = {
	drawColor: "black",
	X: 0, 
	Y: -1160,
	resetY: -1160,
	width: 600,
	height: 1860,
	heightMax: 460, 
	speed: 28, 
	img: "img/bg.png"
}

// player object
var player = {
	drawColor: "green",
	X: 275,
	Y: 575,
	width: 50,
	height: 100,
	img: "img/Car.png"
}

var enemies = [{
	// enemy 1
		drawColor: 'red', // this is the color of the rectangle spawned 
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
		drawColor: 'blue',
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
	 	drawColor: 'orange',
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
		drawColor: 'yellow',
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
	  	drawColor: 'pink',
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
	  	drawColor: 'orange',
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






















