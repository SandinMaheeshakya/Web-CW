// Get a reference to the form element
const form = document.getElementById('myForm');

// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  let valid_input = true;

  // Retrieve the input values
  const name = document.getElementById('name').value;
  if(name.trim()==""){
    // If field empty show message
    document.getElementById("name_validation").innerHTML="Required*";
    valid_input = false;
  }else{
    document.getElementById("name_validation").innerHTML="";
  }

  const email = document.getElementById('email').value;
  if(email.trim()==""){
    document.getElementById("email_validation").innerHTML="Required*";
    valid_input = false;
  }else{
    document.getElementById("email_validation").innerHTML="";
  }

  const comment = document.getElementById('comment').value;
  if(comment.trim()==""){
    document.getElementById("comment_validation").innerHTML="Required*";
    valid_input = false;
  }else{
    document.getElementById("comment_validation").innerHTML="";
  }

  const rating = document.querySelector('input[name="rating"]:checked');
  if(!rating){
    document.getElementById("rating_validation").innerHTML="Required*";
    valid_input = false;
  }else{
    document.getElementById("rating_validation").innerHTML="";
  }
  //If valid shop pop up box
  if(valid_input){
    const sentence = "Dear "+ name + ", Thank you very much for " +
    "your feedback. You have rated our site as "+rating.value + ", and your comment was "+comment;
    showPopup(sentence);
  }
});

// Get references to the popup elements
const popupBox = document.getElementById('popupBox');
const message = document.getElementById("popUpMsg");
const overlay = document.getElementById('overlay');

// Function to show the popup
function showPopup(sentence) {
  message.innerHTML = sentence;
  popupBox.style.display = 'block';
  overlay.style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
  popupBox.style.display = 'none';
  overlay.style.display = 'none';
}
