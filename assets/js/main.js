// Showing Sidebar
document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("sidebar"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close"),
    navLinks = document.querySelectorAll(".nav_link");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-sidebar");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-sidebar");
    });
  }

  // Close Sidebar when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-sidebar");
    });
  });
});

document.getElementById('btn-share').addEventListener('click', () => {
  if (navigator.share) {
      // Web Share API
      navigator.share({
          title: 'Check out this website!',
          text: 'I found this amazing website. Check it out!',
          url: window.location.href, // Current page URL
      })
      .then(() => console.log('Successfully shared!'))
      .catch((error) => console.error('Error sharing:', error));
  } else {
      // Fallback for unsupported browsers
      alert('Sharing is not supported on this browser. Copy the link to share!');
  }
});


// Typing Effect
var typed = new Typed(".multiple-text", {
    strings: ["Motion Graphics Designer", "Full Stack Developer", "Content Creator"],
    typeSpeed: 95,
    backSpeed: 95,
    backDelay: 1000,
    loop: true 
})

// Qualification Section

const qualificationTabs = document.querySelectorAll(
  ".qualification__button[data-target]"
);
const qualificationContents = document.querySelectorAll(
  ".qualification__content[data-content]"
);

qualificationTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    // Remove 'active' class from all qualification tabs and contents
    qualificationTabs.forEach((t) => t.classList.remove("skills_active"));
    qualificationContents.forEach((c) => c.classList.remove("skills_active"));

    // Add 'active' class to the clicked tab and corresponding content
    tab.classList.add("skills_active");
    target.classList.add("skills_active");
  });
});

// Skills Section
const skillsTabs = document.querySelectorAll(".skills_header[data-target]");
const skillsContents = document.querySelectorAll(".skills_group[data-content]");

skillsTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    // Remove 'active' class from all skill tabs and contents
    skillsTabs.forEach((t) => t.classList.remove("skills_active"));
    skillsContents.forEach((c) => c.classList.remove("skills_active"));

    // Add 'active' class to the clicked tab and corresponding content
    tab.classList.add("skills_active");
    target.classList.add("skills_active");
  });
});

// Mixitup Filter
var mixerPortfolio = mixitup(".work_container", {
  selectors: {
    target: ".work_card",
  },
  animation: {
    duration: 300,
  },
});

// Link Active Work
const linkWork = document.querySelectorAll(".work_item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

// Work Popup
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work_button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio_popup").classList.toggle("open");
}

document
  .querySelector(".portfolio_popup-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp_thumbnail img").src =
    portfolioItem.querySelector(".work_img").src;
  document.querySelector(".portfolio_popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".work_title").innerHTML;
  document.querySelector(".portfolio_popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}

// SERVICES MODAL
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

// SWIPER TESTIMONIAL
let swiper = new Swiper(".testimonials_container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

// Input Animation
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav_menu a[href*=` + sectionId + `]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav_menu a[href*=` + sectionId + `]`)
        .classList.remove("active-link");
    }
  });
}
