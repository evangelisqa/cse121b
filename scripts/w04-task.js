/* LESSON 3 - Programming Tasks */

/* Profile Object  */
/* Profile Object  */
let myProfile = {
    name: 'Evangelis Albesa',
    photo: 'images/prof.png',
    favoriteFoods: ['Bulalo', 'Adobo chicken', 'Chicken tinola', 'Pasta'],
    hobbies: ['Travelling', 'Web Design', 'Movies', 'Studying Scriptures', 'Drawing'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: 'Alberta',
    length: '2 Years'
});
myProfile.placesLived.push({
    place: 'Saskatchewan',
    length: '8 Years'
});
myProfile.placesLived.push({
    place: 'British Columbia',
    length: '2 Years'
})


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').setAttribute('alt', myProfile.name);


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;
    document.querySelector('#places-lived').appendChild(dt);
    let dd = document.createElement('dd');
    dd.textContent = placeLived.length;
    document.querySelector('#places-lived').appendChild(dd);
});