/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
  return number1 + number2;
}

// Function Declaration to get values from HTML form controls and perform addition
function addNumbers() {
  // Get the values of HTML form controls
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);
  
  // Call the add function with the obtained values and assign the result to the sum form element
  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// Add "click" event listener to the button to trigger addNumbers function
document.querySelector('#addNumbers').addEventListener('click', addNumbers);




/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2) {
  return number1 - number2;
};

// Function Expression to get values from HTML form controls and perform subtraction
const subtractNumbers = function() {
  // Get the values of HTML form controls
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  
  // Call the subtract function with the obtained values and assign the result to the difference form element
  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

// Add "click" event listener to the button to trigger subtractNumbers function
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);




/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

// Arrow Function to get values from HTML form controls and perform multiplication
const multiplyNumbers = () => {
// Get the values of HTML form controls
let factor1 = Number(document.querySelector('#factor1').value);
let factor2 = Number(document.querySelector('#factor2').value);

// Call the multiply function with the obtained values and assign the result to the product form element
document.querySelector('#product').value = multiply(factor1, factor2);
};

// Add "click" event listener to the button to trigger multiplyNumbers function
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);




/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
  return number1 / number2;
}

// Function Declaration to get values from HTML form controls and perform division
function divideNumbers() {
  // Get the values of HTML form controls
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);
  
  // Call the divide function with the obtained values and assign the result to the quotient form element
  document.querySelector('#quotient').value = divide(dividend, divisor);
}

// Add "click" event listener to the button to trigger divideNumbers function
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

document.getElementById('getTotal').addEventListener('click', function() {
  // Declare and instantiate a variable to store the subtotal value
  let subtotal = parseFloat(document.getElementById('subtotal').value);
  
  // Check if the membership checkbox is checked
  let isMember = document.getElementById('member').checked;

  // Apply discount if the user is a member
  if (isMember) {
    subtotal *= 0.8; // Apply 20% discount
  }
  
  // Output the total to the total span with two decimals
  document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
});



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').innerHTML = numbersArray.join(', ');

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.getElementById('odds').textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');


/* Output Sum of Multiplied by 2 Array */

const multipliedArrayResult = numbersArray.map(number => number * 2);

// Use reduce() to sum the elements of the multiplied array
const sumOfMultiplied = multipliedArrayResult.reduce((sum, number) => sum + number, 0);

// Assign the sumOfMultiplied to the HTML element with the ID of sumOfMultiplied
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied.toString();