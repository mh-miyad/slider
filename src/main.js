// import gsap from "gsap";
import gsap from "gsap";
const slider = document.querySelector(".slider");
const sliderItem = slider.querySelectorAll(".item");
(function () {
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
        backgroundColor: "gray",
        duration: 1.5,
        backgroundSize: "200%",
        ease: "expo.in",
      });
    }
  });
  // here start carousel
})();
