const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];


const buildIngredients = () => {
    const allIngredients = document.querySelector("ul#ingredients");
    for (const ingredient of ingredients) {
        const createingredient = document.createElement("li");
        const createClass = createingredient.classList.add("etem");
        createingredient.textContent = ingredient;
        allIngredients.appendChild(createingredient);
      }
       console.log(allIngredients);
     };

buildIngredients();