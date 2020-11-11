import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Timeline);

const elems = gsap.utils.toArray(".fade-in");
elems.forEach((element) => {
  // dataset is reference to data attributes on given dom element
  // if it has reference in the DOM, do the ypos, otherwise set to default of 10px
  yPos = element.dataset.ypos ? element.dataset.ypos : 10;
  let yPos = element.dataset.ypos ? element.dataset.ypos : 10;
  // let xPos = element.dataset.xpos ? element.dataset.xpos : 10;
  let duration = element.dataset.duration ? element.dataset.duration : 1;
  let stagger = element.dataset.stagger ? element.dataset.stagger : 0;

  const anim = gsap.fromTo(
    element,
    { autoAlpha: 0, y: yPos },
    { duration: duration, delay: stagger, autoAlpha: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: element,
    animation: anim,
    toggleClass: 'in-view'
  });
});

// video autoplay
const vids = gsap.utils.toArray(".vjs-tech");
vids.forEach((vid) => {
  ScrollTrigger.create({
    trigger: vid,
    // animation: anim,
    toggleClass: 'in-view',
    onToggle: self => {
      // console.log("self: ", self);
      if ( self.trigger.classList.contains( 'in-view' ) ) {
        var playPromise = vid.play();
        if ( playPromise !== undefined ) {
          playPromise;
          // console.log( "vid: playing" );
        }
      } else {
        vid.pause();
        // console.log( "vid: pause" );
      }
    }
  });
});