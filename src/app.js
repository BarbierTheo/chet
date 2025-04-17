import { gsap } from "gsap";

import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 3,
    effects: true,
    smoothTouch: 0.1,
    normalizeScroll: true,
});


ScrollTrigger.create({
    trigger: ".quotebar",
    start: "top 80%",
    end: "bottom 50%",
    onEnter: () => {
        gsap.to(".quotebar", {
            width: '25%',
            duration:1,
        })

        gsap.to(".quote1", {
            opacity: 1,
            delay: 0.5,
        })

        gsap.to(".quote2", {
            opacity: 1,
            scrub: true,
            delay: 1,
        })
    }
})

gsap.to(".horizontal-scroll-content", {
    x: () => -(document.querySelector(".horizontal-scroll-content").scrollWidth - (window.innerWidth)),
    scrollTrigger: {
        trigger: ".horizontal-scroll-section",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true
    }
});


const split = new SplitText("#text-reveal").words

gsap.to(split, {
    color: "white",
    stagger: 1,
    scrollTrigger: {
        trigger: "#text-reveal",
        scrub: 3,
        start: "top 30%",
        end: "bottom 60%"
    }
})

gsap.to("#linksong", {
    opacity: 1,
    scrollTrigger: {
        trigger: "#linksong",
        scrub: 1,
        start: "top 80%",
        end: "bottom 50%",
    }
})


gsap.utils.toArray(".blocstory").forEach((blocstory, i) => {
    gsap.to(blocstory, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: blocstory,
        start: "top 50%",
        end: "bottom 10%",
        scrub: true,
      },
      delay: i * 0.3
    });
  });