/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.querySelector("#temples");
const templeList =[];

const displayTemples = (temples) =>{
    temples.forEach(temple =>{
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;
        const imgElement = document("img");
        imgElement.scr = temple.imageUrl;
        imgElement.alt = temple.location;

    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    templesElement.appendChild(articleElement);
    });
};

const templeName = [
    {
        templeName: "St. George Utah",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/1280x800/st-george-temple-lds-149536-wallpaper.jpg",
        location: "St George Utah"
    },
    {
        templeName: "Salt Lake",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg",
        location: "Salt Lake City"
    }
];
displayTemples(temples);

/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    try{
        const response = await fetch ("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        const templeDate = await response.json();
        templeList.push(...displayTemples.templeData);

        displayTemples(templeList);
    } catch (error) {
        console.error("error fetching temple data:", error);
    }
};
getTemples();

/* reset Function */
const reset =() => {
    templeElement.innerHTML = "";
};
reset();

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.querySelector("#filtered").value;
    switch (filter){
        case "utah": displayTemples(temples.filter((temple) => temple.location.includes("utah")));
            break;
        case "notutah": displayTemples(temples.filter((temple) => !temple.location.includes("utah")));
            break;
        case "older": displayTemples(temples.filter((temple) => new Date(temple.dedicatedDate) < new Date (1950, 0, 1)));
            break;
        case "all": displayTemples(temples);
            break;
        default: console.error("Invalid filter value:, filter");
    }
};

const templesName = [
    {
        templeName: "St George",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/1280x800/st-george-temple-lds-149536-wallpaper.jpg",
        location: "utah",
        dedicatedDate: "1877, April, 6",
    },

];
filterTemples(templeName);

    const filteredElement = document.querySelector("#filtered");
    filteredElement.addEventListener("change", () => {
        filterTemples(templeList);
    });


/* Event Listener */
