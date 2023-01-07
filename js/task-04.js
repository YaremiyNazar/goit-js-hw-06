// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і 
// зменшувати його значення на одиницю.



//     Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення
// лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const counterValue = document.querySelector("#value")

const total = counterValue
const btnIncrement = document.querySelector('button[data-action="increment"]')
const increment = () => {
    total.textContent = Number(total.textContent) + 1
    
};
btnIncrement.addEventListener("click", increment);


const btnDecrement = document.querySelector('button[data-action="decrement"]')
const decrement = () => {
    total.textContent -= 1
    
};
btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
