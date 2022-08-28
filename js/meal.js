const loadMels = (menu) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${menu}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}
const displayMeals = meals => {
    console.log(meals);
    const mealContainer = document.getElementById('meal-constainer');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealsDiv = document.createElement('div');
        mealsDiv.classList.add('col');
        mealsDiv.innerHTML = `
                       <div onclick='loadId(${meal.idMeal})' class="card h-100">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${meal.strMeal}</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                      </div>
        
        `;
        mealContainer.appendChild(mealsDiv);

    });

}
const searchFood = () => {
    const foodInput = document.getElementById('search-food');
    const search = foodInput.value;
    loadMels(search);

}

const loadId = idmeal => {
    console.log(idmeal);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${idmeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.meals[0]));
}

loadMels('');