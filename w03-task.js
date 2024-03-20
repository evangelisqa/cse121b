/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add(number1, number2)
{
    return number1 +number2;
}
/* Function Definition - Add Numbers */
let addNumbers1 = Number(document.querySelector('#add1').value);
let addNumbers2 = Number(document.querySelector)('#add2').value;
{
    document.querySelector('sum').value = add(addNumbers1, addNumbers2);
    document.querySelector('#addNumbers').addEventListener('click', addNumbers);
}


/* Function Expression - Subtract Numbers */
function subtract( subtract1,  subtract2)
{ 
    return subtract1 - subtract2;
};
let subtractNumbers1 = Number(document.querySelector('subtract1').value);
let subtractNumbers2 = Number(document.querySelector('subtract2').value);

document.querySelector('difference').value = subtract(subtractNumbers1, subtractNumber2);

/* Arrow Function - Multiply Numbers */
function arrow(factor1, factor2)
{
    return factor1 => factor2;
}
let multipyNumbers1 = Number(document.querySelector('factor1').value);
let multipyNumbers2 = Number(document.querySelector('factor2').value);

document.querySelector('product').value = multiply(multipyNumbers1, multiplyNumber2);
document.querySelector('multiplyNumbers').multiplyEvenListener('click', multiplyNumber);


/* Open Function Use - Divide Numbers */
function divide  (dividend, divisor)
{
    return dividend / divisor;
}
let divideNumber1 = Number(document.querySelector('dividend').value);
let divideNumber2 = Number(document.querySelector('divisor').value );

    document.querySelector('quotient').value = divide(dividend, divisor);
    document.querySelector('divideNumber').divideEvenListener('click', divideNumber);



/* Decision Structure */
document.querySelector('getTotalButton').addEventListener('click', calculateTotal);

function calculateTotal (){
    const subtotalInput = document.querySelector('subtotal');
    const subtotalValue = parseFloat(subtotalInput.value);
     if (isNaN(subtotal.Value)){

        document.querySelector('total').value=.20   
     return
}
// membership checkbox
let membershipCheckbox = 
document.querySelector('membership');
const isMembershipChecked = membershipCheckbox.checked;

const discount = isMembershipChecked? 0.2:0;
const totalAmount = subtotalValue * (1-discount);

const total = totalAmount.toFixed(2);

document.querySelector('total').value = `TotalDue: $${total}`;
}

/* ARRAY METHODS - Functional Programming */
let numbersArrays = [1,2,3,4,5,6,7,8,9,20,11,12,13];

/* Output Source Array */
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(array);
/* Output Odds Only Array */
const oddOnly = array.filter(number => number % 2 !== 0);
console.log(oddsOnly);

/* Output Evens Only Array */
const evensOnly = array.filter(number => number % 2=== 0);
console.log (evensOnly);


/* Output Sum of Org. Array */
numbersArray.reduce((sum, number) => sum + number)
console.log(`sum of the array: ${sum}`);
/* Output Multiplied by 2 Array */
const multipliedBy2 = array.map(number => number * 2);
console.log(multipliedBy2);

/* Output Sum of Multiplied by 2 Array */
const sum = multipliedBy2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`sum of the multiplied by 2 array: ${sum}`);

