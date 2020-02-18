"use strict";
exports.__esModule = true;
var x;
// Initialize it
// x = ["hello", 10]; // OK
// console.log(x[0]);
// console.log(1);
// console.log(2);
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What do you think of Node.js? ', function (answer) {
    // TODO: Log the answer in a database
    console.log("Thank you for your valuable feedback: " + answer);
    rl.close();
});

function findPrimeNumber(length){
    if(!Number.isInteger(length)) return;
    const MAX_NUMBER = 99999
    for(var i = 0; i < MAX_NUMBER; i++){

    }
}

Number.prototype.isPrimeNumber = function(){
    console.log(this)
}