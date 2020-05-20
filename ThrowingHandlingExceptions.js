function addNumbers(num, num2) {
    throw "Error" // as the word throw is not a code, it will throw an error
}
addNumbers(12,19);

function addNumbers(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw "Error - num1 and num2 must both be numbers";
    }
    return parseFloat(num1) + parseFloat(num2);  //parseInt only shows digits and parseFloat is shows decimals
}
console.log(addNumbers("12.5a", 9)); // output: 
// D:\Users\Marcel.Gil\Documents\Projects\Lesson 8\ServiceNSWLesson8\ThrowingHandlingExceptions.js:8
//         throw "Error - num1 and num2 must both be numbers";
//         ^
// Error - num1 and num2 must both be numbers

try {
    console.log(addNumbers("12.5a", 9));
} catch(e) {
    console.log(e.message); // .message will only show error above where if there is no .message it will show whole error
} finally {
    console.log("Finally");
}

console.log("This code is still running");