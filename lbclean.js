const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", function () {
  const isOpen = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".mobile-nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const slidesTrack = document.getElementById("slidesTrack");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");
const sliderDots = document.getElementById("sliderDots");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function renderDots() {
  sliderDots.innerHTML = "";

  slides.forEach(function (_, index) {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", "Go to slide " + (index + 1));

    if (index === currentSlide) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", function () {
      currentSlide = index;
      updateSlider();
    });

    sliderDots.appendChild(dot);
  });
}

function updateSlider() {
  slidesTrack.style.transform = "translateX(-" + currentSlide * 100 + "%)";
  renderDots();
}

prevSlide.addEventListener("click", function () {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  updateSlider();
});

nextSlide.addEventListener("click", function () {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  updateSlider();
});

updateSlider();

const quoteForm = document.getElementById("quoteForm");
const formSuccess = document.getElementById("formSuccess");

quoteForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formSuccess.classList.add("show");
  quoteForm.reset();

  setTimeout(function () {
    formSuccess.classList.remove("show");
  }, 5000);
});
