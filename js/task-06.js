// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.


// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо 
// неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали у
//  вихідні файли завдання.

const textInput = document.querySelector("#validation-input")
const setFocus = document.querySelector("[data-length='6']")

textInput.onblur = function() {
  console.log(this.value.length);
  if (setFocus.dataset.length != this.value.length ) { 
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
    this.classList.add('valid');
  }
};



// console.log(setFocus.dataset.length)