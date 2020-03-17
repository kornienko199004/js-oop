// function Shape() {
//     this.name = 'Shape';
//     this.toString = function() {
//         return this.name;
//     };
// }

// function TwoDShape() {
//     this.name = '2D shape';
// }

// function Triangle(side, height) {
//     this.name = 'Triangle';
//     this.side = side;
//     this.height = height;
//     this.getArea = function() {
//         return this.side * this.height / 2;
//     };
// }

// // TwoDShape.prototype = new Shape();
// TwoDShape.prototype = new Shape();
// Triangle.prototype = new TwoDShape();

// TwoDShape.prototype.constructor = TwoDShape;
// Triangle.prototype.constructor = Triangle;
// console.log(TwoDShape.prototype.constructor);
// console.log(Triangle.prototype.constructor);
// console.log(new Triangle(10, 20).getArea())
// console.log(new Triangle(10, 20).toString())
// function Shape() {}

// Shape.prototype.name = 'Shape';
// Shape.prototype.toString = function() {
//     this.const = this.constructor;
//     return this.const ? this.const.toString() + ', ' + this.name : this.name;
// };

// function TwoDShape() {}

// // TwoDShape.prototype = new Shape();
// const F = function() {};
// F.prototype = Shape.prototype;

// TwoDShape.prototype = new F();
// TwoDShape.prototype.constructor = TwoDShape;
// TwoDShape.uber = Shape.prototype;

// TwoDShape.prototype.name = '2D shape';

// function Triangle(side, height) {
//     this.side = side;
//     this.height = height;
// }

// console.log(Triangle.prototype.constructor);
// // Triangle.prototype = new TwoDShape();
// F.prototype = TwoDShape.prototype;

// Triangle.prototype = new F();
// console.log(Triangle.prototype.constructor);
// Triangle.prototype.constructor = Triangle;

// Triangle.uber = TwoDShape.prototype;

// Triangle.prototype.name = 'Triangle';
// Triangle.prototype.getArea = function() {
//     return this.side * this.height / 2;
// };

// const my = new Triangle(5, 10);
// console.log(my.getArea());
// console.log(my.toString());

// console.log(Triangle.prototype)
// console.log(new Shape().name);

function extend(Child, Parent) {
    const F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}

function Shape() {}
Shape.prototype.name = 'Shape';
Shape.prototype.toString = function() {
    console.log(this.constructor.uber);
    return this.constructor.uber
        ? this.constructor.uber.toString() + ', ' + this.name
        : this.name;
};

// define -> inherit -> augment
function TwoDShape() {}
extend(TwoDShape, Shape);
TwoDShape.prototype.name = '2D shape';

// define
function Triangle(side, height) {
    this.side = side;
    this.height = height;
}

extend(Triangle, TwoDShape);

Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function() {
    return this.side * this.height / 2;
};

console.log(new Triangle().toString());
