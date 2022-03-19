const inputEl = document.getElementById('validation-input');


inputEl.addEventListener("input", (event) => {
    
    if (event.target.classList.contains('valid')) {
        event.target.classList.remove('valid');
    }

    if (event.target.classList.contains('invalid')) {
        event.target.classList.remove('invalid');
    }
    
    let styleValue = (event.target.value.length >= event.target.getAttribute('data-length')) ? 'valid' : 'invalid';
    event.target.classList.add(styleValue);
    
});

