// import gsap from "gsap";
import gsap from "gsap";
const slider = document.querySelector(".slider");
const sliderItem = slider.querySelectorAll(".item");
(function () {
  let currentIndex = 0;
  const barOfSlider = slider.querySelector(".sliderbar");
  const sliderContentItems = slider.querySelectorAll(".slider_zoom_content");
  sliderContentItems.forEach((el) => {
    const bgImg = el.getAttribute("data-bg-src");
    gsap.set(el, {
      backgroundImage: `url('${bgImg}')`,
      duration: 1.5,
      backgroundSize: "150%",
      backgroundOrigin: "padding-box",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      ease: "none",
    });
    if (!bgImg) {
      gsap.set(el, {
        duration: 1.5,
        backgroundSize: "200%",
        ease: "expo.in",
      });
    }
  });
  gsap.to(barOfSlider, {
    width: "100%",
    duration: 13,
    repeat: -1,
    ease: "power2",
  });
  // here start carousel

  function changeActiveClass() {
    sliderItem.forEach((item) => {
      item.classList.remove("active");
      console.log(item.querySelector('[data-text=" zoomText"]'));
    });
    sliderItem[currentIndex].classList.add("active");
    currentIndex = (currentIndex + 1) % sliderItem.length;
    setTimeout(changeActiveClass, 13000);
  }
  changeActiveClass();
})();
