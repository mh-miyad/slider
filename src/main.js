import gsap from "gsap";

const slider = document.querySelector(".slider");
const sliderItem = slider.querySelectorAll(".item");
(function () {
  function adjustSliderHeight() {
    const activeSlide = sliderItem[currentIndex];
    const newHeight = activeSlide.offsetHeight;
    slider.style.height = `${newHeight}px`;
  }
  const tl = gsap.timeline();
  let sliderShowNumber = 0;
  let currentIndex = 0;
  function showSlide(index = 0) {
    console.log(index);
    const currentSlide = sliderItem[currentIndex];
    const nextSlide = sliderItem[index];
    tl.to(currentSlide, {
      opacity: 0,
      duration: 1.5,
      left: "-100%",
      skewX: "180",
      zIndex: 0,
    })
      .set(nextSlide, {
        top: "200%",
        left: "100%",
        opacity: 0,
        skewX: "180",
      })
      .to(nextSlide, {
        top: "0%",
        left: "0%",
        opacity: 1,
        duration: 1.5,
        skewX: "0",
        ease: "circ",
      });

    currentIndex = index;
    // console.log(currentIndex);
  }
  adjustSliderHeight();
  showSlide(0);
  setInterval(() => {
    const nextIndex = (currentIndex + 1) % sliderItem.length;
    showSlide(nextIndex);
    sliderShowNumber++;
  }, 5000);
})();
