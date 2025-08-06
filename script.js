// Simple feedback for form submission
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for contacting us!");
});
