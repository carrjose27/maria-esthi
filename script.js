const modal = document.getElementById("bookingModal");
const btn = document.getElementById("bookNowBtn");
const closeBtn = document.querySelector(".close");

// Open modal on button click
btn.onclick = () => {
  modal.style.display = "block";
};

// Close modal on close button click
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close modal when clicking outside the modal content
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// Optional: handle form submission (you can customize)
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Here the form will submit to Formspree or your endpoint.
  // You can add success messages, form reset, etc.
  alert("Thanks for your booking request! We'll be in touch soon.");
  this.reset();
  modal.style.display = "none";
});
