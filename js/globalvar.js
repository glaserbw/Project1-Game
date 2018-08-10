//GLOBAL VARIABLES

//world building
var canvas;
var canvasContext;

var time = 0 // displays start time

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
		X: 35, // enemy starting X coordinates 
		Y: -50, // enemy starting Y coordinates 
		resetY: -100,
		speed: 3, // enemy start speed 
		// speedIncrement: 1, // enemy speed increment 
		speedReset: 6, //speed to reset after max has been reached 
		speedMax: 15, // enemy max speed 
		width: 50, // enemy width  
		height: 100, // enemy height 
		img: "img/Black_viper.png"
	},{
	// enemy 2
		drawColor: 'blue',
		X: 155,
		Y: -600,
		resetY: -100,
		speed: 5,
		// speedIncrement: 2, 
		speedReset: 5,
		speedMax: 20,
		width: 50,
		height: 100,
		img: "img/Mini_truck.png"
	},{
	// enemy 3
	 	drawColor: 'orange',
		X: 275,
		Y: -750,
		resetY: -100,
		speed: 5,
		// speedIncrement: 4, 
		speedReset: 3,
		speedMax: 20, 
		width: 50,
		height: 100,
		img: "img/Mini_van.png"
	},{
	// enemy 4
		drawColor: 'yellow',
		X: 395,
		Y: -100,
		resetY: -100,
		speed: 6,
		// speedIncrement: 0,
		speedReset: 6,
		speedMax: 20,
		width: 50,
		height: 100,
		img: "img/Audi.png"
	},{
	//enemy 5
	  	drawColor: 'pink',
		X: 515,
		Y: -275,
		resetY: -100,
		speed: 5,
		// speedIncrement: 2, 
		speedReset: 3,
		speedMax: 20,
		width: 50,
		height: 100,
		img: "img/taxi.png"
}]; 
