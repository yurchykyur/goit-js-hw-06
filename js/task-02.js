const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Завдання 2
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ulIngredients = document.querySelector('#ingredients');

const listOfIngredients = [];

ingredients.forEach(ingredient => {
 const ingredientsItem = document.createElement( 'li');
 ingredientsItem.textContent = ingredient;
 ingredientsItem.classList.add('item');
 listOfIngredients.push(ingredientsItem);
 console.log(ingredientsItem);
})
console.log(listOfIngredients);

ulIngredients.append(...listOfIngredients)

console.log(ulIngredients)
