function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

btnEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  textEl.textContent = randomColor;
  document.body.style.background = randomColor;
})
