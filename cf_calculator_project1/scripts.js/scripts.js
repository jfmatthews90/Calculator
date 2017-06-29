// Calculator JS code

var box=document.getElementById('screen');

// user input of keys
function addtoscreen(x) {
	box.value += x; // += allows us to enter multiple numbers
	if (x == 'c') { // if we enter 'c' it clears the screen
		box.value = '';
	}
}

// computation
function answer() {
	x=box.value; // stores the value in the box
	x=eval(x); // evaluates the inputs on the screen
	box.value=x; // shows answer on screen
}

// backspace function
function backspace() {
	var number=box.value; // stores value in the box
	var len=number.length-1; // stores length of numbers
	var newnumber=number.substring(0,len); // extracts from string and returns new substring
	box.value=newnumber; // stores val of new number
}

// power function
function power(y) {
	x=box.value; // stores value in the box
	x=Math.pow(x,y); // pow returns X to the val of Y in JS
	box.value=x; // shows answer on screen
}