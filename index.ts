#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBlance = 10000;
let myPin = 1234;
//print welcm messge
console.log(chalk.blue("\n \tWelcome to Wish - ATM Machine\n"));

let pinAnswer = await inquirer.prompt([
{
 name: "pin",
 message: chalk.yellow("Enter your pin code:"),
 type: "number",

}
]);

if(pinAnswer.pin ===myPin){
    console.log(chalk.greenBright("\npin is Correct, Login Successfully!\n"));

    let operationAns = await inquirer.prompt([{
        name: "operation",
         message: "Select an operation:",
          type: "list",
        choices:[ "Withdraw Amount", "Check Balance"]
    }
     ])

       if(operationAns.operation === "Withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                message: chalk.yellowBright("Select a withdrawal methode"),
                type: "list",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]) 
          if(withdrawAns.withdrawMethod === "Fast Cash"){
            let fastcashAns = await inquirer.prompt([
               {
                name: "fastCash",
                message: "Select Amount",
                type: "list",
                choices: ["1000", "2000", "5000","10000", "20000"]
               } 
            ])
            if(fastcashAns.fastCash > myBlance){
                console.log(chalk.red("Insufficent Balance"));

            }
            else{
                myBlance -= fastcashAns.fastCash
                console.log(`${fastcashAns.fastCash} withdraw Successfully`);
                console.log(chalk.green(`\nYour Reamining Balance is: ${myBlance}\n`));
            }
          }


         else if(withdrawAns.withdrawMethod === "Enter Amount"){
            let amountAns = await inquirer.prompt([
                {
                   name:"amount",
                    message: "Enter the Amount withdraw",
                    type: "number"
                }
               ]);
               
               if(amountAns.amount > myBlance){
                   console.log(chalk.red("Insufficient Balance"));
               } 
                else{
                   myBlance -= amountAns.amount;
                   console.log(chalk.yellowBright(`${amountAns.amount} withdraw Successfully!`));
                   console.log(chalk.green(`Your Remaining Balance is ${myBlance}`));
                }

          }

       
    }   
    else if(operationAns.operation === "Check Balance"){
        console.log(chalk.blueBright(`Your Account Balance is ${myBlance}`));
    }
    } else{
        console.log(chalk.redBright("Pin is Incorrect Try Again !"));
    }
    
     