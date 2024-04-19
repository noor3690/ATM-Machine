#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 2000;
let my_pin = 78901;
console.log(chalk.blue.bold("Welcome to Meezan Bank ATM!"));
console.log(chalk.green(`Your account Balance is ${myBalance}`));
let myPin = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.green("Enter your pin number"),
        type: "number",
    }
]);
if (myPin.pin === my_pin) {
    console.log(chalk.yellow("Correct pin code!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.green("Please select option"),
            type: "list",
            choices: ["Check balance", "Withdraw", "fastcash"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.green("Enter the amount you want to Withdraw"),
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(chalk.yellow(`Your remaining Balance is ${myBalance}`));
        }
        else {
            console.log(chalk.red('Insufficient Balance'));
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(chalk.green(`Your Balance is ${myBalance}`));
    }
    else if (operationAns.operation === 'fastcash') {
        let fastcash = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Enter select option",
                type: "list",
                choices: ["300", "500", "800", "1000", "1500", "1800", "2000"]
            }
        ]);
        if (fastcash.fastcash <= myBalance) {
            myBalance -= fastcash.fastcash;
            console.log(chalk.green(`Your remaining balance is ${myBalance}`));
        }
        else {
            console.log(chalk.red('Insufficient Balance'));
        }
    }
}
else {
    console.log(chalk.red("Incorrect pin code, Try Again!"));
}
console.log(chalk.blue.bold('Thank You!'));
