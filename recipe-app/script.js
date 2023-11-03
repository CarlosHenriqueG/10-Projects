let nav = document.getElementById('navigation-recipes')
let navigationRecipes = document.getElementById('navigation-recipes')
let info = document.getElementById('info-recipe')


let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`

fetch(url)
.then(resp => resp.json())
.then(data => {
  try {
    let mealsList = data.meals

    mealsList.forEach((meal) => {
      let createCard = document.createElement('div')
      createCard.classList.add('recipe');
 
      createCard.innerHTML = `
        <img src="${meal.strMealThumb}" />
        <h4>${meal.strMeal}</h4>
      `

      navigationRecipes.appendChild(createCard)
    
      createCard.addEventListener('click', () => {
        detailsRecipe(meal)
        console.log('click')
      })
    })  


    
  } catch (error) {
    console.log(error)
  }
})

function detailsRecipe(meal) {
  let detail =  document.createElement('div')
  detail.classList.add('view-recipe')
  info.innerHTML = ''

  detail.innerHTML = `
  <h1>${meal.strMeal}</h1>
  <img class='improve' src="${meal.strMealThumb}" />
  <p>
    ${meal.strInstructions}
  </p>
  `

  info.appendChild(detail)
}