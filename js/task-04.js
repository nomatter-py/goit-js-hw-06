let counterValue = 0;

const refs = {
    btnIncrementEl: document.querySelector('[data-action="increment"]'),
    btnDecrementEl: document.querySelector('[data-action="decrement"]'),
}

let refreshCounterValue = () => document.querySelector('#value').textContent = counterValue;

let onBtnClick = (event) => {
    if (event.currentTarget === refs.btnIncrementEl) {
        counterValue += 1;
    } else {
        counterValue -= 1;
    }
    refreshCounterValue();
}

refs.btnIncrementEl.addEventListener('click', onBtnClick);
refs.btnDecrementEl.addEventListener('click', onBtnClick);



