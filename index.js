const ramens = [
  { image: "./Images/pexels-alteredsnaps-16068586.jpg", id: "1", name: "Shoyu Ramen", restaurant: "Ichiran", rating: 5, comment: "Delicious!",},
  { image: "/Images/pexels-ryutaro-6249221.jpg", id: "2", name: "Miso Ramen", restaurant: "Menya", rating: 4, comment: "Very flavorful!",},
   { image: "./Images/pexels-minan1398-698549.jpg", id: "3", name: "Tonkotsu Ramen", restaurant: "Ramen-ya", rating: 7, comment: "Good!",},
   { image: "./Images/pexels-nadin-sh-78971847-17952227.jpg", id: "4", name: "Nadin Ramen", restaurant: "Ichiran", rating: 10, comment: "Delicacies",},
   { image: "./Images/pexels-rdne-6646355.jpg", id:'5', name: "Radne Ramen", restaurant: "Menya", rating: 8, comment: "Buriful", }
];


function displayRamens() {
  const ramenMenu = document.getElementById('ramen-menu');
  ramens.forEach(ramen => {
    const img = document.createElement('img'); 
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener('click', () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
}
function handleClick(ramen) {
  const ramenDetail = document.getElementById('ramen-detail');
  ramenDetail.innerHTML = `
    <img src="${ramen.image}" alt="${ramen.name}"/>
    <h2>${ramen.name}</h2>
    <h3>${ramen.restaurant}</h3>
    <p>Rating: ${ramen.rating}</p>
    <p>Comment: ${ramen.comment}</p>
  `;
}


function handleClick(ramen) {
  const detailImage = document.getElementById("detail-image"); 
  const detailName = document.getElementById("detail-name");
  const detailRestaurant = document.getElementById("detail-restaurant");
  const detailRating = document.getElementById("detail-rating");
  const detailComment = document.getElementById("detail-comment");

  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailRating.textContent = `Rating: ${ramen.rating}`;
  detailComment.textContent = `Comment: ${ramen.comment}`;
}

 function addSubmitListener() {
     const form = document.getElementById("new-ramen");
     form.addEventListener("submit", () => {
         preventDefault();
         const newRamen = {
             name:target.name.value,
             restaurant: target.restaurant.value,
             image: target.image.value,
             rating: target.rating.value,
             comment:target.comment.value
         };
         ramens.push(newRamen);
         const img = document.createElement("img");
         img.src = newRamen.image;
         img.alt = newRamen.name;
         img.addEventListener("click", () => handleClick(newRamen));
         document.getElementById("ramen-menu").appendChild(img);
         form.reset();
     });
 }
 
 function main() {
     displayRamens();
     addSubmitListener();
     if (ramens.length > 0) {
         handleClick(ramens[0]);
     }
 }
 
 document.addEventListener("DOMContentLoaded", main);

 




 

