#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "First_number",
        message: "Enter your first number:"
    },
    {
        type: "number",
        name: "Second_number",
        message: "Enter your second number:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "Select Operator:"
    },
]);
const { First_number, Second_number, operator } = answer;
if (First_number && Second_number && operator) {
    let result = 0;
    if (operator === "+") {
        result = First_number + Second_number;
    }
    else if (operator === "-") {
        result = First_number - Second_number;
    }
    if (operator === "*") {
        result = First_number * Second_number;
    }
    if (operator === "/") {
        result = First_number / Second_number;
    }
    console.log("Result: ", result);
}
else {
    console.log("Enter valid inputs");
}
