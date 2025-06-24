/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Bob";
console.log(firstName);

let jonas_matilda = "jm";
let $function = 27;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher"; */

/* let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 12);
// console.log(typeof "Aaron");

javaScriptIsFun = "Yes!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); */

/* let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1992;
 //const job; 

// var已經過時了
var job = "programmer";
job = "techer";

function testVar() {
  if (true) {
    var a = 1;
  }
  console.log(a); 
  // ✅ 輸出 1，因為 var 作用域是整個 function
  //錯誤： is not defined，因為 let 是 block 作用域
}

testVar();

lastName = "ZhangYuShao";
console.log(lastName); */

/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah, "Save");
// 2**3 means 2 to pwer of 3  = 8
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schemdtmann";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x=x+10
x *= 4; // x=x*4
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah <= 18;
console.log(now - 1991 > now - 2018);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);
 */

/* const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + "years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log("Just a regular string...");
console.log("String with \nmultiple \nlines");
console.log(`String
multiple
lines`); */

/* const age = 19;
if (age >= 18) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); */

// type conversion
/* const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am" + 23 + "years old");
console.log("23" - "10" - "3");

let n = "1" + 1;
n = n - 1;
console.log(n);

// flasy values:0,'',undefined,null,NaN
console.log(Boolean(0), Boolean(""), Boolean(undefined), Boolean(null), Boolean(NaN));
console.log(Boolean({})); // True

const money = 100;
// 自動強制轉型
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is UNDEFINED");
} */

/* const age = 18;
if (age === 18) {
  console.log("You just became an adult:D");
}
// '18'==18   => true   自動轉型
// '18'===18  => false  嚴格相等

const favourite = Number(prompt("What's your favorite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
  console.log("Cool! 23 is an amazing number (==)");
}

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number (strict)");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}
 */

/* const hasDriverLicense = true; // A
const hasGoodVision = false; // B
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive");
} */

/* const hasDriverLicense = true; // A
const hasGoodVision = true; // B
const isTired = true; // C
const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive");
} */

/* const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  default:
    console.log("Not a valid day!");
} */

const age = 23;
age >= 18 ? console.log("I like to drink") : console.log("I can not drink");

const drink = age >= 18 ? "Wine" : "Water";
console.log(drink);
