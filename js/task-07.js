/*Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
 В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.*/


const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
console.log(textEl.style.fontSize.value);

inputRangeEl.addEventListener('input', onInputRangeChange);

function onInputRangeChange(event) {
  console.log(inputRangeEl.value);
  textEl.style.fontSize = `${inputRangeEl.value}px`;
}