/*4. **Object Destructuring:**
    - **Question:** Define an object person with properties name, age, and city. Use object destructuring to extract these properties into individual variables and print them.
    - **Hint:** Use the syntax const { name, age, city } = person. */

const person = {
    fName: 'sony Chaudhary',
    age: 20,
    city: 'dharan'
};

const { fName, age, city } = person;

console.log(`Name: ${fName}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);
