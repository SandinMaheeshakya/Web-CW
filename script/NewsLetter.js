function required() {
    let i = document.forms["nlForm"].getElementsByClassName("inputField");
    let valid=true;

    for (let index = 0; index < i.length; index++) {
        x = i[index].value;
        if (x == "" || x == null) {
            document.getElementsByClassName("validation_view")[index].innerHTML="Required*";
            valid = false;
        }else{
            document.getElementsByClassName("validation_view")[index].innerHTML="";
        }
    }
    if (valid) {
        valid=email_validate(document.getElementById("email"));
    }
    if(valid){
        alert("Dear "+document.getElementById("name").value+", you have successfully subscribed for a personalized newsletter.")
    }
    return valid;
}

function email_validate(email){
    // regex for email copied from : https://regexr.com/3e48o
    const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(emailRegex.test(email.value)){
        document.getElementById("email_valid_view").innerHTML="";
        return true;
    }else{
        document.getElementById("email_valid_view").innerHTML="Invalid email address !";
        return false;
    }
}
