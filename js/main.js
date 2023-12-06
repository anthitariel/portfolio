$(document).ready(function () {
  // intro overlay
  setTimeout(function () {
    hideIntro();
  }, 5000);

  $(document).mousemove(function () {
    hideIntro();
  });

  function hideIntro() {
    $("#introOverlay").hide();
  }

  // the certificate popup
  const wayUpCertificate = $("#wayUpCertificate");
  const certificatePopup = $("#certificatePopup");
  const overlay = $(".overlay");
  const closePopupBtn = $("#closePopupBtn");

  wayUpCertificate.on("click", function () {
    certificatePopup.show();
    overlay.show();
  });

  closePopupBtn.on("click", function () {
    certificatePopup.hide();
    overlay.hide();
  });

  overlay.on("click", function () {
    certificatePopup.hide();
    overlay.hide();
  });
});
