
console.log(`WORKING WITH LOOPS`);

const listDestinations = new Array(
    `United States`,
    `United Kingdom`,
    `Albania`,
    `Brazil`
);

listDestinations.push(`Ukraine`);


const ageBuyer = 15;
const isAccompanied = true; // type boolean
let havePurchasedTicket = false;
const destiny = "Brazil";

console.log("Possible Destinations : ");
console.log(listDestinations)

const youCanBuy = ageBuyer >= 18 || isAccompanied == true;

let counter = 0;
let destinyExist = false;
while ( counter < 5 ) {
    if(listDestinations[counter] == destiny) {
        destinyExist = true; 
        break;
    }
    counter += 1;
}

console.log("Destiny Exist :", destinyExist);

if (youCanBuy && destinyExist) {
    console.log("Bon voyage");
}else {
    console.log("Sorry We Had an Error");
}


for(let i = 0 ; i <3 ; i++){
    if(listDestinations[counter] == destiny){
        destinyExist = true;
        }
        console.log("instruction for");
        break;
}