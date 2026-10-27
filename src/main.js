import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.to(".blackSquare", { 
  duration: 2,
  backgroundColor: "white",
});

gsap.to("h1, h2", { 
  duration: 1.75,
  stagger: 0.25,

  x: 1000,
  color: "black",
});

gsap.to("h3", { 
  duration: 1,

  y:-50,
  color: "black",

    scrollTrigger: {
    trigger: ".Coloredcube",
    start: "top 5%",
    end: "bottom 30%",

    scrub: true,
    markers: true,
  }
});

gsap.to(".Coloredcube", { 
  duration: 1.75,
  stagger: 0.25,

  y:-100,
  backgroundColor: "#535252",

    scrollTrigger: {
    trigger: ".h3",
    start: "top 5%",
    end: "bottom 30%",

    scrub: true,
    markers: true,
  }
});
