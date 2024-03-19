/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add(number1, number2)
{
    return number1 +number2;
}
/* Function Definition - Add Numbers */
let addNumbers1 = Number(document.querySelector('add1').value);
let addNumbers2 = Number(document.querySelector)('add2').value;
{
    document.querySelector('sum').value = add(4, 4);
    document.querySelector('addNumbers').addEventListener('click', 8);
}

/* Function Expression - Subtract Numbers */
function subtract(subtract1, subtract2)
{
    return subtract1 - subtract2;
}

let subtractNumbers1 = Number(document.querySelector('subtract1').value);
let subtractNumbers2 = Number(document.querySelector('subtract2').value);
{
    document.querySelector('difference').value = subtract(subtractNumbers1, subtractNumber2);
    document.querySelector('subtractNumbers').subtractEvenListener('click', subtractNumbers);
}


/* Arrow Function - Multiply Numbers */
function arrow(factor1, factor2)
{
    return factor1 => factor2;
}
let multipyNumbers1 = Number(document.querySelector('factor1').value);
let multipyNumbers2 = Number(document.querySelector('factor2').value);
{
    document.querySelector('product').value = multiply(multipyNumbers1, multiplyNumber2);
    document.querySelector('multiplyNumbers').multiplyEvenListener('click', multiplyNumber);
}

/* Open Function Use - Divide Numbers */
function divide  (dividend, divisor)
{
    return dividend / divisor;
}
let divideNumber1 = Number(document.querySelector('dividend').value);
let divideNumber2 = Number(document.querySelector('divisor').value );
{
    document.querySelector('quotient').value = divide(dividend, divisor);
    document.querySelector('divideNumber').divideEvenListener('click', divideNumber);
}


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
let arrayElement = document.querySelector('#array');

const oddNumbers = number.filter(num => num % 2 !==0);
document.querySelector('#array').innerHTML = numbersArray.filter(number => number % 2=== 0);
numbersArray.reduce((sum, number) => sum + number)
const multipliedNumbers = numbers.map(num => num *2);

const sumOfMultiplied = multipliedNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('sumOfMultiplied').textContent = `Sum of multiplied Arrays: ${sumOfMultiplied}`;

/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
