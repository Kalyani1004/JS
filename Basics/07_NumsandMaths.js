const score = 500
// console.log(score);

const balance = new Number(100)
// creating a object 
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(1));
// This rounds the number to 2 decimal places and returns it as a string.

const n1 = 23.9785
// console.log(n1.toPrecision(4));
// This rounds the number to 4 significant figures and returns it as a string.

const h1 = 10000000
// console.log(h1.toLocaleString('en-IN'))

///////////Maths////////////////
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.round(7.5));
console.log(Math.ceil(7.5));
//ceil gives upper while floor gives lower 
console.log(Math.floor(7.5));

console.log(Math.max(1,2,3,4,5,6,7,8));
console.log(Math.min(1,2,3,4,5,6,7,8));

console.log(Math.random());
//gives values from 0-1

console.log((Math.random()*10) + 1) ;

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max -min +1) + min));
