//
var myName;
//
var a;
a = 7;
//
var a;
a = 7;
var b;
b = a;
//
var a = 9;
//
var myFirstName = "Natalia";
var myLastName = "Khomich";
//
var a;
var b;
var c;
a = 5;
b = 10;
c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
//
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
//
let catName = "Oliver";
let catSound = "Meow!";
//
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);
//
const per = 10 + 10;
const difference = 45 - 33;
const productOne = 8 * 10;
const quotientOne = 66 / 33;
//
let myVari = 87;
myVar++;
//
let myVar = 11;
myVar--;
//
const ourDecimal = 5.7;
const myDecimal = 5.7;
//
const product = 2.0 * 2.5;
//
const quotient = 4.4 / 2.0;
//
const remainder = 11 % 3;
//
let a = 3;
let b = 17;
let c = 12;
a += 12;
b += 9;
c += 7;
//
let a = 11;
let b = 9;
let c = 3;
a -= 6;
b -= 15;
c -= 1;
//
let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b *= 3;
c *= 10;
//
let a = 48;
let b = 108;
let c = 33;
a /= 12;
b /= 4;
c /= 11;
//
const myStr = 'I am a "double quoted" string inside "double quotes".';
//
const myStrN = "This is the start. " + "This is the end.";
let myN = "This is the first sentence. ";
myStr += "This is the second sentence.";
//
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName;
lastNameLength = lastName.length;

firstLetterOfLastName = lastName;
firstLetterOfLastName = lastName[0];
//
let myStrt = "Jello World";
myStr = "Hello World";
//
const lastName3 = "Lovelace";
const thirdLetterOfLastName = lastName[2];
//
const lastName1 = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
//
const lastName2 = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
//
const myArray2 = ["dog", 5];
//
const myArray1 = [
  [1, 2],
  [3, 4],
];
//
const myArray8 = [50, 60, 70];
const myData = myArray[0];
//
const myArray = [18, 64, 99];
myArray[0] = 45;
//
const myArray7 = [
  ["John", 23],
  ["cat", 2],
];
myArray.push(["dog", 3]);
//
const myArray6 = [
  ["John", 23],
  ["cat", 2],
];
const removedFromMyArray = myArray.pop();
//
const myArray5 = [
  ["John", 23],
  ["dog", 3],
];
const removedFromMyArray1 = myArray.shift();
//
const myArray4 = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();
myArray.unshift(["Paul", 35]);
//
const myList = [
  ["Chocolate Bar", 15],
  ["Coca cola", 10],
  ["Water", 2],
  ["Banana", 6],
  ["Cheese", 3],
];
//
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
//
function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);
//
function timesFive(num) {
  return num * 5;
}
//
const myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//
function myLocalScope() {
  const myVar = 1;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();
console.log("outside myLocalScope", myVar);
//
const outerWear = "T-Shirt";
function myOutfit() {
const outerWear = "sweater";
  return outerWear;
}
myOutfit();
//
let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive () {
  sum = sum+5;
}
addThree();
addFive();
//

