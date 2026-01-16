
const form = document.querySelector(".login-form")

form.addEventListener("submit", handleSubmit)

function handleSubmit (event) {
    event.preventDefault();

    const emailValue = event.target.elements.email.value;
    const passwordValue = event.target.elements.password.value;
    
    if(emailValue.length === 0 || passwordValue.length === 0) {
        return alert('All form fields must be filled in');
    };

    const value = {
        email: emailValue,
        password: passwordValue
    };

    console.log(value);
    event.target.reset();
}