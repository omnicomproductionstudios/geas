gsap.registerPlugin(ScrollTrigger);
var tl = new gsap.timeline();

tl.from(".site_header", 1, { y: -100, ease: "power1.inOut" });
tl.staggerFrom(".nav-link", 1, { y: -100, ease: "power1.inOut" }, 0.07, 0);
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
document.querySelectorAll(".about-section p").forEach((p, i) => {
  // Split text into words
  const words = p.innerText.split(" ");
  p.innerHTML = words.map((w) => `<span>${w}</span>`).join(" ");

  // Animate word by word
  gsap.to(p.querySelectorAll("span"), 1, {
    scrollTrigger: {
      trigger: p,
      start: "top 20%", // when paragraph enters viewport
      end: "bottom 20%", // until paragraph almost leaves
      scrub: true,
      pin: true,
    },
    color: "var(--color3)", // target color
    stagger: 0.1, // delay between words
    ease: "power1.inOut",
  });
});
