const inputEl = document.querySelector('#validation-input');
const inputElLength = Number(inputEl.dataset.length)
inputEl.addEventListener('blur', () => {
    inputEl.classList.remove("valid", "invalid")
    inputEl.value.length === inputElLength ?
        inputEl.classList.add("valid") :
        inputEl.classList.add("invalid")
})  