// Напиши скрипт, який реагує на зміну значення 
// input#font - size - control(подія input) і змінює інлайн - стиль span#text,
//     оновлюючи властивість font - size.В результаті, перетягуючи повзунок,
//         буде змінюватися розмір тексту.


const inputSize = document.querySelector("#font-size-control")
const change = document.querySelector("#text")

inputSize.addEventListener("input", (event) => {
    change.style.fontSize = event.currentTarget.value + "px" ;
//     //style.fontSize = '40px'
})

