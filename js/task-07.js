const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

//додав щоб не виглядало куцо зі старту
textEl.style.fontSize = `${inputEl.value}px`

//або значення по дефолту
// inputEl.value = '16'


inputEl.addEventListener('input', () => {
    textEl.style.fontSize = `${inputEl.value}px`
})