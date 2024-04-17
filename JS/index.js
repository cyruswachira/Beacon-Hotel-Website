document .addEventListener('DOMContentLoaded', () => {

    fetchMeals()


})

const BASE_URL = 'www.themealdb.com/api/json/v1/1/categories.php'


function fetchMeals(){

     fetch(`${BASE_URL}` , {
        method: 'GET',

        headers: {
            'Content-Type': 'application/json'
        }

     })
     .then(res => res.json())
     .then(meals => {
        meals.forEach((meal) => renderMeal(meal))
     })

     .catch(err => {
        console.log(err)
     })
    
}

function renderMeal(meal){

    const mealsContainer = document.querySelector('#meals')

    const mainDiv = document.createElement('div')

    mainDiv.classList.add('card')

    mainDiv.style.width = '320px';

    mainDiv.style.height = '310px';

    mainDiv.style.backgroundColor = '#6c757d';

    const image = document.createElement('img')
    
     image.classList.add('card-img-top','mt-2');

     image.height = 200;

     image.width = 200;

     image.src = meal.strCategoryThumb

     image.alt = meal.strCategory

     mainDiv.appendChild(image)

     const cardBody = document.createElement('div')

     cardBody.classList.add('card-body')

     const cardTitle = document.createElement('h5')

     cardTitle.classList.add('card-title')

     cardTitle.innerText = meal.strCategory

     const button = document.createElement('button')

     button.classList.add('btn','btn-primary')

     button.textContent = 'Place Order';

     button.style.backgroundColor = '#f00';
    
    button.addEventListener('click', () => {
    alert('Order placed');
    });

     cardBody.appendChild(cardTitle )

     document.body.appendChild(button);

     cardBody.appendChild(button)

    mainDiv.appendChild(image)

    mainDiv.appendChild(cardBody)

     mealsContainer.appendChild(mainDiv)

}


const menuButton = document.querySelector('.view-button');
menuButton.addEventListener('click', () => {
  const mealsSection = document.getElementById('meals');
  window.scrollTo({
    top: mealsSection.offsetTop,
    behavior: 'smooth'
  });
});

const menulink =  document.querySelector('.menu-link')

menulink.addEventListener('click', () => {
   const mealsSection = document.querySelector('.hotel-menu');
   window.scrollTo({
     top: mealsSection.offsetTop,
     behavior: 'smooth'
   });
 menulink.classList.add('active')
})

const aboutlink = document.querySelector('.about-link')

aboutlink.addEventListener('click', () =>{
   const aboutSection = document.querySelector('.about-container');
   window.scrollTo({
     top: aboutSection.offsetTop,
     behavior: 'smooth'
   });
   aboutlink.classList.add('active')

})

const homelink = document.querySelector('.home-link')

homelink.addEventListener('click', () =>{

   const homeSection = document.querySelector('.lobby');
   window.scrollTo({
      top: homeSection.offsetTop,
      behavior: 'smooth'
   })
   homelink.classList.add('active')
})

const contactlink = document.querySelector('.contact-link')

contactlink.addEventListener('click', () =>{

   const contactSection = document.querySelector('.contact-container');
   window.scrollTo({
      top: contactSection.offsetTop,
      behavior: 'smooth'
   })
   contactlink.classList.add('active')
})




