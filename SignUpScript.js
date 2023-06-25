const form = document.getElementById('form');
const errorElement = document.getElementById('error');  
const name = document.getElementById('name');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const occupation = document.getElementById('occupation');
const email = document.getElementById('email');
const psw = document.getElementById('psw');
const pswRepeat = document.getElementById('pswRepeat');
const pop = document.getElementById('pop');
const rock = document.getElementById('rock');
const jazz = document.getElementById('jazz');

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('name is required');
    }
    if (pswRepeat.value != psw.value) {
        messages.push('The passwords do not match!');
    }
    if (password.value.length <= 8) {
        messages.push('The password must be longer than 8 characters');
    }
    if (password.value.length >= 50) {
        messages.push('The password must be shorter than 50 characters')
    }
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
})
