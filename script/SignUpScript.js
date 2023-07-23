// var form = document.getElementById('form');
// var errorElement = document.getElementById('error'); 
// var name = document.getElementById('name');
// var age = document.getElementById('age');
// var gender = document.getElementById('gender');
// var occupation = document.getElementById('occupation');
// var email = document.getElementById('email');
// var psw = document.getElementById('psw');
// var pswRepeat = document.getElementById('pswRepeat');
// var pop = document.getElementById('pop');
// var rock = document.getElementById('rock');
// var jazz = document.getElementById('jazz');

// form.addEventListener('submit', (e) => {
//     let messages = []
//     if (name.value === '' || name.value == null) {
//         messages.push('name is required');
//     }
//     if (pswRepeat.value != psw.value) {
//         messages.push('The passwords do not match!');
//     }
//     if (password.value.length <= 8) {
//         messages.push('The password must be longer than 8 characters');
//     }
//     if (password.value.length >= 50) {
//         messages.push('The password must be shorter than 50 characters')
//     }
//     e.preventDefault();
//     errorElement.innerText = messages.join(', ');
// })

function validateForm() {
  let name = document.forms["SignUpForm"]["name"].value;
  let age = document.forms["SignUpForm"]["age"].value;
  let gender = document.forms["SignUpForm"]["gender"].value;
  let occupation = document.forms["SignUpForm"]["occupation"].value;
  let email = document.forms["SignUpForm"]["email"].value;
  let psw = document.forms["SignUpForm"]["psw"].value;
  let pswRepeat = document.forms["SignUpForm"]["pswRepeat"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  if (age == "") {
    alert("Age must be filled out");
    return false;
  }

  if (gender == "") {
    alert("Gender must be filled out");
    return false;
  }

  if (occupation == "") {
    alert("Occupation must be filled out");
    return false;
  }

  if (email == "") {
    alert("Password must be filled out");
    return false;
  }

  if (psw == "") {
    alert("Password must be filled out");
    return false;
  }

  if (pswRepeat == "") {
    alert("Password repeat must be filled out");
    return false;
  }

  if (psw != pswRepeat) {
    alert("The two passwords have to match!");
    return false;
  }

  alert("Hello " + name);
}
