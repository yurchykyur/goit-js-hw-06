// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const refs = {
  input: document.querySelector('#validation-input'),
  inputDataLength: Number(
    document.querySelector('#validation-input').getAttribute('data-length')
  ),
};

refs.input.addEventListener('blur', onInputChange);

function onInputChange(event) {
  if (!event.currentTarget.value) {
    refs.input.classList.remove('invalid');
  } else if (event.currentTarget.value.length !== refs.inputDataLength) {
    addClassInvalidInput();
  } else {
    addClassValidInput();
  }
}

function addClassValidInput() {
  refs.input.classList.add('valid');
  refs.input.classList.remove('invalid');
}

function addClassInvalidInput() {
  refs.input.classList.add('invalid');
  refs.input.classList.remove('valid');
}
