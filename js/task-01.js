// Завдання 1

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesElem = document.querySelector('#categories');

const countCategories = categoriesElem.querySelectorAll('li.item').length;

console.log(`Number of categories: ${countCategories}`);

const findAnimals =
  categoriesElem.firstElementChild.querySelector('h2').textContent;

console.log('Category: ', findAnimals);

const findAnimalsEl =
  categoriesElem.firstElementChild.querySelectorAll('li').length;

console.log('Elements: ', findAnimalsEl);

const findProducts =
  categoriesElem.firstElementChild.nextElementSibling.querySelector(
    'h2'
  ).textContent;

console.log('Category: ', findProducts);

const findProductsEl =
  categoriesElem.firstElementChild.nextElementSibling.querySelectorAll(
    'li'
  ).length;

console.log('Elements: ', findProductsEl);

const findTechnologies =
  categoriesElem.lastElementChild.querySelector('h2').textContent;

console.log('Category: ', findTechnologies);

const findTechnologiesEl =
  categoriesElem.lastElementChild.querySelectorAll('li').length;

console.log('Elements: ', findTechnologiesEl);
