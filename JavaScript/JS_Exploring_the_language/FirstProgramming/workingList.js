
console.log(`WORKING WITH LIST`);

//const us = `United States`;
//const uk = `United Kingdom`;
//const al = `Albania`; 

const listDestinations = new Array(
  `United States`,
  `United Kingdom`,
  `Albania`,
  `Brazil`
);
listDestinations.push(`Ukraine`);
console.log("Possible Destinations : ");
//console.log ( us, uk, al); 

//listDestinations.splice(1,1);

listDestinations.splice([1]);


console.log (listDestinations); 
