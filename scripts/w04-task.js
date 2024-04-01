/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};
let myProfile = {
    name: "Evangelis Albesa",
    photo: "profile.png",
    favoriteFoods: ["Bulalo", "Sinigang", "Salad"],
    hobbies: ["Exploring", "Hiking", "Reading", "Photography"],
    placesLived:(
        {
            place: "British Columbia",
            length: "2 years"
        },
        {
            place: "Sakatchewan",
            length: "8 years",
        },
        {
            place: "Calgary",
            length: "2 Years"
        }
        
    )
};




/* Populate Profile Object with placesLive objects */



/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name;
document.querySelector("photo").src = myProfile.photo;
document.querySelector("photo").alt = myProfile.name;

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby =>
{
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbiestList").appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(place =>{
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent.Content = place.length;

    let dl = document.querySelector("#places-lived");
    dl.appendChild(dt);
    dl.appendChild(dd);
})


