const inputEl = document.getElementById('validation-input');


inputEl.addEventListener("blur", (event) => {
    
    event.currentTarget.classList.toggle('valid');
    event.currentTarget.classList.toggle('invalid');

    let styleValue = (event.currentTarget.value.length >= event.currentTarget.getAttribute('data-length')) ? 'valid' : 'invalid';
    event.currentTarget.classList.add(styleValue);
    
});

