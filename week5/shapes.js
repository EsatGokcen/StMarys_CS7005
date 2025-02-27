function Shape (name) {
    this.name = name;
}

Shape.prototype.area = function () {};

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

function Circle (radius) {
    Shape.call(this, 'circle');
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
    return Math.PI * Math.pow(this.radius, 2);
}

function Square (side) {
    Shape.call(this, 'square');
    this.side = side;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.area = function () {
    return Math.pow(this.side, 2);
}