var form = document.getElementById('form');
var errorElement = document.getElementById('error'); 
var name = document.getElementById('name');
var age = document.getElementById('age');
var gender = document.getElementById('gender');
var occupation = document.getElementById('occupation');
var email = document.getElementById('email');
var psw = document.getElementById('psw');
var pswRepeat = document.getElementById('pswRepeat');
var pop = document.getElementById('pop');
var rock = document.getElementById('rock');
var jazz = document.getElementById('jazz');

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
