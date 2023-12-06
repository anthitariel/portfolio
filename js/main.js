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

  // floating icon
  setTimeout(() => {
    changeIconPosition();
    setInterval(changeIconPosition, 10000);
  }, 5000);

  $(document).on("click", function () {
    changeIconPosition();
  });

  function changeIconPosition() {
    const icon = $("#floatingIcon");
    const newPosition = getRandomPosition();
    icon.stop().animate({ top: newPosition.top, left: newPosition.left });
  }

  function getRandomPosition() {
    const windowHeight = $(window).height() - 50;
    const windowWidth = $(window).width() - 50;
    const top = Math.random() * windowHeight;
    const left = Math.random() * windowWidth;
    return { top: top, left: left };
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
