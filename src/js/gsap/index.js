import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Timeline);

const boxes = gsap.utils.toArray(".fade-in");
boxes.forEach((box) => {
  // dataset is reference to data attributes on given dom element
  // if it has reference in the DOM, do the ypos, otherwise set to default of 10px
  yPos = box.dataset.ypos ? box.dataset.ypos : 10;
  let yPos = box.dataset.ypos ? box.dataset.ypos : 10;
  // let xPos = box.dataset.xpos ? box.dataset.xpos : 10;
  let duration = box.dataset.duration ? box.dataset.duration : 1;
  let stagger = box.dataset.stagger ? box.dataset.stagger : 0;

  const anim = gsap.fromTo(
    box,
    { autoAlpha: 0, y: yPos },
    { duration: duration, delay: stagger, autoAlpha: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleClass: 'in-view'
  });
});