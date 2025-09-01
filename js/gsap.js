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
const text = document.querySelector(".text");
const words = text.innerText.split(" ");
text.innerHTML = words.map((w) => `<span>${w}</span>`).join(" ");
gsap.to(".text span", {
  scrollTrigger: {
    trigger: ".text",
    start: "top 30%",
    end: "bottom 150%",
    scrub: true,
  },
  color: "#ff4d4d",
  stagger: 0.2, // delay between words
  ease: "none",
});
