const greet = R.replace('{name}', R.__, 'Hello, {name}!');
//=> 'Hello, Alice!'
console.log(greet('ikhsan'));

const double = x => x * 2;
let a = R.map(double, [1, 2, 3]); //=> [2, 4, 6]
let b = R.map(double, {x: 1, y:2, z:3});
console.log(a, b);