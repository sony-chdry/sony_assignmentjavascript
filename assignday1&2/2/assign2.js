/*Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
*/ 

function delayedCallback(callback) {
    setTimeout(callback, 2000);
}

function sayHello() {
    console.log("Hello after 2 seconds!");
}

delayedCallback(sayHello);
