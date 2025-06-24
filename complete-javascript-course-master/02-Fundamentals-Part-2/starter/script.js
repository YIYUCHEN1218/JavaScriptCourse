"use strict";
/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive");
 */
/* function logger(msg) {
  console.log(msg);
}

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juce with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
 */

// Function declaration
/* function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1997);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1997);

// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1997);

console.log(age1, age2, age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1997, "Bob")); */

/* function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `juce with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}
const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);
 */

/* const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return 0;
  }
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike")); */

/* const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtamn", 2037 - 1991, "teacher", friends];
console.log(jonas);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1991, 1984, 2008, 2020];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
const ages = [age1, age2, age3];
console.log(ages);
 */
/* const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Aaron");
console.log(friends);
console.log(newLength);

friends.unshift("ZhangYuShao");
friends.unshift("ZhangYuShao");
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("ZhanhYuShao"));
console.log(friends.indexOf("01010101"));

console.log(friends.includes("ZhanhYuShao"));
console.log(friends.includes("01010101")); */

/* const jonas = {
  firstName: "Jonas",
  lastName: "Schemedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Peter", "Steven", "Aaron"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Jonas");

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request!");
}

jonas.location = "Portugal";
jonas["twitter"] = "@123456";
console.log(jonas); */

/* const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const jonas = {
  firstName: "Jonas",
  lastName: "Schemedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Peter", "Steven", "Aaron"],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  calcAge: function () {
    return 2037 - this.birthYear;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${
      this.hasDriverLicense ? "a" : "no"
    } driver's license`;
  },
};

console.log(jonas.getSummary()); */
// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));
// console.log(jonas["calcAge"](1991));

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");

/* for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
 */

/* const types = [];
const jonasArray = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", ["Michael", "Peter", "Steven"], true];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages); */

/* const jonasArray = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", ["Michael", "Peter", "Steven"], true];
console.log("===Only Strings===");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
console.log("===Break Numbers===");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
} */
/* const jonasArray = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", ["Michael", "Peter", "Steven"], true];
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`===== Starting exercise ${exercise} =====`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`===== Exercise ${exercise} : Lifting weight repetition ${rep}`);
  }
}
 */

/* let rep = 1;
while (rep <= 10) {
  console.log(`Exercise : ${rep}`);
  rep++;
} */

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end");
}
