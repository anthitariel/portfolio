$(document).ready(function () {
  // toggle dark and light mode
  toggleModeIcon();

  $(".mode-toggle").click(function () {
    $(".mode").toggleClass("light");
    toggleModeIcon();
  });

  function toggleModeIcon() {
    const modeIcon = $(".mode-icon");
    const isLight = $(".mode").hasClass("light");
    modeIcon
      .removeClass(isLight ? "fa-moon" : "fa-sun")
      .addClass(isLight ? "fa-sun" : "fa-moon");
  }

  // menu mobile

  $(".menu-icon").addClass("fas fa-align-justify");

  toggleMenuIcon();

  $(".menu-toggle").click(function () {
    $(".menu-primary").toggleClass("show-mobile-menu");
    toggleMenuIcon();
  });

  function toggleMenuIcon() {
    const menuIcon = $(".menu-icon");
    const isMenuOpen = $(".menu-primary").hasClass("show-mobile-menu");
    menuIcon
      .toggleClass("fa-align-justify", !isMenuOpen)
      .toggleClass("fa-window-close", isMenuOpen);
  }

  // menu scroll
  $(".menu-primary li a").click(function (event) {
    event.preventDefault();

    $(".menu-primary li a").removeClass("active");
    $(this).addClass("active");

    let targetSection = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(targetSection).offset().top,
      },
      500,
      function () {
        $(".menu-primary").removeClass("show-mobile-menu");
        $(".menu-icon")
          .removeClass("fa-window-close")
          .addClass("fas fa-align-justify");
      }
    );
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
    <svg class="card-icon-mobile" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#e9e9e9" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.503 4.142l-.707-.707L13.3 1.932l.707.707zM10 1.134H9v2.833h1zm-2.86 2.3L5.637 1.933l-.707.707 1.503 1.503zm11.835 10.788a1.418 1.418 0 0 0-1.466-1.489 4.475 4.475 0 0 0-.693.064l-.042-.016A1.388 1.388 0 0 0 15.478 12a1.788 1.788 0 0 0-.587.064A1.84 1.84 0 0 0 13 11.06a2.768 2.768 0 0 0-1 .167V6.9a1.905 1.905 0 0 0-2-1.846A1.905 1.905 0 0 0 8 6.9v6.954L6.979 12.64a1.624 1.624 0 0 0-1.066-.733 1.775 1.775 0 0 0-1.264.161 1.478 1.478 0 0 0-.71.968 1.588 1.588 0 0 0 .167 1.137l2.154 4.38 3.32 4.064.773-.635-3.221-3.921-2.144-4.359a.619.619 0 0 1-.074-.446.485.485 0 0 1 .235-.322.796.796 0 0 1 .543-.051.708.708 0 0 1 .47.328L9 16.6V6.9a.908.908 0 0 1 1-.846.908.908 0 0 1 1 .846V14h1v-1.379c0-.373.336-.562 1-.562.374 0 1 .073 1 .562V14h1v-.563c0-.36.111-.47.478-.47.507 0 .522.684.522.762v1.063h1V13.76l-.005.002.005-.008v.006c.011-.005.362-.027.508-.027.129 0 .492.156.492.761.022.245 0 2.992 0 4.093a7.863 7.863 0 0 1-.463 2.657c-.16.421-.56 1.221-.56 1.221l.918.43s.272-.606.398-.925a7.32 7.32 0 0 0 .471-1.57A26.038 26.038 0 0 0 19 17.07z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
    <svg class="card-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M20.9597 17.84L19.3297 18.39C18.8797 18.54 18.5197 18.89 18.3697 19.35L17.8197 20.98C17.3497 22.39 15.3697 22.36 14.9297 20.95L13.0797 15C12.7197 13.82 13.8097 12.72 14.9797 13.09L20.9397 14.94C22.3397 15.38 22.3597 17.37 20.9597 17.84Z" stroke="#3C9DD0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="#3C9DD0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
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
