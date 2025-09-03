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

  gsap.to(p.querySelectorAll("span"), {
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
gsap.to(".photo", 4, {
  width: "100vw",
  height: "100vh",
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".image-wrapper",
    start: "top 23%",
    end: "bottom -50%",
    scrub: true,
    pin: true,
  },
});

// Card animation (only when reaching `.vision` section)
gsap.from(".vision .card", {
  rotate: 70,
  autoAlpha: 0,
  scale: 0.2,
  ease: "power1.inOut",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".vision",
    start: "top -5%",
    end: "bottom 0",
    toggleActions: "play none none reverse",
    pin: true,
  },
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

  gsap.to(h2.querySelectorAll(".char"), {
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
