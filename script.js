// Show the modal when the user clicks anywhere on the page
document.body.addEventListener('click', function(event) {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
});

// Close the modal when the user clicks the close button
document.getElementById('closeButton').addEventListener('click', function() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
});
