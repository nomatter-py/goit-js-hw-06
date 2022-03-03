
const refs = {
    rangeEl: document.getElementById('font-size-control'),
    textEl: document.getElementById('text'),
}

let adjustFontSize = () => refs.textEl.style.fontSize = `${refs.rangeEl.value}px`;

adjustFontSize();

refs.rangeEl.addEventListener('input', adjustFontSize);