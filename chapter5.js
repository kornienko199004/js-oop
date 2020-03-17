// function Gadget(name, color) {
//     this.name = name;
//     this.color = color;
//     this.whatAreYou = function() {
//         return 'I am a ' + this.color + ' ' + this.name;
//     };
// }

// Gadget.prototype.price = 100;
// Gadget.prototype.rating = 3;
// Gadget.prototype.getInfo = function() {
//     return 'Rating: ' + this.rating + ', price: ' + this.price;
// };

// const newtoy = new Gadget('webcam', 'black');
// console.log(newtoy);
// console.log(Gadget.prototype);
// Gadget.prototype.get = function (what) {
//     return this[what];
// };

// console.log(newtoy.get('price'));
// console.log(newtoy.get('color'));
// console.log(newtoy.constructor.prototype);
// for (const key in newtoy) {
//     console.log(key);
// }
// const monkey = {
//     hair: true,
//     feeds: 'bananas',
//     breathes: 'air',
// };

// function Human(name) {
//     this.name = name;
// }
// Human.prototype = monkey;

// const george = new Human('George');
// console.log(monkey.isPrototypeOf(george));
// console.log(Object.getPrototypeOf(george));
// console.log(george.__proto__)

const shape = {
    type: '',
    getType: function() {
        return this.type;
    }
};

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = 'triangle';
};

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
};

const triangle = new Triangle(1, 2, 3);

console.log(triangle.constructor === Triangle);
console.log(shape.isPrototypeOf(triangle));
console.log(triangle.getPerimeter());
console.log(triangle.getType());
Array.prototype.shuffle = function() {
    return this.reverse();
}

console.log([1, 2, 3, 4].shuffle());