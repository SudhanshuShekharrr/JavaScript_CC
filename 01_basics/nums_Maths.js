const score = 400
 

// one other way to define number 

const balance = new Number(100);

// we can change this number to string using toString

console.log(balance.toString().length); // after changing to string we can use string operations too

console.log(balance. toFixed(2)); // 100.00

const otherNumber = 123.8966 

console.log(otherNumber. toPrecision(3)); // 124


const hundred = 1000000
console.log(hundred.toLocaleString('en-IN')); // 10,00,000




// Maths

console.log(Math.random()); // it will always throw number between 0 to 1

// But if we want to make it between 1 to 10 we could use it as

console.log(Math.random()*10 + 1);

// if we want number betwwen certain range like between 10 - 20

const mini = 10
const maxi = 20

console.log(Math.floor(Math.random()* (maxi - mini +1)) + mini);