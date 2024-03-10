/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullname = "Evangelis Albesa";
let currentYear =  "2024";
let profilePicture = "images.jpeg"

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("prof");

/* Step 4 - Adding Content */
nameElement.innerHTML = "<strong>${fullName}</strong>";
nameElement.textContent = currentYear;
imageElement.setAttribute("scr", profilePicture);






/* Step 5 - Array */






