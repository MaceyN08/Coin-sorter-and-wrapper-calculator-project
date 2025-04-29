let pennies = 137;
let nickels = 58;
let dimes = 73;       
let quarters = 42;    

const PENNY_VALUE = 0.01;
const NICKEL_VALUE = 0.05;
const DIME_VALUE = 0.10;
const QUARTER_VALUE = 0.25;

const PENNY_WRAPPER_CAPACITY = 50;
const NICKEL_WRAPPER_CAPACITY = 40;
const DIME_WRAPPER_CAPACITY = 50;
const QUARTER_WRAPPER_CAPACITY = 40;

const pennyValue = pennies * PENNY_VALUE;
const nickelValue = nickels * NICKEL_VALUE;
const dimeValue = dimes * DIME_VALUE;
const quarterValue = quarters * QUARTER_VALUE;

const totalValue = pennyValue + nickelValue + dimeValue + quarterValue;

const pennyWrappers = Math.floor(pennies / PENNY_WRAPPER_CAPACITY);
const nickelWrappers = Math.floor(nickels / NICKEL_WRAPPER_CAPACITY);
const dimeWrappers = Math.floor(dimes / DIME_WRAPPER_CAPACITY);
const quarterWrappers = Math.floor(quarters / QUARTER_WRAPPER_CAPACITY);

const remainingPennies = pennies % PENNY_WRAPPER_CAPACITY;
const remainingNickels = nickels % NICKEL_WRAPPER_CAPACITY;
const remainingDimes = dimes % DIME_WRAPPER_CAPACITY;
const remainingQuarters = quarters % QUARTER_WRAPPER_CAPACITY;

console.log("Coin Wrapper Calculator Results:");
console.log("-------------------------------");

console.log(`\nCoin Inventory:`);
console.log(`Pennies: ${pennies}`);
console.log(`Nickels: ${nickels}`);
console.log(`Dimes: ${dimes}`);
console.log(`Quarters: ${quarters}`);

console.log(`\nWrappers Needed:`);
console.log(`Penny wrappers: ${pennyWrappers} (${pennyWrappers * PENNY_WRAPPER_CAPACITY} coins)`);
console.log(`Nickel wrappers: ${nickelWrappers} (${nickelWrappers * NICKEL_WRAPPER_CAPACITY} coins)`);
console.log(`Dime wrappers: ${dimeWrappers} (${dimeWrappers * DIME_WRAPPER_CAPACITY} coins)`);
console.log(`Quarter wrappers: ${quarterWrappers} (${quarterWrappers * QUARTER_WRAPPER_CAPACITY} coins)`);

console.log(`\nRemaining Coins (not filling a wrapper):`);
console.log(`Pennies: ${remainingPennies}`);
console.log(`Nickels: ${remainingNickels}`);
console.log(`Dimes: ${remainingDimes}`);
console.log(`Quarters: ${remainingQuarters}`);

console.log(`\nTotal Value by Coin Type:`);
console.log(`Pennies: $${pennyValue.toFixed(2)}`);
console.log(`Nickels: $${nickelValue.toFixed(2)}`);
console.log(`Dimes: $${dimeValue.toFixed(2)}`);
console.log(`Quarters: $${quarterValue.toFixed(2)}`);

console.log(`\nTotal Value of All Coins: $${totalValue.toFixed(2)}`);