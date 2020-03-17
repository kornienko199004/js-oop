// function Hero() {
//     this.occupation = 'Ninja';
// }

// const hero = new Hero();
// console.log(hero.occupation);

// const ninja = {
//     name: 'Ninja',
//     say: function() {
//         return 'I am a ' + this.name;
//     }
// };

// function F() {}
// console.log(typeof F.prototype);
// F.prototype = ninja;
// const baby_ninja = new F();
// console.log(baby_ninja.name);
// console.log(F.toString());
'use strict';

const arr = [1, 2, function() {
    console.log(this);
}];
arr[2]();

