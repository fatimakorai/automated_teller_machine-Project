import inquirer from "inquirer"; //inquirer requires 3 things must you can add more but it requires 3 
// (necessary)

let myBankBalance = 20000;
let myPinNum = 5678;

let pinAnswer = await inquirer.prompt(

[

    {
    name: 'pin',
    message: 'enter your pin:', //we use square [] brackets when we have multiple lines.
    type: "number"              //we call it array.

    }

]

) 

if (pinAnswer.pin === myPinNum) {

    console.log("Correct pin code!")


let operationAns = await inquirer.prompt(

    [
        {
            name: "operation",
            message: "please select an option!",
            type: "list", //if you have a list in type then you have to write 4
            choices: ["withdraw", "check balance", "past cash"] //choice"s" means multiple so use array sqbt[]
        }
    ]
);

    console.log(operationAns)

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: 'amount',
                    message: 'enter your amount',
                    type: 'number'
                }
        
            ]

        
        );


        myBankBalance -= (amountAns.amount)
        console.log("Your current balance is " + myBankBalance);

    }


    else if (operationAns.operation === "check balance") {

        console.log(`'Your balance is: ' ${myBankBalance}`)
    }

    else if (operationAns.operation === "past cash") {
        console.log(`"Your Past Cash is: " ${myBankBalance}`)
    }
}




else {
    console.log("Incorrect pin code.")
}



