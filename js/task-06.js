/* Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
перевіряє його вміст щодо правильної кількості введених символів.
Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, 
то border інпуту стає зеленим, якщо неправильна кількість - червоним.
*/
const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onBlur);

function onBlur() {
  if (!inputEl.value) {
    inputEl.classList.remove('invalid');
    inputEl.classList.remove('valid');
  } else if (inputEl.value.length === +inputEl.dataset.length) {
      inputEl.classList.add('valid');
      inputEl.classList.remove('invalid');
    }  
    else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}