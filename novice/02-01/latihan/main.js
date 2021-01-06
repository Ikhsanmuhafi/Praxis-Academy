// Constructor Functions
function name(make, model, color) {
    this.make = make,
    this.model = model,
    this.color = color,
    this.getName = function () {
        return this .make + ' ' + this .model;
    }
}
console.log(this.getName);
console.log('');
// unnamed
let Rectangle = class {
    constructor(height, width) {
        this.height = 12;
        this.width = 12;
    }
};
console.log(this.height);
console.log(this.width);
console.log('');
// output 'Rectangle'

//named
let yuhu = class yalah{
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
}
console.log(yuhu.name);
console.log('');
class san {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height + this.width;
    }
  }
  
  let square = new san(2, 20);
  
  console.log(square.area);
console.log('');
  //
  class polygon {
    constructor(...sides){
      this.sides = sides;
    }
    // method
    *getSides(){
    for (let side of this.sides){
    yield side;
    }
  } 
}

let pentagon = new polygon(1,2,3,4,5);
console.log([...pentagon.getSides()]);
console.log('');
class point {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  static displayName = 'point';
  static distance (a,b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    
    return Math.hypot(dx, dy)
  }
}

let p1 = new point(5, 5);
let p2 = new point(1, 1);
p1.displayName;
p1.distance;
p2.displayName;
p2.distance;

console.log(point.displayName);
console.log(point.distance(p1, p2));
console.log('');
class Animal {
  speak(){
    return this;
  }
  static eat(){
    return this;
  }
}

let obj = new Animal();
obj.speak(); 
let speak = obj.speak;
speak();

Animal.eat()
let eat = Animal.eat;
eat();
console.log(Animal.eat);
console.log(speak);
console.log(eat);
console.log('');
function Animalu() { }

Animalu.prototype.speake = function() {
  return this;
}

Animalu.eata = function() {
  return this;
}

let objk = new Animalu();
let speake = objk.speake;
speake();

let eata = Animalu.eata;
eata(); 
console.log(speake.eata);
console.log(speake+Animalu);
console.log(speake.objk);
console.log(objk-eata);
console.log('');
class biodata {
  constructor(tinggi, lebar){
    this.nama = 'biodata';
    this.tinggi = 12;
    this.lebar = 13;
  }
sayName() {
  ChromeSamples.log ('Hi, saya', this.nama + '.');
}  
sayHistory () {
  ChromeSamples.log('"biodata" is derived from the greek polus (many)' + ' and gonia (angel).');

};
}
console.log('');
