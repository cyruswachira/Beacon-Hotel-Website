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

    const parentDiv = document.createElement('div')

    parentDiv.classList.add('card')

    const image = document.createElement('img')
    
     image.classList.add("card-img-top ")

     image.height = 200;

     image.width = 200;

     image.position = 'relative'

     image.top = '-230px'

     image.left = '100px'

     image.src = meal.strCategoryThumb

     image.alt = meal.strCategory

     image.style.position = 'relative'

     parentDiv.appendChild(image)

     mealsContainer.appendChild(parentDiv)

}
