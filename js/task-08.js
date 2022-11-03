const emailInputEl = document.querySelector('[name=email]')
const passwordInputEl = document.querySelector('[name=password]')
const submitBtnEl = document.querySelector('[type=submit]')
const loginFormEl = document.querySelector('.login-form')

loginFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!emailInputEl.value.trim() || !passwordInputEl.value.trim()) {
        alert('All inputs should be filled')
        return
    }
    const inpustValues = {};
    inpustValues[emailInputEl.name] = emailInputEl.value.trim();
    inpustValues[passwordInputEl.name] = passwordInputEl.value.trim();
    console.log(inpustValues);
    loginFormEl.reset()
})  