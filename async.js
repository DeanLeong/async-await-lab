// Async Await Lab
// (API Docs)[https://recipix.app/api/docs]
// PART 1: Read Recipe Name

findRecipes('banana+nut+bread');
async function findRecipes(recipeName) {
  // read recipe
  const node = document.getElementById( 'recipes' );
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  };
  try {
    let response = await axios.get(
      `https://recipix.app/api/search/?q=${recipeName}`
    );

    // PART 4 - Display multiple recipes
    // Added to previous functions
    const allRecipes = response.data.results;
    allRecipes.forEach(recipe => {
      showIngredients(recipe);
    })
  } catch(err) {
    console.log(err);
  }
}

// PART 2: Read Recipe Ingredients
function showIngredients(recipe) {
  // create an HTML card string
  let card = `<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title" id="recipe-title">${recipe.title}</h5>
            <ul class="card-text" id="recipe-ingredients-${recipe.id}"></ul>
            <a href="${recipe.url}" id="recipe-url" class="btn btn-primary">Learn more</a>
          </div>
        </div>`;
  // inserts card string as HTML node.
  document.getElementById('recipes').insertAdjacentHTML( 'beforeend', card );
  
  // PART 3: Display Recipe from Ingredients

  // For each ingredient displayed, add a `click` event listener that
  // will search for new recipes, using the selected ingredient.

  // show the ingredients
  let ingredients = recipe.ingredients;
  ingredients.forEach(function(ingredient) {
    let listItem = document.createElement('li');
    listItem.innerHTML = ingredient;
    listItem.addEventListener('click', function(event) {
      findRecipes(ingredient);
    });
    document.getElementById(`recipe-ingredients-${recipe.id}`).append(listItem);
  });
}

// PART 5 - Display Search bar results

let searchBar = document.getElementById("recipe-form");
searchBar.addEventListener('submit', function(event) {
  event.preventDefault();
  var text = document.getElementById("recipe-search").value;
  findRecipes(text);
})

// Try to display recipes using a search bar for text input.
// HINT: Start by uncommenting the search bar in index.html
