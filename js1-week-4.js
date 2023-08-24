// Array properties
let arr = [1, 2, 3];
console.log(arr.length);

// Manipulating arrays
let ingredients = ['Flour', 'Water', 'Salt'];
console.log(ingredients[0]);

console.log(ingredients[2]);

console.log(ingredients.length);

// -----------------

const scores = [80, 41, 47];

console.log((scores[2] = 29)); // Change the last score
console.log((scores[3] = 51)); // Add a new score

/*EXERCISE
1. Create an array with the names of the people in your group
2. Console.log out the names
3. How many people are in the group
4. Put someone from another group at the beginning of the array
5. Add someone else to the end of the list */

const groupMembers = [
  'Alex',
  'Zoe',
  'Xander',
  'Duncan',
  'Damian',
  'Bertha',
  'Irene',
  'Samuel',
]; //1

console.log(groupMembers.length); //3
console.log((groupMembers[0] = 'Jimmy')); //4
console.log((groupMembers[5] = 'David')); //5
console.log(groupMembers); //2

console.log(groupMembers.sort());

// Array methods
// 1.sort()
// An array method that sorts the values in an array into ascending alphabetical or numerical order.
const unorderedLetters = ['z', 'v', 'b', 'f', 'g'];
const orderedLetters = unorderedLetters.sort();

const unorderedNumbers = [8, 5, 1, 4, 2];
const orderedNumbers = unorderedNumbers.sort();

console.log(orderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]
console.log(unorderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]

console.log(orderedNumbers); // logs [ 1, 2, 4, 5, 8 ]
console.log(unorderedNumbers); // logs [ 1, 2, 4, 5, 8 ]

// 2.concat()
// Adds (or concatenates) another value or array to the array.
let names = ['James', 'Lillian', 'Rod'];
let myHome = ['malawi', 'south africa'];
let num1 = [1, 2, 39, 4];
let num2 = num1.concat(3);
console.log(num1.concat(100));
console.log(names.concat(myHome));
console.log(num2);

// 3.slice()
// Returns a slice of the array.
let sliceArr = [1, 2, 3, 4, 5];
console.log(sliceArr);
console.log(names.slice(1));
console.log(sliceArr.slice(0, 4));

// 4.includes()
// Returns true if a value is in the array. false if not in the array
const mentors = ['Daniel', 'Alexander', 'Blessings', 'Rob', 'Edgar'];

function isAMentor(name) {
  return mentors.includes(name);
}

console.log('Is Alexander a mentor?');
console.log(isAMentor('Jess')); // logs false
console.log(isAMentor('Alexander')); // logs true

// 5.join()
// Returns all the array values joined together in a string. By default, this method takes no parameters and then the elements are divided with a comma ,. If you provide it with a string parameter though, then it becomes the divider of the elements, like the example below:
//  EXAMPLE 
let joinWords = ['James', 'Lillian', 'Rod'].join();
console.log(joinWords);

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let text = fruits.join(" and ");

console.log(text);

// 6.split()
const splitWord =
  'values takes a pattern and divides this string into an ordered';
const word = splitWord.split(' ')
console.log(word[3]);
  
// EXERCISE
/*Use the array of the people from your table (or breakout room)
Combine it with another array filled with the names from another table
console.log the names in alphabetical order
Create a new value with the 2nd, 3rd and 4th people in it
Create a function that takes a name and an array of names and returns a string. If the name is not in an array, it should return <name> is not sitting at the table with <people in the array>. If the name is in the array, it should return <name> is sitting at the table with <people in the array>. */

const myPeople1 = ['Zoe', 'Best', 'Bertha', 'Duncan', 'Radio', 'Megan']
const myPeople2 = ['Alexander', 'Steve', 'Bev', 'Lillian', 'Yolanda', 'Patrick'];
const myNewArr = [
  myPeople1[1],
  myPeople1[2],
  myPeople1[3],
  myPeople2[3],
  myPeople2[2],
  myPeople2[1],
];


const combine = myPeople1.concat(myPeople2)
let sort = combine.sort()
console.log(myPeople1);
console.log(myPeople2);
console.log(sort);
console.log(combine);
console.log(myNewArr);

// =========

// Array map
function double(number) {
  return number * 2;
}

const numbers = [1, 2, 3,];
const numbersDoubled = numbers.map(double);
console.log(numbersDoubled);

