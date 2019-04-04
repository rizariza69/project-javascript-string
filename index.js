"use strict"

console.log('Hello World')

const name = 'Brendan Eich'

console.log(`Hello ${name}`)

alert(`Hello ${name}`)

let myVariable = 'I Exist!';

if (myVariable) {
  console.log(myVariable)
} else {
  console.log('The variable does not exist.')
}

let favoriteFood = 'pizza'
let drive = 'bike'

console.log(`i drive ${drive} and eat ${favoriteFood} in the same time`);


if (favoriteFood !== 'pizza' && drive === '') {

  console.log('its not my habit in afternoon');
} else {
  console.log('my habit in afternoon');
}