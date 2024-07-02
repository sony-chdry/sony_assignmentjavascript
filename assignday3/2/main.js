/*2. **Template Literals:**
    - **Question:** Write a program that takes a user's first name and last name as inputs and prints a greeting message using template literals. For example, if the input is John and Doe, the output should be Hello, John Doe!.
    - **Hint:** Use backticks () to create the template literal and ${} to embed expressions. */

function getUserInput(question) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => readline.question(question, ans => {
        readline.close();
        resolve(ans);
    }));
}

async function main() {
    const firstName = await getUserInput("Enter your first name: ");
    const lastName = await getUserInput("Enter your last name: ");
 
    
    console.log(greetingMessage);
}

main();
