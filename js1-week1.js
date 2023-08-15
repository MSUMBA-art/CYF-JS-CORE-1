console.log('Hello World!\t');

console.log('Hallo, dunial\n');
console.log('Ciao, mondo\n');
console.log('Hola, mundo\n');

// VARIABLES
const greeting = 'Good Morning My Friend';
console.log(greeting);

// STRINGS TYPEOF
const colors = 'blue, yellow';
// const colorsTypeOf = typeof colors;
// console.log(colorsTypeOf);
console.log(typeof colors); //works the same

// String concatenation
// Here is an example using the plus operator to concat strings

const greetingStart = 'Hallo my name is ';
const MyName = 'Alexander';

const greetings = greetingStart + MyName;

console.log(greetings);

// Here is example using the String interpolation to concat strings
const startGreeting = 'Hello';
const firstName = 'Alexander Junior';
const secondName = 'Msumba';

const fullGreetings = `${startGreeting}, my name is ${firstName} ${secondName}`;
console.log(fullGreetings);

// NUMBERS
const birthYear = 1983;
const thisYear = 2023;
const age = thisYear - birthYear;
console.log(`${firstName} ${secondName} is ${age} years old`);

// Floating point numbers
const numberOfTrainees = 15;
const numberOfMentors = 8;
const totalNumber = numberOfTrainees + numberOfMentors;
console.log(`Total number of trainees and mentors: ${totalNumber}`);

const percentOfTrainees = (100 / totalNumber) * numberOfTrainees;
const percentOfMentors = (100 / totalNumber) * numberOfMentors;
const roundTrainees = Math.round(percentOfTrainees);
const roundMentors = Math.round(percentOfMentors);
console.log(
  `Percentage of trainees: ${roundMentors}% \n Percentage of mentors: ${roundTrainees}`
);
