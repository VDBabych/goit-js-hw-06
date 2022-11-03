function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input[type=number]');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesWrapEl = document.querySelector('#boxes');
boxesWrapEl.style.cssText = "display: flex; gap: 5px; flex-wrap: wrap; align-items: center;"

const createBoxes = (amount) => {
  const divElems = [];
  let divLength = 30;
  for (let i = 0; i < amount; i += 1) {
    divElems.push(`<div style="background:${getRandomHexColor()};width:${divLength}px;height:${divLength}px;"></div>`)
    divLength += 10;
  }
  boxesWrapEl.insertAdjacentHTML("beforeend", divElems.join(''))
}

createBtnEl.addEventListener('click', () => {
  createBoxes(inputEl.value)
})

destroyBtnEl.addEventListener('click', () => {
  boxesWrapEl.innerHTML = null
})