// Завдання 2

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector('#ingredients');

const makeListOfIngredients = ingredientsList => {
  return  ingredientsList.map(ingredient => {

  const ingredientsItem = document.createElement( 'li');
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add('item');

  return ingredientsItem;
  });

}

const elements = makeListOfIngredients(ingredients);

ulIngredients.append(...elements)

