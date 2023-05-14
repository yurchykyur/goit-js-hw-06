
// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.


// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/**
 * створення посилань на елементи, які задіяні в роботі
 */
const refs={
  input: document.querySelector('#controls > input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  parentOfBoxes: document.querySelector('#boxes')
};

/**
 * оголешення змінної, що приймає в себе значення інпуту
 */
let inputValue = 0; 

/**
 * слідкування за подіями на кнопках
 */
refs.buttonCreate.addEventListener('click', onButtonCreateDiv);
refs.buttonDestroy.addEventListener('click', destroyBoxes);


/**
 * функція запускає процедуру створення елементів.
 * спершу запускає відслідковування значення введене в інпут та перезапис значення inputValue в фукції takeInputValue.
 * потім запускає функцію створення текстової для додавання в DOM
 * виконується перевірка на порожній рядок, якщо рядок не порожній/undefined виконується долавання результату створення текстової строки в DOM
 */

function onButtonCreateDiv() {
  refs.input.addEventListener('input', takeInputValue);

  const elements = createBoxes(inputValue);
  if (elements) {
  refs.parentOfBoxes.insertAdjacentHTML('beforeend', elements);
  }
}

/**
 * функція відслідковує введене значення в інпут та записує нове значення в змінну
 * @param {} event подія - зміна значення інпуту
 */
function takeInputValue(event){
  inputValue = Number(event.currentTarget.value)
}

/**
 * Виконує очищення створених блоків та скидання лічильника на 0 і перезапис значення інпуту на 0.
 */
function destroyBoxes() {
  refs.parentOfBoxes.innerHTML = '';
  inputValue = 0;
  refs.input.value = '0';
}

/**
 * функція створює рядок для створення об'єктів заданих розмірів, відповідно до заданої кількості
 * @param {Number} amount передається значення введене в інпут
 * @returns повертає рядок, який потім буде інтегруватися в DOM для створення об'єктів
 */

function createBoxes(amount){
  let textCreateBoxes ='';

  if (!amount) {
    alert('Enter a number from 1 to 100')
    return ;
  }
  
  for (let i = 1; i <= amount; i += 1){
    let size = 30 + (i - 1) * 10;

    textCreateBoxes += `<div  style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
  }
  inputValue = 0;
  refs.input.value = '0';

 return textCreateBoxes;
}