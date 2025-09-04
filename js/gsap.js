gsap.registerPlugin(ScrollTrigger, SplitText);

// Normal timeline animations that should play in sequence
var tl = gsap.timeline();
tl.from(".about-arrow", 1, { y: "-100%", ease: "power1.inOut" });

tl.from(
  [".copy1, .copy2"],
  1,
  {
    scale: 0,
    rotate: 70,
    ease: "power1.inOut",
    onComplete: () => {
      tl.to([".copy1 h3, .copy1 p, .copy2 h3, .copy2 p, .copy2 .icon"], 0.5, {
        autoAlpha: 1,
        ease: "power1.inOut",
      });
    },
  },
  1
);

// Split text paragraphs
document.querySelectorAll(".about-section p").forEach((p) => {
  const chars = p.innerText.split("").map((char) => {
    if (char === " ") {
      return `<span style="white-space:pre;"> </span>`;
    }
    return `<span>${char}</span>`;
  });

  p.innerHTML = chars.join("");

  tl.to(p.querySelectorAll("span"), {
    color: "var(--color3)",
    stagger: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: p,
      start: "top 20%",
      end: "bottom -20%",
      scrub: true,
      pin: true,
    },
  });
});

// Photo animation
tl.to(".photo", {
  width: "100vw",
  height: "95vh",
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".image-wrapper",
    start: "top 20%",
    end: "bottom -50%",
    scrub: 2,
    pin: ".image-wrapper", // 👈 pin the wrapper
    pinSpacing: true,
  },
});

// Card animation (only when reaching `.vision` section)
// tl.from(".vision .card", {
//   rotate: 70,
//   autoAlpha: 0,
//   scale: 0.2,
//   ease: "power1.inOut",
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: ".vision",
//     start: "top 0",
//     end: "bottom 0",
//     toggleActions: "play none none reverse",
//     pin: true,
//     scrub: 3,
//   },
// });

gsap.utils.toArray(".vision .card").forEach((card, i) => {
  gsap.from(card, {
    y: 100,
    autoAlpha: 0,
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: card,
      start: "top 80%", // when card enters viewport
      end: "top 50%",
      toggleActions: "play none none reverse",
      scrub: false, // let easing work
      // markers: true,
    },
  });
});

document.querySelectorAll(".services .title h2").forEach((h2) => {
  const words = h2.innerText.split(" ").map((word) => {
    const chars = word
      .split("")
      .map((char) => `<span class="char">${char}</span>`)
      .join("");
    return `<span class="word">${chars}</span>`; // wrap whole word
  });

  h2.innerHTML = words.join(" "); // put space back between words

  tl.to(h2.querySelectorAll(".char"), {
    color: "var(--color3)",
    stagger: 0.1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".services",
      start: "top 0",
      end: "bottom 100%",
      scrub: true,
    },
  });
});

gsap.from(".accordion-item", {
  y: 200,
  ease: "power1.inOut",
  autoAlpha: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".faq",
    start: "top 100%",
    end: "bottom 0",
    scrab: 3,
    toggleActions: "play none none reverse",
    // pin: true,
  },
});

tl.to(".home-about_component", {
  width: "100vw",
  height: "100vh",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".home-about_component",
    start: "top 10%",
    end: "bottom -100%",
    toggleActions: "play none none reverse",
    scrub: true,
    // markers: true,
  },
});

tl.to(".home-about_img-text", 1, {
  autoAlpha: 1,
  y: 0,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".home-about_img-text",
    start: "top -50%",
    end: "bottom 0",
    toggleActions: "play none none reverse",
    scrub: 2,
  },
});
gsap.utils.toArray(".understanding .card").forEach((card, i) => {
  gsap.from(card, {
    y: 100,
    autoAlpha: 0,
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: card,
      start: "top 80%", // when card enters viewport
      end: "top 50%",
      toggleActions: "play none none reverse",
      scrub: false, // let easing work
      // markers: true,
    },
  });
});
