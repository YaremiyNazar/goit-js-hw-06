
const nameInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    if (event.currentTarget.value != "") {
        textOutput.textContent = event.currentTarget.value
        }
    else {
            textOutput.textContent = "Anonymous"
        }
    
})

