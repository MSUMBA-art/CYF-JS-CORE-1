'use strict mode';

function getFalsiness(value) {
  if (value) {
    return 'Truthy';
  } else {
    return 'Falsy';
  }
}

console.log(getFalsiness(9));

const getTruthiness = (value) => (value ? 'Truthy!' : 'Falsy');

console.log(getTruthiness(getTruthiness(0)));

// Arrays;
const mentor1 = 'Daniel';
const mentor2 = 'Irene';
const mentor3 = 'Rares';

console.log(mentor1 + ',', mentor2 + ',', mentor3, '.');

// good way of using arrays
const mentors = ['Daniel', 'Irene', 'Rares'];
console.log(mentors);

const trainees = ['Ahmed', 'Maria', 'Atanas', 'Nahidul', 'Jack'];

console.log(trainees[0]); // "Ahmed"
console.log(trainees[3]); // "Nahidul"

// You can also assign new values to parts of an array:
const trainers = ['Ahmed', 'Maria', 'Atanas', 'Nahidul', 'Jack'];

console.log(trainers[0]); // "Ahmed"
console.log(trainers[3]); // "Nahidul"
//  EXERCISE
const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];

console.log(fruits);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[5]);
console.log(fruits[0]);
console.log((fruits[1] = 'raspberry'));
console.log(fruits[2]);
console.log((fruits[4] = 'pineapple'));

// EXERCISE
// Complete this function so that, if the second element in the array contains the name "Amy", it returns "Second element matched!"
const lisOfNames = ['Ale', 'Joe', 'Amy'];

function secondMatchesAmy(array) {
  if (lisOfNames[2] === 'Amy') {
    return 'Second element matched!';
  }
  return 'Second element not matched';
}

console.log(secondMatchesAmy());

//  Using for loops with arrays

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

for (let i = 0; i < daysOfWeek.length; i++) {
  // const dayMessage = 'day is: ' + daysOfWeek[i];
  // const indexMessage = 'index is: ' + i;
  // console.log(indexMessage, dayMessage);

  console.log(daysOfWeek[i], "\n");
}


//EXERCISE;
// Write a function which takes your trainees array as an input. In the function, use a for loop to iterate over the array and print the name of each trainee to the console.
const listOfTrainees = [
  'Alex',
  'Irene',
  'Samuel',
  'Bertha',
  'Jacob',
  'Lillian',
];

for (let i = 0; i < listOfTrainees.length; i++) {
  console.log(listOfTrainees[i]);
}
