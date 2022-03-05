const refs = {
  btnEl: document.querySelector('.change-color'),
  spanColorEl: document.querySelector('.color'),
}

refs.btnEl.addEventListener('click', () => {
  refs.spanColorEl.style.color = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
