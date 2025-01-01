import gsap from "gsap";

const sliderContainer = document.querySelector(".slider_container");
const sliderItems = document.querySelectorAll(".sliderBackground");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const mouse = document.querySelector("[data-mouse='slideJsMouse']");

let currentIndex = 0;

// Function to animate the carousel
const goToSlide = (index) => {
  const maxIndex = sliderItems.length - 1;
  if (index > maxIndex)
    currentIndex = 0; // Loop back to the start
  else if (index < 0)
    currentIndex = maxIndex; // Loop back to the end
  else currentIndex = index;

  gsap.to(sliderContainer, {
    x: -currentIndex * 100 + "%", // Slide transition
    duration: 1,
    ease: "power2.inOut",
  });
};

nextButton.addEventListener("mouseenter", () => {
  nextButton.style.zIndex = 50;
  nextButton.classList.add("hover");
  gsap.to(mouse, {
    scale: 1.2,
    zIndex: 10,
    width: 100,
    height: 100,
    duration: 0.7,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    ease: "Linear.easeNone",
  });
});
nextButton.addEventListener("mouseleave", () => {
  nextButton.style.zIndex = 10;
  nextButton.style.backgroundColor = "";
  gsap.to(mouse, {
    scale: 1,
    width: 50,
    height: 50,
    zIndex: 10,
    duration: 0.7,
    backgroundColor: "",
    ease: "Linear.easeNone",
  });
});
// Event listeners for buttons
nextButton.addEventListener("click", () => {
  goToSlide(currentIndex + 1);
});
prevButton.addEventListener("click", () => goToSlide(currentIndex - 1));

const sliderJS = document.querySelector(".sliderJS");
sliderJS.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX - 0; // Mouse X position
  const mouseY = e.clientY - 0; // Mouse Y position

  // Animate the custom cursor to follow the mouse
  gsap.to(mouse, {
    x: mouseX,
    y: mouseY,
    scale: 1,
    duration: 0.3,
    ease: "Linear.easeNone",
    // Lower duration for less delay
  });
});

// const xPercent = e.clientX / window.innerWidth;
// const yPercent = e.clientY / window.innerHeight;
// gsap.to(bgItems, {
//   backgroundPosition: `${xPercent * 10}% ${yPercent * 10}%`,
//   backgroundAttachment: "fixed",
//   scale: 1,
//   duration: 0.8,
//   ease: "Linear.easeNone",
// });
