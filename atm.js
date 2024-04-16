#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 2000;
let my_pin = 78901;
console.log("Welcome to Meezan Bank ATM!");
console.log(`Your account Balance is ${myBalance}`);
let myPin = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number",
    }
]);
if (myPin.pin === my_pin) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Check balance", "Withdraw", "fastcash"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount you want to Withdraw",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining Balance is ${myBalance}`);
        }
        else {
            console.log('Insufficient Balance');
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your Balance is ${myBalance}`);
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
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else {
            console.log('Insufficient Balance');
        }
    }
}
else {
    console.log("Incorrect pin code, Try Again!");
}
console.log('Thank You!');
