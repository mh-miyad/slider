import gsap from "gsap";

const slider = document.querySelector(".slider");
const sliderItem = slider.querySelectorAll(".item");
(function () {
  function adjustSliderHeight() {
    const activeSlide = sliderItem[currentIndex];
    const newHeight = activeSlide.offsetHeight;
    slider.style.height = `${newHeight}px`;
  }
  const sliderImages = [
    "url('./src/images/bg-1.webp')",
    "url('./src/images/bg-2.webp')",
    "url('./src/images/bg-3.webp')",
  ];
  const tl = gsap.timeline();
  let sliderShowNumber = 0;
  let currentIndex = 0;
  function showSlide(index = 0) {
    const currentSlide = sliderItem[currentIndex];
    const nextSlide = sliderItem[index];
    gsap.set(slider, {
      backgroundImage: sliderImages[index],
    });
    gsap.to(slider, {
      backgroundSize: "100%",
      duration: 3,
      // Repeat indefinitely
      ease: "back.out",
    });
    // tl.to(currentSlide, {
    //   opacity: 0,
    //   duration: 0.5,
    //   top: "-100%",
    //   zIndex: 0,
    // })
    //   .set(nextSlide, {
    //     top: "100%",
    //     left: 0,
    //     opacity: 0.7,
    //   })
    //   .to(nextSlide, {
    //     top: "0%",
    //     left: "0%",
    //     opacity: 1,
    //     duration: 2,
    //     skewX: "0",
    //     ease: "circ",
    //   });
    currentIndex = index;
  }
  adjustSliderHeight();
  showSlide(0);
  setInterval(() => {
    const nextIndex = (currentIndex + 1) % sliderItem.length;
    showSlide(nextIndex);
    sliderShowNumber++;
  }, 10000);
})();
