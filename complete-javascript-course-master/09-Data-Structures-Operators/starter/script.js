'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(time, address, mainIndex, starterIndex);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    mon: {
      open: 12,
      close: 22,
    },
    tue: {
      open: 11,
      close: 23,
    },
    wed: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

const tem = main;
main = secondary;
secondary = tem;
console.log(main, secondary);
// 上面等同下面
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starterFood, mainFood] = restaurant.order(2, 0);
console.log(starterFood, mainFood);

// Nested destructing
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const [m, , [n, o]] = nested;
console.log(m, n, o);

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r); */

// Object
/* const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutation variables
let a = 111;
let b = 999;
const Obj = { a: 23, B: 7, c: 14 };

let { c, d } = { a: 23, b: 7, c: 14 };

// nested Objects
const {
  fri: { open, close },
} = openingHours;
const {
  fri: { open: openT, close: closeT },
} = openingHours;
console.log(open, close);
console.log(openT, closeT);

restaurant.orderDelivery({
  time: '20:30',
  address: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2,
}); */
/* 
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterable: arrays,strings,maps,sets,not Object
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

const ingredients = [
  prompt("Let's make pasta! Ingredient1"),
  prompt("Let's make pasta! Ingredient2"),
  prompt("Let's make pasta! Ingredient3"),
];

// restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Aaron' };
console.log(newRestaurant); */

// Destruction

// SPREAD because on right side of=
/* const arr = [1, 2, ...[3, 4]];
// Rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(others);
console.log(arr);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
console.log(restaurant.mainMenu);
console.log(restaurant.starterMenu);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Function
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

// 先被分散 再被集合
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
 */

// Use any data type, return ANY data type, short-circuiting
/* console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('-----AND-----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// nulllsh: null and undefined (not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
 */
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Aaron',
};

/* rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10; */

/* rest1.numGuests ??= 10;
rest2.numGuests ??= 10; */

/* rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>'; */

/* console.log('===========================================');
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu.entries());
for (const item of menu) {
  console.log(item);
}

// old
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
console.log('===========================================');
// new
for (const [i, ele] of menu.entries()) {
  console.log(`${i + 1}: ${ele}`);
}

for (let i = 0; i < 10; i++) {
  console.log('測試' + i);
}
 */
/* const weekdays = ['mon', 'tue', 'wed'];
const career = {
  company: 'mitfun',
  level: 'normal',
};

const ZhangYuShao = {
  key: 'a',
  name: 'Aaron',
  age: 18,

  // career: career
  // sayhi: function () {
  //   console.log('Hi');
  // },

  // 3 of ES6 enhanced object literals
  career,
  sayhi() {
    console.log('Hi');
  },
  [weekdays[0]]: 'blue',
  [weekdays[1]]: 'red',
  [weekdays[2]]: 'yellow',
};

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon);
// optional chinning
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open;
  console.log(`On ${day}, we opeen at ${open}`);
} */

/* const properties = Object.keys(restaurant.openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days:`;
for (const day of Object.keys(restaurant.openingHours)) {
  openStr += `${day},`;
}
console.log(openStr);

const values = Object.values(restaurant.openingHours);
console.log(values);

const entries = Object.entries(restaurant.openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}

// 介紹Set
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pasta']);
console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Pasta');
console.log(orderSet);
console.log(orderSet[0]); // Error undefined
// orderSet.clear();
for (const order of orderSet) {
  console.log(order);
}
// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique1 = [...new Set(staff)];
const staffUnique2 = new Set(staff);
console.log(staffUnique1);
console.log(staffUnique2);

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(`InterSection:`, commonFoods);
console.log([...commonFoods]);

const allFoods = italianFoods.union(mexicanFoods);
console.log(`Union:`, allFoods);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(`Difference Italy:`, uniqueItalianFoods);
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(`Difference Mexican:`, uniqueMexicanFoods);

const uniqueItalyMexFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalyMexFoods);
// 檢查是否獨立 (無交集) 回傳True或False
console.log(italianFoods.isDisjointFrom(mexicanFoods));

// Map 和Dictionary類似 key可以是任何type
console.log('=================');
const rest = new Map();
rest.set('name', 'ClassicoItaliano');
rest.set(1, 'Firenze,Italy');
rest.set(2, 'Lisbon,Portugal');
console.log(rest.set(3, 'Taipei,Taiwan'));
console.log(rest);
// Set will return new map data
rest.set(true, 'We are open').set(false, 'We are close');
console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get(1));

console.log(rest.has('name'));
rest.delete(1);
console.log(rest);
console.log(rest.size);
// rest.clear();

// not work 兩個[1,2]指向不同的物件
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2]));
// 可以work
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language in the world', 'Hi'],
  [1, 'c'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct!!!'],
  [false, 'Try again'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(`Your answer is ${question.get('correct') === answer}`);
console.log(question.get(question.get('correct') === answer));

console.log([...question]); */

console.log('===============');
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middleseats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'C') console.log('You got the middle seat');
  else console.log('you got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Jonas'));
console.log('Jonas');
console.log(typeof new String('Jonas'));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io\n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97F';
const PriceUS = priceGB.replace('F', '$').replace(',', '.');
console.log(PriceUS);

const announcement =
  'All passengers come to barding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
// 正規表達式
console.log(announcement.replace(/door/g, 'gate'));

// return Booleans
const planeA = 'Airbus A320neo';
console.log(planeA.includes('A320'));
console.log(planeA.includes('Boeing'));
console.log(planeA.includes('Air'));

if (planeA.startsWith('Airbus') && planeA.endsWith('neo')) {
  console.log('Right');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('No aboard');
  else console.log('Welcome aboard');
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// spilt && JOIN
console.log('=====');
console.log('a+very+nice+string'.split('+'));
console.log('Aaron Chen'.split(' '));
const [firstName, lastName] = 'Aaron Chen'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const word of names) {
    /*     namesUpper.push(word[0].toUpperCase() + word.slice(1)); */
    namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica and Smith david');
capitalizeName('aaron chen');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(40, '+'));
console.log('Jonas'.padStart(25, '+'));
console.log(message.padEnd(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4546545456465465654));
console.log(maskCreditCard('232153546513214'));

// Repeat
const message2 = 'Bad weather... All Departues Delayed';
console.log(message2.repeat(5));
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'T'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
