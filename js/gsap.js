var tl = new gsap.timeline();

tl.from(".site_header", 1, { y: -100, ease: "power1.inOut" });
tl.staggerFrom(".nav-link", 1, { y: -100, ease: "power1.inOut" }, 0.07, 0);
tl.from(".about-arrow", 1, { y: "-100%", ease: "power1.inOut" });
tl.from(
  [".copy1, .copy2"],
  1,
  {
    scale: 0,
    rotate: 360,
    ease: "power1.inOut",
    onComplete: () => {
      tl.to([".copy1 h3, .copy1 p, .copy2 h3, .copy2 p, .copy2 .icon"], {
        autoAlpha: 1,
      });
    },
  },
  1
);
