
const refs = {
    formEl: document.querySelector('.login-form'),
}

refs.formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {

    event.preventDefault();

    const { email, password } = event.target.elements;

    if (!email.value || !password.value) {
        alert("всі поля повинні бути заповнені");
        return;
    };

    const formData = { email : email.value, password: password.value};

    console.log(formData);
    
    event.target.reset();
}