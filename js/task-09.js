function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль 
// по кліку на button.change - color і виводить значення кольору в span.color.

const button = document.querySelector(".change-color");
const hexItem = document.querySelector(".color");
const color = document.body

const handleClick = () => {
  hexItem.textContent = getRandomHexColor()
  color.style.backgroundColor = getRandomHexColor()
};

button.addEventListener("click", handleClick)
