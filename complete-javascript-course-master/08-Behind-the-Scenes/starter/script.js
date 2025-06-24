'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     let output = `${firstName} are age ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       /* output = 'new Output'; */
//       const output = 'new Output';
//     }

//     /*     console.log(str); // Error */
//     console.log(millenial);
//     /* add(2, 3); // strict下是 Error */
//     // var 的參數是 function scoped 不會被if的block阻擋
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

/* console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b; */

/* console.log(age); Error */
/* printAge()   Error */

/* console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge; */

//let firstName = 'Matilda';
/* var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // solution1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // solution2
    const isMillenial = () => {
      console.log(this);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
}; */

/* jonas.greet();
jonas.calcAge(); */

const Jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = Jessica;
marriedJessica.lastName = 'Davis';

console.log('Before:', Jessica);
console.log('After:', marriedJessica);

// Jessica = {}; //Error

const Jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// shallow copy
const Jessica2Copy = { ...Jessica2 };
Jessica2Copy.lastName = 'Davis';

Jessica2Copy.family.push('Mary');
Jessica2Copy.family.push('Aaron');

console.log(Jessica2Copy, Jessica2);

// deep copy
const jessicaClone = structuredClone(Jessica2);
jessicaClone.family.push('Frank');
jessicaClone.family.push('Apple');

console.log(jessicaClone, Jessica2);
