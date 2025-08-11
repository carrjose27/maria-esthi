document.getElementById("bookNow").addEventListener("click", function() {
  document.getElementById("bookingFormSection").style.display = "block";
  window.scrollTo({ top: document.getElementById("bookingFormSection").offsetTop, behavior: "smooth" });
});
