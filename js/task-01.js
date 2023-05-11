// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).

const categoriesElem = document.querySelector('#categories');

const countCategories = categoriesElem.querySelectorAll('li.item').length;
console.log(`Number of categories: ${countCategories}`);

const categoriesElemItems = categoriesElem.querySelectorAll('li.item');

categoriesElemItems.forEach(function callback(element) {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.querySelectorAll('li').length}`);
});
