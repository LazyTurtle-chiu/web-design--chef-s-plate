console.log("hi");
// check js connection

var scrollLink = $(".nav-item-link");

scrollLink.click(function (e) {
  e.preventDefault();
  $("body,html").animate(
    {
      scrollTop: $(this.hash).offset().top,
    },
    1000
  );

  // end smooth navigation switch==========
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-item-link");

  // Add event listener to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove("nav-item-link-active"));

      this.classList.add("nav-item-link-active");
    });

    // end add active class in nav when clicked
  });

  const navToggler = document.querySelector(".nav-toggler");
  const nav = document.querySelector(".nav");
  const navContent = document.querySelector(".nav-content");

  navToggler.addEventListener("change", function () {
    if (this.checked) {
      nav.style.backgroundColor = "var(--color_nav_change)";
      nav.style.opacity = "0.9";
      navContent.style.backgroundColor = "var(--color_nav_change)";
    } else {
      nav.style.backgroundColor = "";
      nav.style.opacity = "";
    }

    // end change navigation bg color when hamburger toggle
  });

  function toggleSection(
    showMoreSelector,
    showButtonSelector,
    hideButtonSelector
  ) {
    const showMore = document.querySelector(showMoreSelector);
    const showButton = document.querySelector(showButtonSelector);
    const hideButton = document.querySelector(hideButtonSelector);

    showButton.addEventListener("click", function () {
      showMore.style.display = "block";
      showButton.style.display = "none";
      hideButton.style.display = "block";
    });

    hideButton.addEventListener("click", function () {
      showMore.style.display = "";
      showButton.style.display = "";
      hideButton.style.display = "none";
    });
  }
  // appetizer
  toggleSection(
    "#appetizer .show-more",
    "#appetizer .more-button",
    "#appetizer .less-button"
  );
  // pasta
  toggleSection(
    "#pasta .show-more",
    "#pasta .more-button",
    "#pasta .less-button"
  );
  //main
  toggleSection("#main .show-more", "#main .more-button", "#main .less-button");
  // dessert
  toggleSection(
    "#dessert .show-more",
    "#dessert .more-button",
    "#dessert .less-button"
  );
  // end show more / show less of each menu

  const menuSelect = document.getElementById("menu-selection");
  menuSelect.addEventListener("change", function () {
    const selectedValue = menuSelect.value;
    const appetizerSection = document.getElementById("appetizer");
    const pastaSection = document.getElementById("pasta");
    const mainSection = document.getElementById("main");
    const dessertSection = document.getElementById("dessert");
    if (selectedValue === "one") {
      appetizerSection.style.display = "flex";
      pastaSection.style.display = "none";
      mainSection.style.display = "none";
      dessertSection.style.display = "none";
    } else if (selectedValue == "two") {
      appetizerSection.style.display = "none";
      pastaSection.style.display = "flex";
      mainSection.style.display = "none";
      dessertSection.style.display = "none";
    } else if (selectedValue == "three") {
      appetizerSection.style.display = "none";
      pastaSection.style.display = "none";
      mainSection.style.display = "flex";
      dessertSection.style.display = "none";
    } else if (selectedValue == "four") {
      appetizerSection.style.display = "none";
      pastaSection.style.display = "none";
      mainSection.style.display = "none";
      dessertSection.style.display = "flex";
    }
  });
  // end change menu depending on the selection dropbox

  const reservationDateSelect = document.getElementById("date");

  const weekdaySelect = document.getElementById("weekday");
  const weekendSelect = document.getElementById("weekend");

  reservationDateSelect.addEventListener("change", function () {
    const selectedValue = reservationDateSelect.value;
    console.log(selectedValue);
    if (
      selectedValue === "monday" ||
      selectedValue === "tuesday" ||
      selectedValue === "wednesday" ||
      selectedValue === "thursday" ||
      selectedValue === "friday"
    ) {
      weekdaySelect.setAttribute("required", "required");
      weekendSelect.removeAttribute("required");
      weekdaySelect.style.display = "block";
      weekendSelect.style.display = "none";
    } else if (selectedValue === "saturday" || selectedValue === "sunday") {
      weekendSelect.setAttribute("required", "required");
      weekdaySelect.removeAttribute("required");
      weekendSelect.style.display = "block";
      weekdaySelect.style.display = "none";
    }
  });
  // end change reservation time depending on the date

  const gallery = document.querySelector(".gallery-img");
  const galleryBtn = document.querySelector(".gallery-btn");

  galleryBtn.addEventListener("click", function () {
    const btnText = document.querySelector(".gallery-btn .btn-text");
    if (btnText.textContent === "Show More") {
      btnText.textContent = "Show Less";
      gallery.style.overflowY = "scroll";
    } else {
      btnText.textContent = "Show More";
      gallery.style.overflowY = "hidden";
    }
  });

  // end change overflowY every gallery button click
});
