import { Customer } from './Customer.js';
import { AccountCurrent } from './accountCurrent.js';

const customer1 = new Customer("Ricardo", 11122233309);
const customer2 = new Customer("Alice", 88822233309);


const accountCurrentRicardo = new AccountCurrent(1001, customer1);
accountCurrentRicardo.deposit(500);
accountCurrentRicardo.toWithdraw(100);

const accountCurrentAlice = new AccountCurrent(102, customer2);

let value = 200;
accountCurrentRicardo.transfer(value, accountCurrentAlice);

console.log(accountCurrentRicardo);