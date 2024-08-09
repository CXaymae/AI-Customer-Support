// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get form values
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('textarea').value;
  
    // Check if form fields are not empty
    if (email && feedback) {
      // Show success alert
      alert('Feedback successfully submitted!');
  
      // Clear the form
      document.querySelector('.form').reset();
    } else {
      // Show error alert if form fields are empty
      alert('Please fill out all fields.');
    }
  }
  
  // Ensure DOM content is loaded before attaching event handlers
  document.addEventListener('DOMContentLoaded', () => {
    // Attach the function to the form submit event
    document.querySelector('.form').addEventListener('submit', handleFormSubmit);
  });
  