document .addEventListener('DOMContentLoaded', () => {

    fetchMeals()


})

const BASE_URL = 'http://localhost:3000/categories'


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




