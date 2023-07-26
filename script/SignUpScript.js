function validateForm() {
  let name = document.forms["SignUpForm"]["name"].value;
  let age = document.forms["SignUpForm"]["age"].value;
  let gender = document.forms["SignUpForm"]["gender"].value;
  let occupation = document.forms["SignUpForm"]["occupation"].value;
  let email = document.forms["SignUpForm"]["email"].value;
  let psw = document.forms["SignUpForm"]["psw"].value;
  let pswRepeat = document.forms["SignUpForm"]["pswRepeat"].value;
  let pop = document.forms["SignUpForm"]["pop"];
  let rock = document.forms["SignUpForm"]["rock"];
  let jazz = document.forms["SignUpForm"]["jazz"];

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

  if (!(pop.checked || rock.checked || jazz.checked)) {
    alert("Please fill at least one genre!");
    return false;
  }
  alert("Hello " + name + " welcome to music.com!");
}
