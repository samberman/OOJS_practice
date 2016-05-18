"Problem 1"
// Object literal simply states that something is an object, with specified attributes.
var headphones = {
	brand: sony
	style: overEar
	microphone: true
}


// This is how you create an object using the constructor function.
function Headphones(brand, style, microphone){
	this.brand = brand;
	this.style = style;
	this.microphone = true;
}

// This is how you create an instance of an object.
var headphones = new headphones("senheiser", "inEar", false);

// Using dot notation allows you to access specific object attributes.
headphones.style;
headphones.microphone;
headphones.brand;

// dot prototype allows you to add attributes to future instances of an object. 
Headphones.prototype.color = "black";
Headphones.prototype.countryOfOrigin = "Japan";

"Problem 2"
headphones = ["brand", "style", "microphone	"]
for (var i = 0; i< headphones.length; i++){
	console.log(headphones[i])
}

"Problem3"
function Multiplier(){
	this.currentValue = 1
	this.multiply = function(x){
		return(currentValue * x);
	};
	this.getCurrentValue = function(){
		return(currentValue);
	};
}
var n = new Multiplier();

"Problem4"
function Photo(filename, loc){
	this.filename = filename;
	this.loc = loc;
}

var pic1 = new Photo("pic1.png", "NYC")

function Album(){
	this.photos = [];
	this.addPic = function(x){
		this.photos.push(x); 
	};
	this.find = function(i){
		return(photos[i]);
	};
	this.list = function(){
		this.photos.forEach;
		return(this.photos);
	};
}
var myAlbum = new Album();

"Problem5"
function Person(skin, hairColor, gender){
	this.skin = true;
	this.hairColor = hairColor;
	this.gender = gender;
}
var sam = new Person();

function Teacher(){
	this.teacher = true;
	this.degree = arguments['3'];
	Person.apply(this, arguments);
}
Teacher.prototype = new Person();
var Keyan = new Teacher();

function Student(){
	this.student = true;
	Person.apply(this, arguments);
}
Student.prototype = new Person();
var Bill = new Student();

function School(){
	this.population = [];
	this.collect = function(x){
		this.population.push(x);
	};
}

var nycda = new School();

nycda.collect(sam);
nycda.collect(Keyan);
nycda.collect(Bill);