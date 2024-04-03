#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.green("welcome to todo list application"));
while(condition) {
    let addtask = await inquirer.prompt([
    {
        name: "todo",
        type: "input",
        message: chalk.blueBright("why do you want to add in your todo list?")
    },
    {
        name: "addmore",
        type: "confirm",
        message: chalk.blueBright("why do you want to add in your todo list?"),
        default: "false"
    }
    ])
    todos.push(addtask.todo)
    condition = addtask.addmore;
    console.log(chalk.yellow(`your update todo list is ${todos}`))
}

















