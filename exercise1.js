// Create a function called formatPenceToPounds that should

// take a number as an input ( representing an amount of money in pence )
// return a string starting with a £ sign and the input number converted to pounds.
// For example, formatPenceToPounds(199) should evaluate to "£1.99"

// In your groups, think carefully about the following things:

// what the parameter name should be
// creating good names for any variables you use
// don't use console.log inside the body of the function
// Call formatPenceToPounds a few times with different inputs and console.log the outputs in order to check your function. 🙂

function formatPenceToPounds(pence) {
    
   return('£' + pence);
}

// let formatPenceToPounds = 199
// formatPenceToPounds = (Math.round(formatPenceToPounds * 100) / 100).toFixed(2)

// console.log(formatPenceToPounds(199))



// const pound = formatPenceToPounds(1.99)

// console.log(formatPenceToPounds());
function printMessage(x) {
  console.log('Hello, nice to meet you ' + x);
}
