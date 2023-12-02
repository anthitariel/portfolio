// the certificate popup
const wayUpCertificate = document.getElementById("wayUpCertificate");
const certificatePopup = document.getElementById("certificatePopup");
const overlay = document.querySelector(".overlay");
const closePopupBtn = document.getElementById("closePopupBtn");

wayUpCertificate.addEventListener("click", function () {
  certificatePopup.style.display = "block";
  overlay.style.display = "block";
});

closePopupBtn.addEventListener("click", function () {
  certificatePopup.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", function () {
  certificatePopup.style.display = "none";
  overlay.style.display = "none";
});
