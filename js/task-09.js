const refs = {
  btnEl: document.querySelector('.change-color'),
  spanColorEl: document.querySelector('.color'),
}

refs.btnEl.addEventListener('click', () => {
  let colorValue = getRandomHexColor();
  refs.spanColorEl.textContent = colorValue;
  document.body.style.backgroundColor = colorValue;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
