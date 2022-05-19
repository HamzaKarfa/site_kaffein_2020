
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1) ,
  ease: "none",
  scrollTrigger: {
    trigger: ".section-scroll-x-auto",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".section-scroll-x-auto").offsetWidth
  }
});

let itemScrollX = document.querySelectorAll('.profil')
for (let i = 0; i < itemScrollX.length; i++) {
  if (i % 2 == 0) {
    itemScrollX[i].style.marginBottom = '200px'
  }else{
    itemScrollX[i].style.marginTop = '200px'
  }
  
}