
import gsap from "gsap";

const slider = document.querySelector(".slider");
const sliderItem = slider.querySelectorAll(".item");

(function () {
  const tl = gsap.timeline();
  let currentIndex = 0;
  const barOfSlider = slider.querySelector(".sliderbar");
  const sliderContentItems = slider.querySelectorAll(".slider_zoom_content");
  // Set initial background styles
  sliderContentItems.forEach((el) => {
    const bgImg = el.getAttribute("data-bg-src");
    gsap.set(el, {
      backgroundImage: bgImg ? `url('${bgImg}')` : null,
      backgroundSize: bgImg ? "150%" : "200%",
      backgroundOrigin: "padding-box",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      duration: 1.5,
      ease: bgImg ? "none" : "expo.in",
    });
  });

  // Change active class function
  function changeActiveClass() {
    sliderItem.forEach((item) => item.classList.remove("active"));
    sliderItem[currentIndex].classList.add("active");

    const itemSliderBg = sliderItem[currentIndex].querySelector(".slider_zoom_content");
    const rockTop = itemSliderBg.querySelector('[data-ct-item="rock-top"]');
    const rockBottom = itemSliderBg.querySelector('[data-ct-item="rock-bottom"]');
   const zoomText = itemSliderBg.querySelector('[data-text=" zoomText"]');


    // Animation for background size
    gsap.to(itemSliderBg, {
      backgroundSize: "110%",
      duration: 8,
      ease: "none",
      onComplete:()=>{
          gsap.to([zoomText,rockBottom,rockTop,itemSliderBg], {
          scale: 5,
          duration:1,
          backgroundColor:"black",
          opacity: 0,
          ease: "power3",
        });
      }
    });

    // Animation for rockTop
    gsap.to(rockTop, {
      top: 0,
      duration: 0.9,
      ease: "none",
      onComplete: () => {
        gsap.to(rockTop, {
          y: -20,
          duration: 3,
          ease: "power1.inOut",
        });
      },
    });

    // Animation for rockBottom
    gsap.to(rockBottom, {
      bottom: 0,
      duration: 0.9,
      ease: "none",
    });

    // Scaling animations
    gsap.to([rockTop, rockBottom], {
      scale: 2.6,
      duration: 500,
      delay: -2,
    });
  }

  // Slider bar animation
  function startSlider() {
    gsap.to(barOfSlider, {
      width: "100%",
      duration: 10,
      repeat: -1,
      ease: "power2",
      onRepeat: () => {
        currentIndex = (currentIndex + 1) % sliderItem.length;
        changeActiveClass();
      },
    });
  }

  // Initial call
  changeActiveClass();
  startSlider();
})();
