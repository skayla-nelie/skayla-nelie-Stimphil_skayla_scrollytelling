gsap.registerPlugin(ScrollTrigger);
//gsap.registerPlugin(MotionPathPlugin);
//gsap.registerPlugin(MorphSVGPlugin);

gsap.fromTo(
  ".scrollDown",
  { y: "0%", opacity: 1, duration: 0 },
  { y: "50%", opacity: 0, duration: 3, repeat: -1 }
);
const body = document.querySelector("body");
let isScrolling;

window.addEventListener("scroll", function () {
  window.clearTimeout(isScrolling);
  body.classList.add("is-scrolling");

  isScrolling = setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 200);
});
//Animation chapitre 1
gsap
  .timeline({
    scrollTrigger: {
      scrub: true,
      trigger: "#chapterOne",
      pin: true,
      markers: true,
      start: "top top",
      end: "25% top",
      toggleActions: "play complete reverse reset",
    },
  })
  .fromTo(
    ".houseBox",
    {
      x: "0vw",
      y: "0vh",
      scale: 1,
    },
    {
      x: "75vw",
      y: "-200vh",
      scale: 30,
      ease0: "slow (0.3, 0.1, false)",
      duration: 2,
    }
  );

//Animation chapitre 2
gsap.fromTo(
  ".zzz",
  {
    x: "0",
    y: "0",
  },
  {
    scrollTrigger: {
      trigger: "#chapterTwo",
      pin: true,
      scrub: true,
      markers: true,
      start: "top top",
      end: "bottom top",
      toggleActions: "restart complete reverse reset",
    },
  }
);

//animation chapter 3
gsap
  .timeline({
    scrollTrigger: {
      scrub: true,
      trigger: "#chapterThree",
      pin: true,
      markers: true,
      start: "top top",
      end: "25% top",
      toggleActions: "play complete reverse reset",
    },
  })

  .fromTo(
    ".ghost",
    { x: "0", y: "0%", opacity: 0, duration: 0 },
    { x: "200", y: "-10%", opacity: 1, duration: 10, repeat: 1 }
  );

//chapter4
gsap.fromTo(
  ".ghost5 img",
  {
    x: "0",
  },
  {
    scrollTrigger: {
      trigger: "#chapterFour",
      pin: true,
      scrub: true,
    },
    x: "2500",
  }
);

//chapter5
gsap.fromTo(
  ".ghost6 img",
  {
    x: "0",
  },
  {
    scrollTrigger: {
      trigger: "#chapterFive",
      pin: true,
      scrub: true,
    },
    x: "2500",
  }
);

let circle = document.querySelector("#circle");

let timeline = gsap
  .timeline({ defaults: { duration: 1 } })
  .to(circle, { morphSVG: "#monster" }, "+=1");

document.addEventListener("scroll", function () {
  console.log("reset");
  timeline.progress(0).pause();
  timeline.play();
});
//chapter 6

gsap
  .fromTo(
    ".ghost7 img",
    {
      x: "0",
    },
    {
      scrollTrigger: {
        trigger: "#chapterSix",
        pin: true,
        scrub: true,
      },
      x: "1877.62px",
    }
  )
  .to("ghost7 img", {
    y: "500px",
  });

//chapter7
gsap
  .timeline({
    scrollTrigger: {
      scrub: true,
      trigger: "#chapterSeven",
      pin: true,
      markers: true,
      start: "top top",
      end: "25% top",
      toggleActions: "play complete reverse reset",
    },
  })

  .fromTo(
    ".ghost8",
    { x: "850", y: "-20%", opacity: 1, duration: 0 },
    { x: "0", y: "350", opacity: 0, duration: 50, repeat: 1 }
  );
//chapter8
gsap
  .timeline({
    scrollTrigger: {
      scrub: true,
      trigger: "#chapterEigth",
      pin: true,
      markers: true,
      start: "top top",
      end: "25% top",
      toggleActions: "play complete reverse reset",
    },
  })

  .fromTo(
    ".ghost4",
    { x: "850", y: "-20%", opacity: 1, duration: 0 },
    { x: "0", y: "350", opacity: 0, duration: 50, repeat: 1 }
  );
