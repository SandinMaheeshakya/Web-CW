// Get a reference to the form element
const form = document.getElementById('myForm');

// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the input values
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const comment = document.getElementById('commentInput').value;
  const rating = document.querySelector('input[name="rating"]:checked').value;


  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Comment:', comment);
  console.log('Rating is:', rating);

  const sentence = "Dear "+ name + ", Thank you very much for " +
  "your feedback. You have rated our site as "+rating + ", and your comment was "+comment;
  alert(sentence);
  // You can also send the values to a server, update the UI, or perform other operations here
});