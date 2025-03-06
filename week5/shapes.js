function Shape (name) {
    this.name = name;
}

Shape.prototype.area = function () {};
Shape.prototype.displayInfo = function () {
    console.log('The area of the ' + this.name + ' is ' + this.area());
}

// Rectangle prototype

function Rectangle (width, height) {
    Shape.call(this, 'rectangle');
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
    return this.width * this.height;
}

// Circle prototype

function Circle (radius) {
    Shape.call(this, 'circle');
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
    return Math.PI * Math.pow(this.radius, 2);
}

// Square prototype 

function Square (side) {
    Shape.call(this, 'square');
    this.side = side;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.area = function () {
    return Math.pow(this.side, 2);
}

// Testing shapes inheritance with objects and displayInfo method

let rectangle = new Rectangle(5, 8);
rectangle.displayInfo();

let circle = new Circle(4);
circle.displayInfo();

let square = new Square(7);
square.displayInfo();

// Using the __proto__ property to check the prototype chain;

console.log(rectangle.__proto__ === Rectangle.prototype);
console.log(rectangle.__proto__.__proto__ === Shape.prototype);
console.log(rectangle.__proto__.__proto__.__proto__ === Object.prototype);

console.log(circle.__proto__ === Circle.prototype);

console.log(square.__proto__ === Square.prototype);

