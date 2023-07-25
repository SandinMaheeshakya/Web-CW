// Get a reference to the form element
const form = document.getElementById('myForm');

// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  let valid_input = true;

  // Retrieve the input values
  const name = document.getElementById('nameInput').value;
  if(name.trim()==""){
    alert("Name must be filled out");
    valid_input = false;
  }

  const email = document.getElementById('emailInput').value;
  if(email.trim()==""){
    alert("Email must be filled out");
    valid_input = false;
  }

  const comment = document.getElementById('commentInput').value;
  if(comment.trim()==""){
    alert("Comment must be filled out");
    valid_input = false;
  }

  const rating = document.querySelector('input[name="rating"]:checked');
  if(!rating){
    alert("Rating must be filled out");
    valid_input = false;
  }

  if(valid_input){
    const sentence = "Dear "+ name + ", Thank you very much for " +
    "your feedback. You have rated our site as "+rating.value + ", and your comment was "+comment;
    alert(sentence);
  }
});