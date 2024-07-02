/*Write a JavaScript function that takes a number as a parameter and throws a custom 
'Error' if the number is not an integer. */

function checkInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error("The provided value is not an integer");
    }
    console.log("The provided value is an integer");
}

try {
    checkInteger(15);  
    checkInteger(18.5); 
} catch (e) {
    console.error(e.message);  
}

try {
    checkInteger('string');
} catch (e) {
    console.error(e.message); 
}
