document.addEventListener("DOMContentLoaded", function() {
var form = document.getElementById("billingForm");

form.addEventListener("submit", function(event) {
// Preventing the form from submitting
    event.preventDefault(); 

    //Check Errors
    var ErrorList = new Array(10);
    var allValidated = true;

    // Perform validation checks
    var fullNameInput = document.querySelector(".name");
    if (fullNameInput.value.trim() === "") {
    fullNameInput.style.border="2px solid red";
    ErrorList[0] = true;

    }else{
    fullNameInput.style.border="";
    ErrorList[0] =false;

    }

    // Validating name on the Card
    var nameOnCardInput = document.querySelector("input[placeholder='Name on Card']");
    if (nameOnCardInput.value.trim() === "") {
        nameOnCardInput.style.border = "2px solid red";
        ErrorList[1] = true;

    }else{
    nameOnCardInput.style.border="";
    ErrorList[1] = false;


    }

    //Validating Email Address
    var emailInput = document.querySelector("input[placeholder='Email Adress']");
    if (!validateEmail(emailInput.value.trim())) {
        emailInput.style.border = "2px solid red";
        ErrorList[2] = true;

    }else{
    emailInput.style.border="";
    ErrorList[2] = false;


    }

    // Validating Address
    var addressInput = document.querySelector("input[placeholder='Adress']");
    if (addressInput.value.trim() === "") {
        addressInput.style.border = "2px solid red";
        ErrorList[3] = true;

    }else{
    addressInput.style.border="";
    ErrorList[3] = false;

    }

    // Validating City Field
    var cityInput = document.querySelector("input[placeholder='City']");
    if (cityInput.value.trim() === "") {
        cityInput.style.border = "2px solid red";
        ErrorList[4] = true;

    }else{
    cityInput.style.border="";
    ErrorList[4] = false;


    }

    // Validating Date of Birth
    var dobInputs = document.querySelectorAll(".dob");
    var dayInput = dobInputs[0];
    var monthInput = dobInputs[1];
    var yearInput = dobInputs[2];

    if (dayInput.value.trim() === "" || monthInput.value.trim() === "" || yearInput.value.trim() === "") {
        dayInput.style.border = "2px solid red";
        monthInput.style.border = "2px solid red";
        yearInput.style.border = "2px solid red";
        ErrorList[5] = true;


    }else{
        dayInput.style.border = "";
        monthInput.style.border = "";
        yearInput.style.border = "";
        ErrorList[5] = false;

    }

    // Validating Gender Field
    var genderInputs = document.querySelectorAll("input[name='gender']");
    var selectedGenderInput = Array.from(genderInputs).find(input => input.checked);

    // Validating Card Number
    var cardNumberInput = document.querySelector("input[placeholder='Card Number']");
    if (!validateCardNumber(cardNumberInput.value.trim())) {
        cardNumberInput.style.border = "2px solid red";
        ErrorList[6] = true;

    }else{
    cardNumberInput.style.border = "";
    ErrorList[6] = false;


    }

    //Validating CVC
    var cvcInput = document.querySelector("input[placeholder='CVC']");
    if (cvcInput.value.trim() === "") {
        cvcInput.style.border = "2px solid red";
        ErrorList[7] = true;

        
    }else{
    cvcInput.style.border = "";
    ErrorList[7] = false;


    }
    //Validating Expiry Month
    var expMonthInput = document.querySelector("input[placeholder='Exp Month']");
    if (!validateExpiryMonth(expMonthInput.value.trim())) {
        expMonthInput.style.border = "2px solid red";
        ErrorList[8] = true;

    }else{
    expMonthInput.style.border = "";
    ErrorList[8] = false;
    }

    // Validating Expiry Year
    var expYearInput = document.querySelector("input[placeholder='Exp Year']");
    if (!validateExpiryYear(expYearInput.value.trim())) {
        expYearInput.style.border = "2px solid red";
        ErrorList[9] = true;
    }else{
    expYearInput.style.border = "";
    ErrorList[9] = false;
    }

    for(var i=0; i < ErrorList.length; i++){
    if(ErrorList[i] === true){
        allValidated = false;
    }
    }

    if(allValidated === true){
    showPopup();
    document.querySelector('.close-btn').addEventListener('click', closePopup);
        
    // Delay the redirection after 4 seconds
    setTimeout(redirectToMainPage, 4000);

    }

});

//Creating each function to validate the data

//Email Validation
function validateEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}


//Card Number Validation
function validateCardNumber(cardNumber) {
    return cardNumber.length === 16 && /^\d+$/.test(cardNumber);
}



//Validate Expiry Month
function validateExpiryMonth(month) {
    var monthNumber = parseInt(month, 10);
    return monthNumber >= 1 && monthNumber <= 12;
}

//Validate Expiry Year
function validateExpiryYear(year) {
    var currentYear = new Date().getFullYear();
    var yearNumber = parseInt(year, 10);
    return yearNumber >= currentYear && yearNumber <= currentYear + 10;
}

//Showing PopUp message
function showPopup() {
    document.getElementById('successPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('successPopup').style.display = 'none';
}

});


// Function to redirect to the Main page again
function redirectToMainPage() {
    window.location.href = 'BuyProducts.html';

}
