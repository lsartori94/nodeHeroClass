// app/index.js

var calc = require("./calc");
var read = require("readline");

var rl = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

var numbersToAdd = [];

rl.question("Please enter numbers to add: ", (input) => {
    var strAnsw = input.split(" ");
    strAnsw.forEach(addNumbers);
    var result = calc.sum(numbersToAdd);
    console.log('The result is : ' + result);
    rl.close();
});

function addNumbers(number) {
    numbersToAdd.push(parseInt(number));
}
