// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  button: document.querySelector('.change-color'),
  text: document.querySelector('.color'),
  body: document.querySelector('body'),
};

refs.button.addEventListener('click', onChangeBackgroundColor);

function onChangeBackgroundColor(event) {
  let bodyBackgroundColor = getRandomHexColor();

  refs.body.style.backgroundColor = bodyBackgroundColor;
  refs.text.textContent = bodyBackgroundColor;
}
