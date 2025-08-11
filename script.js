// Modal logic
const modal = document.getElementById("bookingModal");
const btn = document.getElementById("bookNowBtn");
const closeBtn = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your booking request has been submitted.");
  modal.style.display = "none";
  this.reset();
});
