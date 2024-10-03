let menu = document.getElementById("menu");
const icon = document.getElementById("icon-menu");
const profile = document.getElementById("profile");
const hamburger = document.getElementById("hamburger");
let slideIndex = 1;

function toggleMenu() {
  menu.classList.toggle("hidden");
  if (
    !menu.classList.contains("hidden") ||
    !profile.classList.contains("hidden")
  ) {
    icon.classList.replace("fa-bars", "fa-times");
    profile.classList.add("hidden");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
}

window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 10) {
    menu.classList.add("hidden");
    icon.classList.replace("fa-times", "fa-bars");
    profile.classList.add("hidden");
  }
});

document.addEventListener("click", function (event) {
  // Check if the click is outside of menu, profile, and hamburger
  if (
    !menu.contains(event.target) &&
    !profile.contains(event.target) &&
    !hamburger.contains(event.target) &&
    !event.target.closest("button")
  ) {
    // Hide menu and profile
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      icon.classList.replace("fa-times", "fa-bars");
    }
    if (!profile.classList.contains("hidden")) {
      profile.classList.add("hidden");
    }
  }
});

function toggleProfile() {
  profile.classList.toggle("hidden");
  if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
    icon.classList.replace("fa-times", "fa-bars");
  }
}

const listImage = [
  { name: "rock paper", imgSrc: "./assets/image/rockpaperstrategy-1600.jpg" },
  { name: "requirement", imgSrc: "./assets/image/requirements.png" },
  { name: "people", imgSrc: "./assets/image/people.webp" },
  { name: "the games", imgSrc: "./assets/image/the-games-bg.jpg" },
  { name: "main bg", imgSrc: "./assets/image/main-bg.jpg" },
];

function generateSlide(images) {
  const slideContainer = document.getElementById("slideContainer");
  const dotContainer = document.getElementById("dot-group");
  images.forEach((image, i) => {
    const index = i + 1;

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("mySlides");

    const img = document.createElement("img");
    img.classList.add("lg:w-[700px]", "h-[210px]", "w-[400px]", "lg:h-[400px]");
    img.src = image.imgSrc;
    img.alt = image.name;

    const dotButton = document.createElement("button");
    dotButton.classList.add(
      "dot",
      "w-3.5",
      "h-3.5",
      "rounded-full",
      "border",
      "border-white",
      "bg-white",
      "cursor-pointer"
    );
    dotButton.setAttribute("onclick", `currentSlide(${index})`);

    slideContainer.appendChild(imageDiv);
    dotContainer.appendChild(dotButton);
    imageDiv.appendChild(img);
  });
}

generateSlide(listImage);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Menyesuaikan indeks slide
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Menyembunyikan semua slide
  for (const element of slides) {
    element.style.display = "none";
  }

  // Mengatur semua dot ke kondisi tidak aktif
  for (const element of dots) {
    element.classList.remove("bg-white");
    element.classList.add("bg-transparent");
  }

  // Menampilkan slide yang sesuai dan mengaktifkan dot yang sesuai
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.replace("bg-transparent", "bg-white");
}

showSlides(slideIndex);
