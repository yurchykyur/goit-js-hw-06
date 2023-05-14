// Завдання 8
// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (!refs.form.elements.email.value || !refs.form.elements.password.value) {
    alert('Fill in all fields of the form');
    return;
  }

  //  ---- variant 1 ----

  console.log('variant 1');

  const formData1 = {
    email: refs.form.elements.email.value,
    password: refs.form.elements.password.value,
  };

  console.log(formData1);

  // ---- variant 2 (FormData) ----

  console.log('variant 2 (FormData)');

  const formData2 = new FormData(event.currentTarget);
  formData2.forEach((value, name) => {
    console.log(name, ': ', value);
  });

  refs.form.reset();
}
