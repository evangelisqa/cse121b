/* W02-Task - Evangelis */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullname = "Evangelis Albesa";
let currentYear =  new Date().getFullYear();
let profilePicture = "images/profile.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("profile");

/* Step 4 - Adding Content */
nameElement.innerHTML = "<strong>${fullname} </strong>";
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
const favoriteFoods = ["salad", "bulalo", "beef"];
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;
const newfavoriteFoods =  ["salad"];
favoriteFoods.push(newFavoriteFoods);
foodElement.innerHTML+= `<br>${favoriteFoods}</br>`;
favoriteFoods.shift(0);
foodElement.innerHTML +=`<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement +=`<br>${favoriteFoods}</br>`;















