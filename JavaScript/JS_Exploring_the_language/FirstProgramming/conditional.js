
console.log(`WORKING WITH CONDITIONAL`);

const listDestinations = new Array(
    `United States`,
    `United Kingdom`,
    `Albania`,
    `Brazil`
);
listDestinations.push(`Ukraine`);
console.log("Possible Destinations : ");

const ageBuyer = 15;
const isAccompanied = true; // type boolean
const havePurchasedTicket = true; 

if (ageBuyer >= 18 || isAccompanied == true) {
    console.log("Bon Voyage");
    listDestinations.splice(2, 1);
}else {
        console.log("underage cannot sell");
}

console.log("Boarding \n\n");
if(ageBuyer >= 18 && havePurchasedTicket) {
    console.log("Bon Voyage");
}else {
    console.log("you can not board");
}

console.log(listDestinations);


//console.log(ageBuyer > 18);
//console.log(ageBuyer < 18);
//console.log(ageBuyer <= 18);
//console.log(ageBuyer >= 18);
//console.log(ageBuyer == 18); 

const salary = 3300.0;

if(salary < 2600.0) {
    console.log(`Your Salary is ${salary}`);
    console.log("Its tax rate is 15%");
    console.log("You can deduct up to R$350");
}
else if(salary < 3750.0) {
    console.log(`Your Salary is ${salary}`);
    console.log("Its tax rate is 22,5%");
    console.log("You can deduct up to R$636,00");
}