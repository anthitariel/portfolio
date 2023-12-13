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

  // mustache template for skills
  const skills = [
    {
      title: "Languages",
      description: {
        skills: ["JavaScript", "TypeScript"],
      },
    },
    {
      title: "Frameworks and Libraries",
      description: {
        skills: [
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Formik",
          "AngularJS",
          "HTML",
          "CSS/SASS/LESS",
          "BEM",
        ],
      },
    },
    {
      title: "Development Tools",
      description: {
        skills: [
          "Microsoft Visual Studio Code",
          "GitHub",
          "Gitlab",
          "Sourcetree",
          "Pattern Lab",
          "Mustache",
        ],
      },
    },
    {
      title: "Design Tools",
      description: {
        skills: ["Figma", "Photoshop"],
      },
    },
    {
      title: "Agile",
      description: {
        skills: ["Agile", "Jira", "Scrum"],
      },
    },
    {
      title: "E-Commerce and SEO",
      description: {
        skills: ["E-Commerce", "SEO", "ThemeForest", "GoDaddy", "WordPress"],
      },
    },
  ];
  const template = `
  <div class="card">
    <div class="card-head">
      <h3>{{title}}</h3>
      <span>
       <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg class="card-icon" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M11.448 10c-.4-.01-.796.065-1.082.345-.287.28-.373.675-.366 1.08.008.404.093.864.25 1.42l4.515 15.986c.088.31.205.575.39.784.184.208.447.35.714.38.532.056.975-.228 1.372-.595l3.144-2.91c.244-.244.468-.174.636-.006l3.252 3.122c.284.272.652.383 1.01.385.357.002.73-.11 1.013-.392l3.306-3.305c.284-.284.396-.655.397-1.016 0-.36-.11-.74-.405-1.02l-3.25-3.123c-.177-.176-.166-.436.013-.615l3.027-3.142c.378-.394.668-.844.607-1.38-.03-.267-.174-.53-.383-.714-.21-.184-.475-.3-.786-.39L12.846 10.25c-.544-.157-.998-.237-1.398-.25zm-.03 1c.26.006.662.068 1.17.216l15.976 4.644c.646.188.362.562.102.822l-3.027 3.144c-.274.284-.387.65-.39 1.01-.002.358.11.74.403 1.02l3.25 3.12c.228.227.095.508-.007.61L25.59 28.89c-.14.164-.466.15-.623-.006l-3.25-3.12c-.285-.273-.655-.382-1.01-.38-.353 0-.716.108-1 .372l-3.145 2.91c-.48.396-.712.325-.83-.093l-4.517-15.987c-.147-.52-.21-.922-.215-1.18 0-.407.198-.407.418-.407zm-6.92 15c-.45 0-.66-.55-.354-.853l2-2c.457-.455 1.165.25.71.707l-2.003 2c-.093.097-.217.146-.353.146zM25.5 4c.45 0 .66.55.356.853l-2 2c-.457.455-1.165-.25-.71-.707l2.003-2c.093-.097.214-.146.35-.146zM4.497 4c-.45 0-.658.55-.353.853l2 2c.457.455 1.165-.25.71-.707l-2.003-2C4.758 4.05 4.634 4 4.498 4zM0 14.5c0-.277.223-.5.5-.5h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5zM14.5 0c.277 0 .5.223.5.5v3c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-3c0-.277.223-.5.5-.5z"/></svg>
      </span>
    </div>
    <div class="card-tail">
      {{#description}}
      <ul>
        {{#skills}}
        <li>{{.}}</li>
        {{/skills}}
      </ul>
      {{/description}}
    </div>
  </div>
`;
  skills.forEach(function (skill) {
    const rendered = Mustache.render(template, skill);
    $(".cards-container").append(rendered);
  });
});
