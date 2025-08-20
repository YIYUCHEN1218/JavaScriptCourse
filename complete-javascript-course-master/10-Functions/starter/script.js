'use strict';

const bookings = [];
//ES6 才可以使用參數預設的方法
const createBooking = function (
  flightNum,
  numPassengers = 2,
  price = 199 * numPassengers
) {
  /*   //ES5做法
  numPassengers = numPassengers || 1;
  price = price || 199; */

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('AAron123', 100, 500);
createBooking('AAron456', 100);
createBooking('Aaron789', undefined, 1000);

const flight = 'LH123';
const jonas = {
  name: 'Jonas Schemedmann',
  passport: 2121459284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 2121459284) {
    alert('CheckIn');
  } else {
    alert('Wrong passport!');
  }
};

/* checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
 */

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

/* newPassport(jonas);
checkIn(flight, jonas);
console.log(flight);
console.log(jonas); */

console.log('=========');

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  console.log(first);
  console.log(others);
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher-order function
const transformer = function (str, fn) {
  console.log(`Ori string: ${str}`);
  console.log(`Transfornmed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('GOGOGO');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greet2 = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};
const greet3 = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Aaron');
greeterHey('Jonas');

const greeterHi = greet('Hi');
greeterHi('Aaron');
greeterHi('Jonas');

greet('Hello!')('Aaron');
greet2('Hello!!')('Aaron');
greet3('Hello!!!')('Aaron');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // bookL function(){} 相等
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Aaron');
lufthansa.book(635, 'John');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// 因為This 不能用
// book(23, 'WWW');

// 把this綁到surowings上
book.call(eurowings, 23, 'ABCCE');
console.log(eurowings);

book.call(lufthansa, 23, 'Merry');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss airline',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 458, 'Swer');

const flightData = [583, 'Aaron'];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);

//Bind 回傳一個綁定指定物件的新方法 然後可使用此方法
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(99, '01');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('23MAN');
bookEW23('Cooper');

lufthansa.planes = 300;
lufthansa.buyplane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// bind 不只能綁this 所有參數都能綁
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

//For Test
const addTaxRateFull = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addTaxRate = rate => value => rate * value;
const addVAT2 = addTaxRate(0.23);

console.log('===============');

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//IIFE immediately Invoked function Expressions
// 把function 用 () 包圍 強制轉成expression 然後使用function() 執行
(function () {
  console.log('This will never run again');
})();
// 也可以這樣寫
(() => console.log('This will never run again'))();

console.log('===============');
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

// Example1
console.log('===============');

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

console.dir(f);

//Example2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${wait} seconds`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
};

boardPassengers(180, 3);
