#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to code with Ghulam Sarwar Khan");
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        Message: "Enter your guess number:(Number limit from 1 to 5):",
    },
]);
if (answer.userGuessedNumber === randomnumber) {
    console.log("Congratulations ! You guess a correct number.");
}
else {
    console.log("Sorry, you guessed a wrong number");
}
