const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  const allIngredients = document.getElementById('ingredients');

  const addFoodList = ingredients.map(item => {
    const createIngredientLi = document.createElement("li");
    createIngredientLi.textContent = item;
    createIngredientLi.classList.add('item');
    return createIngredientLi;
  });
  allIngredients.append(...addFoodList);
  

/*
const buildIngredients = () => {
    const allIngredients = document.querySelector("ul#ingredients");
    allIngredients.appendChild(createingredient);
    for (const ingredient of ingredients) {
        const createingredient = document.createElement("li");
        const createClass = createingredient.classList.add("etem");
        createingredient.textContent = ingredient;
        allIngredients.appendChild(createingredient);

      }
       console.log(allIngredients);
     };

buildIngredients();
*/

