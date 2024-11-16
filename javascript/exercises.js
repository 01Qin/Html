// variable define:
// var, let, const
/*----*/ // to comment out a block of code
/*
let x = 6
console.log(typeof (x));
//number type: both int and float are numbers in jv
// bigInt: presents too large number that these mentioned number
// none(python) = null (jv) - underlined
// convert data type into another - tostring(), parseInt(),parseFloat()
/*x.toString()


console.log(typeof (x.toString()));
console.log(1==1);
console.log(1=="1")
//using === to compare values
console.log(1 === "1");
// input and output:
let name = window.prompt("Enter your name");
console.log (name);
alert("there is no bun today.")
*/
// if (condition){
// code line
//}
// else{
//}
/*
let ageUser = prompt("Enter your age number");
if (ageUser <= 18){
  alert("this is too much for you to enter")
}
else {
  alert("welcome to the world !");
}
const number = prompt("give me a number");
if (number % 2 == 0){
  console.log("the number is even")
}
else {
  console.log("the number is odd")
}

 */
/*
let age, weight, dose;
age = prompt("enter age");
if (age >=18) {
  dose = 500
}
else if (1 < age < 17) {
  weight = prompt("enter weight");
  dose = weight * 12.5;
}
if (dose > 500){
  dose = 500;
}
else {
  dose = 0;
}
console.log("the dose for you is " + dose + "mg");

 */
/*
let cabinClass = prompt("enter the cabin class A/B/C");
switch (cabinClass) {
  case "A":
    console.log("Top deck cabin with sea view")
    break;
    case "B":
      console.log("Top deck cabin without window")
      break;
      case "C":
        console.log("Top deck cabin with window")
        break;
        default:
          console.log("No cabin class found")

}

 */
/*
// for loop:
let num = prompt('Enter a number to limit');
for (let i = 1; i <= num; i++) {
  console.log(i);
}

 */
/*

// while loop

while (num <= 0) {
  num = prompt('your number is negative, give me another number');
}
console.log("your number is " + num);

 */
//do while
/*
let number
do {
  number = Math.sqrt(10);
  console.log(number);
}
while (number <= 3) {

}

 */
// function function_name(p1, p2){
//}
// class Circle{
// constructor(p1, p2){
// this.p1 = p1
// this.p2 = p2
//}
//}
/*
let x = parseInt(prompt("enter the 1st number"));
let y = parseInt(prompt("enter the 2nd number"));
let swap;
swap = x;
x = y;
y = swap;
plus = x + y
minus = x - y
multiply = x * y;
console.log("value of 1st number after swapping", x);
console.log("value of 2nd number after swapping", y);
console.log(plus)
console.log(multiply);
console.log(minus)

 */
/*
function checkleapyear(year){
  if ((year % 4 === 0) && (year % 100 !== 0) ||(year % 400 === 0)){
    console.log("this year" + year, "is a leap year");
  }else{
    console.log("this is year " + year, "is a leap year");
  }
}
let year = prompt("Please enter a year");
checkleapyear(year);

 */
/*
const vowels = ["a", "e", "i", "o", "u"];

function countVowel(str) {
  let count = 0;
  for (let letter of str.toLowerCase()){
    if (vowels.includes(letter)){
      count++;
    }
  }
  return count;
}
let string = prompt("give me a string");
let countNumber = countVowel(string);
console.log(string);
console.log("the number of vowels in the string is " + countNumber);

 */
/*
isNan("hello") // the function check if it is a number
    list = [1, 2, 3, 4, 5, 6];
//use ... to copy a list
[...list.sort((a, b) => a - b)]

const arrow_function = () => {return 'hello'}

function quadraticSum(a, b) {
    return a + b;
}

 */
/*
console.log(document.location === window.location);
const newWindow = window.open("https://uaspath.mmg.fi/login/index.php")
window.close()

 */
window.location.href = "https://www.goodreads.com/?ref=nav_hom"
const currentURL = window.location.href;
console.log(currentURL);



//BOM
//windows object methods:
/*
alert("this is a notification!")
confirm("Are you sure?")

 */
answer = prompt("type your name")
console.log(answer)

//setTimeout(): after a certain time, a window method will perform action
//screen object:

const paragraph= document.getElementById("input");
paragraph.textContent = "this is the updated texts";