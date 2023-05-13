// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const refs = {
    input: document.querySelector('#font-size-control'),
    inputValue: document.querySelector('#font-size-control').value,
    textOutput: document.querySelector('#text'),
} 

refs.textOutput.style.fontSize = `${refs.inputValue}px`;

refs.input.addEventListener('input', event => refs.textOutput.style.fontSize = `${event.currentTarget.value}px`);
