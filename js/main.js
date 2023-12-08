$(document).ready(function () {
  // toggle dark and light mode
  toggleModeIcon();

  $(".mode-toggle").click(function () {
    $(".mode").toggleClass("dark");
    toggleModeIcon();
  });

  function toggleModeIcon() {
    const modeIcon = $(".mode-icon");
    const isDark = $(".mode").hasClass("dark");
    modeIcon
      .removeClass(isDark ? "fa-sun" : "fa-moon")
      .addClass(isDark ? "fa-moon" : "fa-sun");
  }

  // menu scroll
  $(".menu-primary li a").click(function () {
    let targetSection = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(targetSection).offset().top,
      },
      1000
    );
    $(".menu-primary li a").removeClass("active");
    $(this).addClass("active");
    return false;
  });

  $(window).scroll(function () {
    let scrollPosition = $(window).scrollTop();
    $(".menu-primary li a").each(function () {
      let targetId = $(this).attr("href");
      let targetSection = $(targetId);
      if (
        targetSection.position().top <= scrollPosition &&
        targetSection.position().top + targetSection.height() > scrollPosition
      ) {
        $(".menu-primary li a").removeClass("active");
        $(this).addClass("active");
      }
    });
  });

  // contact btn
  $(document).ready(function () {
    $(".contact-btn").click(function () {
      window.location.href = "mailto:anfiya17@gmail.com";
    });
  });

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
