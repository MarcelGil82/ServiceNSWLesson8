//  Default Values in Method
//  1. Create a method called addNumbers. The function should take 2 numbers as its parameters and return the sum of those numbers. 
// Both parameters should default to 0 if they are not provided.

function addNumbers (num1 = 0, num2 = 0) {
    return num1 + num2;
}
// console.log(addNumbers())

// // 2. Create a method called sayHello with 2 parameters, name and greeting. 
//     // The function should log the greeting followed by the name. 
//     // The greeting parameter should default to "Hello".

function sayHello(name, greeting = "Hello") {
    // console.log(`${greeting} ${name}`)
}
sayHello("Marcel")

// ArrowFunctions
// 1 Convert this function to an arrow function
// function multiplyNumbers(num1, num2) {
//     return num1 * num2;
// }
// const multiplyNumbers = function(num1, num2) {
//     return num1 * num2;
// }
// const multiplyNumbers = (num1, num2) => {
//     return num1 * num2;
// }
// const multiplyNumbers = (num1, num2) => num1 * num2;

// console.log(multiplyNumbers(5, 4))

// 2 Convert this function to an arrow function

// function personOver40(person) {
//     return person.age > 40;
// }

const personOver40 = person => person.age > 40;

let person = {
    firstName: "Marcel",
    lastName: "Gil",
    age: 50
}
// console.log(personOver40(person));

// 3 Convert this function to an arrow function

// function getFullName(person) {
//     return `${person.firstName} ${person.lastName}`;
// }

const getFullName = (person) => `${person.firstName} ${person.lastName}`;

// console.log(getFullName(person))

// 4 Convert this function to an arrow function
const getPersonTitle = person => {
    if (person.preferedTitle) {
        return person.preferedTitle
    } else if (person.gender == "male") {
        return "Mr.";
    } else if (person.gender == "female") {
        if (person.maritalStatus == "married") {
            return "Mrs.";
        } else if (person.maritalStatus == "unmarried") {
            return "Miss";
        } else {
            return "Ms."
        }
    } else {
        return "Mx."
    }
}

person.preferedTitle = "Mister";
// console.log(getPersonTitle(person));

// Throwing and Handling Excpetions

// 1. Create a function called divide that takes 2 numbers as parameters. 
// The function should divide the first number by the second number and return the result. 
// If the second number is a 0, the function should throw an Error object.

function divide (num1, num2) {
    if (num2 == 0) {
    throw "Error: num2 should be > 0"; 
    // for e.message
    // throw new Error ("Error: num2 should be > 0");
    }
    return parseFloat(num1) / parseFloat(num2);
}
// console.log(divide(15, 0))

// 2.

try {
    console.log(divide(10, 0));
} catch (e) {
    console.log(e.message);
}