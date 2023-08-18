// Create a function called isEven that should

// take a number as an input
// return a boolean indicating if the number is even or odd
// Remember to avoid using console.log inside the function itself

// E.g. isEven(100) should return true E.g. isEven(53) should return false

// Call your function with a number of different inputs to check your function is working as expected. 😄

// Bonus: Can you ensure your function doesn't use an if statement for this exercise 😎
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(100));
console.log(isEven(53));
console.log(isEven(10));
console.log(isEven(50));
console.log(isEven(19));
console.log(isEven(13));

// Conditionals;
let isHappy = true;

if (isHappy) {
  console.log('I am happy');
} 

function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number`;
  }
}

console.log(numberChecker(100)) 

function myMood(mood) {
  if (mood === 'happy') {
    return `${mood} Good job, you're doing great!`;
  } else if (mood === 'sad'){
    return `${mood} Every cloud has a silver lining`;
  } else if (mood === Number) {
    return `${mood} Beep, Beep`
  }
}

console.log(myMood("sad"));

// Logical Operators 
let num = 10;

function satisfiesRequirements(num) {
  if (num > 3 && num < 10) {
    return true;
  }

  return false;
}

console.log(satisfiesRequirements(9));

let i = 0;
while (i < 20) {
  // someFunction(i);
   i++;
}
 
console.log(i);

let myName = "Alexander";
myName.length; //5
console.log(myName.length); 