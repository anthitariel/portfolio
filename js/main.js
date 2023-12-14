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
      <?xml version="1.0" encoding="iso-8859-1"?>
      <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
       <svg
       class="card-icon"
       version="1.1"
       id="Layer_1"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink"
       viewBox="0 0 386.257 386.257"
       xml:space="preserve"
     >
       <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
     </svg>
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
