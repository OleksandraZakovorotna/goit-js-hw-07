const inputEl = document.querySelector("#name-input")
const spanEl = document.querySelector("#name-output")

inputEl.addEventListener("input", handleInput)

function handleInput(event) {
    const mesage = event.target.value.trim();
    
    if (mesage.length === 0){
        return spanEl.textContent = "Anonymous";
    } 
    else {
        return spanEl.textContent = mesage;
    }
}