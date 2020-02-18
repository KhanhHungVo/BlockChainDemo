export {};
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK

console.log(x[0]);
console.log(1);
console.log(2);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
    
  rl.close();
});