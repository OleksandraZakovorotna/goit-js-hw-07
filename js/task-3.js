const inputEl = document.querySelector("#name-input")
const spanEl = document.querySelector("#name-output")

inputEl.addEventListener("input", handleInput)

function handleInput(event) {
    const mesage = event.target.value;
    
    if (mesage.trim().length === 0){
        return spanEl = "Anonymous";
    } 
    else {
        return spanEl.innerHTML = mesage;
    }
}