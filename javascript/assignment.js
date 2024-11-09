//1
console.log("I'm printing to console!");

//2
let name = prompt("Enter your name");
target1 = name;
document.querySelector('#target').innerHTML = `Hello, ${target1}`;

//3

let x = parseInt(prompt("Enter the first number: "));
let y = parseInt(prompt("Enter the second number: "));
let z = parseInt(prompt("Enter the third number: "));

plus = x + y + z
average = (x + y + z) / 3
product = x * y * z;

document.querySelector('#plus').innerHTML = `The summation is: ${plus}.`;
document.querySelector('#average').innerHTML = `The average is: ${average}.`;
document.querySelector('#product').innerHTML = `The multiplication is: ${product}.`;


//4

let studentname = prompt("Enter your name:");
let number = Math.floor(Math.random() * 4) + 1;
let house;

    if (randomNumber === 1) {
            house = "Gryffindor";
        } else if (randomNumber === 2) {
            house = "Slytherin";
        } else if (randomNumber === 3) {
            house = "Hufflepuff";
        } else {
            house = "Ravenclaw";
        }
document.querySelector('#name').innerHTML = ` ${studentname}, you are ${house}.`;
