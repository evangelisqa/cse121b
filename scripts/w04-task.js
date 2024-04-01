/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Evangelis Albesa',
    photo: 'images/prof.png',
    favoriteFoods:  ['Bulalo',
    'Sinigang',
      'Salad'],
    hobbies: [
    'Exploring', 
    'Hiking',
    'Reading', 
    'Photography'],

    placesLived:(
        {
            place: "British Columbia",
            length: "2 years"
        },
        {   
            place: "Regina",
            length: "8 years"
        },
        {
            place: "Vancouver",
            length: "2 years"
        }
    )
};



/* Populate Profile Object with placesLive objects */



/* DOM Manipulation - Output */


/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#hoto").alt = myProfile.name;

/* Favorite Foods List*/
document.querySelector("f#avorite-foods").textContent = myProfile;
myProfile.favoriteFoods.forEach(food => {
    let listItem = document.createElement("li");
    listItem.textContent = food;
    favoriteFoodsList.appendChild(listItem);
   
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby =>
{
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbieslist").appendChild(li);
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
