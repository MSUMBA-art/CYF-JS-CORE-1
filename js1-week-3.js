"use strict mode"

function getFalsiness(value) {
  if (value) {
    return 'Truthy';
  } else {
    return 'Falsy';
  }
}

console.log(getFalsiness(9))