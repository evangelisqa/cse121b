/* W02-Task - Evangelis */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
/* Declare and instantiate a variable to hold your name. Identify the variable as "fullName".*/
let fullname = 'Evangelis Albesa';

/* Declare and instantiate a variable to hold the current year.*/
const currentYear = "2024"

/*Declare and instantiate a variable to hold the file path (location) and file name of the image that you placed in the images folder as a string. Identify the variable as "profilePicture".*/
let profilePicture = "images/profile.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('profile');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullname}`);


/* Step 5 - Array */
const favoriteFoods = ["Salad", "Bulalo", "Beef"];
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;
const newfavoriteFoods = ["salad"];
favoriteFoods.push(newFavoriteFoods);
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;
favoriteFoods.shift(0);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement += `<br>${favoriteFoods}</br>`;















