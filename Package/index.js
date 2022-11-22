// Random Number between 0 to 59

function generateRandomNumber(min, max) {
    console.log(Math.floor(Math.random() * (max - min)) + min);
}

function generateRandomNumberTime(min, max) {
    console.log(Math.floor(((new Date().getMilliseconds() % max) / 100) * (max - min)) + min);
}

generateRandomNumber(0, 59)

generateRandomNumberTime(0, 59)

var random = require('randomize');
 
// Generate random boolean
var randomBoolean = random(59); 

console.log(randomBoolean)

debugger;