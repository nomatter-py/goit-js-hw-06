const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
};

const refreshOutput = (event) => {
    refs.outputEl.textContent = (refs.inputEl.value) ? refs.inputEl.value : 'Anonymous';
}

refs.inputEl.addEventListener('keyup', refreshOutput);