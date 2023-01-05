
const nameInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    textOutput.textContent = event.currentTarget.value
})
