import Lenis from "lenis";
const lenis = new Lenis({
  autoRaf: true,
  easing: "easeOutQuad",
});
// Listen for the scroll event and log the event data
lenis.on(
  "scroll",
  ({
    scroll,
    limit,
    velocity,
    direction,
    isHorizontal,
    isScrolling,
    isStopped,
  }) => {},
);
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
