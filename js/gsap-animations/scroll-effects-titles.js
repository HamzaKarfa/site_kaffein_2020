// ScrollTrigger.defaults({
//     toggleActions: 'restart none none reverse',
//     scrub: 1,
//     markers: true,
//     start: () => "-=" + document.querySelector(".title-left").offsetWidth + "center",
//     end: "+=" + document.querySelector(".title-left").offsetWidth,
// });

let titlesLeft = document.querySelectorAll('.title-left');

titlesLeft.forEach(function (element, index) {
    let animation = gsap.fromTo(element, {
            opacity:0,
            x: -1000,
            ease: "easeOut"
        },
        {
            opacity:1,
            x: 0,
            ease: "easeOut"
        });

    ScrollTrigger.create({
        trigger: element,
        animation: animation,
        toggleActions: 'restart none none reverse',
        scrub: 1,
        markers: true,
        start: () => "-=" + titlesLeft.offsetWidth + "top",
        end: "+=" + titlesLeft.offsetWidth,

    });


})



