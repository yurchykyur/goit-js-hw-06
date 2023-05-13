// Завдання 3
// Напиши скрипт для створення галереї зображень на підставі масиву даних. 
// HTML містить список ul.gallery.

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. 
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulGallery = document.querySelector('.gallery');

// ---- variant 1 ----

const makeGalleryItems = galleryItems => {
  return galleryItems.map(({url, alt}) => {

   return `<li><img src="${url}" alt="${alt}" width = "300" height = "auto"/></li>`;
  }).join('');
}

const elements = makeGalleryItems(images);

ulGallery.insertAdjacentHTML('beforeend', elements);


// ---- variant 2 ----

// const makeGalleryItems = images.reduce(
//   (acc, { alt, url }) =>
//     (acc += `<li><img src="${url}" alt="${alt}" width = "300" height = "auto"></li>`),
//   ''
// );

// ulGallery.insertAdjacentHTML('beforeend', makeGalleryItems);

