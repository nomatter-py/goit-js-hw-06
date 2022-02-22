const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector('#ingredients');

let ingredientsMarkup = createIngredientsMarkup(); 
ingredientsContainerEl.append(...ingredientsMarkup);

function createIngredientsMarkup() {
  let ingredientsList = ingredients.map((item) => {
    let ingredientEl = document.createElement('li');
    ingredientEl.textContent = item;
    ingredientEl.classList.add('item');
    return ingredientEl;
  });
  return ingredientsList;
}




