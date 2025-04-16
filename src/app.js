import { gsap } from "gsap";

import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
    smoothTouch: 0.1,
    normalizeScroll: true,
});


ScrollTrigger.create({
    trigger: ".quotebar",
    start: "top 90%",
    onEnter: () => {
        gsap.to(".quotebar", {
            width: '25%',
            duration: 3
        })

        gsap.to(".quote1", {
            opacity: 1,
            duration: 2
        })

        gsap.to(".quote2", {
            opacity: 1,
            duration: 2,
            delay: 0.5
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
        pin: true,
    }
});