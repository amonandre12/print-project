// The carrousel logique 
const prevBtn = document.getElementById('prevBtn') ; 
const nextBtn = document.getElementById('nextBtn')

// The Array 
const images  = [
    {
       image : 'images/slide2.jpg', 
       text1 : 'Tirages haute définition grand format' , 
       text2 : 'pour vos bureaux et events'
    } , 

    {
        image : 'images/slide3.jpg', 
        text1 : 'Grand choix de couleurs' , 
        text2 : 'de CMJN aux pantones'
    } , 

    {
        image :  'images/slide4.png', 
        text1 : 'Autocollants' , 
        text2: 'avec découpe laser sur mesure'
    }   
]

const imgElement = document.getElementById('carrouselImage') ; 
const caption = document.getElementById('caption') ; 

// The current index 
let index = 0 //position actuelle de l'image ; 


// Afficher image + texte
function afficheImage() {
    imgElement.src = images[index].image;
    caption.innerHTML = `
       <h2>${images[index].text1}</h2>
       <p>${images[index].text2}</p>
    `;
} ; 

nextBtn.addEventListener('click' , function() {
  index++ ; 
  if(index >= images.length) {
    index = 0
  }
  afficheImage() ; 
}) ; 

prevBtn.addEventListener('click' , function () {
    index-- ; 
    if(index < 0) {
        index = images.length - 1
    }
    afficheImage() ; 
}) ; 