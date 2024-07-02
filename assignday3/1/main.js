/*1. **Importing and Exporting Modules:**
    - **Question:** Create two modules, mathOperations.js and main.js. In mathOperations.js, define and export two functions: add (which adds two numbers) and subtract (which subtracts one number from another). In main.js, import these functions and use them to add and subtract two numbers, then log the results.
    - **Hint:** Use export in mathOperations.js and import in main.js.*/ 

import { add, subtract } from './mathOperations.js';

const sum = add(10, 5);
console.log(`The sum of 10 and 5 is: ${sum}`);

const difference = subtract(10, 5);
console.log(`The difference between 10 and 5 is: ${difference}`);
