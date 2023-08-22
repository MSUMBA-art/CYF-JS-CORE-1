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

const groupMembers = ['Alex','Zoe', 'Xander', 'Duncan', 'Damian', 'Bertha', 'Irene', 'Samuel']; //1

console.log(groupMembers.length); //3
console.log(groupMembers[0] = "Jimmy"); //4
console.log(groupMembers[5] = 'David'); //5
console.log(groupMembers); //2

console.log(groupMembers.sort());

// Array methods
// 1.sort() 
// An array method that sorts the values in an array into ascending alphabetical or numerical order.
const unorderedLetters = ["z", "v", "b", "f", "g"];
const orderedLetters = unorderedLetters.sort();

const unorderedNumbers = [8, 5, 1, 4, 2];
const orderedNumbers = unorderedNumbers.sort();

console.log(orderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]
console.log(unorderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]

console.log(orderedNumbers); // logs [ 1, 2, 4, 5, 8 ]
console.log(unorderedNumbers); // logs [ 1, 2, 4, 5, 8 ]

// 2.concat()
// Adds (or concatenates) another value or array to the array.
let names = ['James', 'Lillian', 'Rod']
let myHome = ["malawi", 'south africa']
let num1 = [1, 2, 39, 4]
let num2 = num1.concat(3)
console.log(num1.concat(100));
console.log(names.concat(myHome));
console.log(num2);

// 3.slice()
// Returns a slice of the array.
let sliceArr = [1, 2, 3, 4, 5]
console.log(sliceArr);
console.log(names.slice(1));
console.log(sliceArr.slice(0, 4));

// .includes()
// Returns true if a value is in the array. false if not in the array
const mentors = ["Daniel", "Alexander", "Blessings", "Rob", "Edgar"];

function isAMentor(name) {
  return mentors.includes(name);
}

console.log("Is Alexander a mentor?");
console.log(isAMentor("Jess")); // logs false
console.log(isAMentor("Alexander")); // logs true

