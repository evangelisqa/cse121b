/* W05: Programming Tasks */

/* Declare and initialize global variables */

/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];
const displayTemples = (temples) => {
    //  Process each temple in the temple array
  temples.forEach(temple => {
    // 1. Create an HTML <article> element
    const article = document.createElement('article');

    // 2. Create an HTML <h3> element and add the temple's templeName property
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;

    // 3. Create an HTML <img> element and set attributes
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;

    // 4. Append the <h3> element and the <img> element to the <article> element as children
    article.appendChild(h3);
    article.appendChild(img);

    // 5. Append the <article> element to the global templesElement variable
    templesElement.appendChild(article);
  });
};

/* async displayTemples Function */
    // Create another function expression called getTemples. Make it an async anonymou, arrow function.
const getTemples = async () => {

/* async getTemples Function using fetch()*/
    // In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above.
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    
    // Convert your fetch response into a JavaScript object (.json) and assign the result to the templeList global array variable you declared in Step 3 above. Make sure the the execution of the code waits here as well until it finishes.
    templeList = await response.json();
  
    // The last statement in the getTemples function calls the displayTemples function and passes it the list of temples (templeList).
    displayTemples(templeList);
  };
  
  // Call the getTemples function to fetch temple data and display it on the webpage
  getTemples();
  


/* reset Function */
// Declare a function expression named reset that clears all of the <article> elements from the templesElement.
const reset = () => {
// Clean all <article> elements from the templesElement
    templesElement.innerHTML = "";
  };

/* filterTemples Function */
    //  Declare a function expression named filterTemples.
const filterTemples = (temples) => {
    //  Call the reset function to clear the output.
    reset();
  
    // Define a variable named filter that obtains the value of the HTML element with the ID of filtered (The pull-down menu).
    const filter = document.querySelector("filtered").value;
  
    // Use a switch statement that uses the filter value as the selector responding to four (4) cases.
    switch(filter) {
      case "utah":
    // "utah": filter for temples where the location contains "Utah" as a string.
        displayTemples(temples.filter(temple => temple.location.toLowerCase().includes("utah")));
        break;
      case "notutah":
    // "notutah": filter for temples where the location does not contain "Utah" as a string.
        displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes("utah")));
        break;
      case "older":
    // "older": filter for temples where the dedicated date is before 1950.
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case "all":
    // "all": no filter. Just use temples as the argument.
        displayTemples(temples);
        break;
      default:
    // If the filter value does not match any case, display all temples by default.
        displayTemples(temples);
    }
  };
  
getTemples();

/* Event Listener */
    // Add a change event listener to the HTML element with an ID of filtered
document.getElementById("#filtered").addEventListener("change", () => { 
    // Call the filterTemples function and send an arrow function result with the templeList as the argument
    filterTemples(templeList);
  });