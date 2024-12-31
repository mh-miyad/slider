import gsap from "gsap";
const tl = gsap.timeline({ defaults: { duration: 1 } });
const mouse = document.querySelector(`[data-mouse="slideJsMouse"]`);
const bgItems = document.querySelector(`.sliderBackgound`);

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX - 100; // Mouse X position
  const mouseY = e.clientY - 100; // Mouse Y position
  const xPercent = e.clientX / window.innerWidth;
  const yPercent = e.clientY / window.innerHeight;
  gsap.to(bgItems, {
    backgroundPosition: `${xPercent * 10}% ${yPercent * 10}%`,
    backgroundAttachment: "fixed",
    scale: 1,
    duration: 0.8,
    ease: "Linear.easeNone",
  });
  // Animate the custom cursor to follow the mouse
  gsap.to(mouse, {
    x: mouseX,
    y: mouseY,
    scale: 0.2,
    duration: 0.2, // Lower duration for less delay
  });
});
