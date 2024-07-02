/*5. **Array Destructuring:**
    - **Question:** Create an array colors containing the elements "red", "green", and "blue". Use array destructuring to assign the first two elements to variables firstColor and secondColor, and print these variables.
    - **Hint:** Use the syntax const [firstColor, secondColor] = colors. */


const colors = ["red", "green", "blue"];

const [firstColor, secondColor] = colors;

console.log(`First Color: ${firstColor}`);
console.log(`Second Color: ${secondColor}`);
