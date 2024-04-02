/* Profile Object  */
let myProfile = {  
    name: 'Evangelis Albesa',
    photo: 'Example',
    favoriteFoods: ['Bulalo', 'adobo chicken', 'Chicken tinola'],
    hobbies: ['Web Design', 'Drawing', 'Studying Scriptures', 'Travelling'],
    placesLived: []
    };
  
  /* Populate Profile Object with placesLive objects */
    
  myProfile.placesLived.push({
    place: 'Saskatchewan',
    length: '8 years'
  });
  myProfile.placesLived.push({
    place: 'Alberta',
    length: '2vyears'
  });
  myProfile.placesLived.push({
    place: 'British Columbia',
    length: '2 years'
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