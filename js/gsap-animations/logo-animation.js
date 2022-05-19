
/* Setup variables */
var container = document.querySelectorAll("#logo")
var logo = document.querySelectorAll(".logo")
var a = document.querySelectorAll(".a")   
var ff = document.querySelectorAll(".ff")
var e = document.querySelectorAll(".e")
var n = document.querySelectorAll(".n")
var exclamation = document.querySelectorAll(".exclamation")

MorphSVGPlugin.convertToPath("circle, rect");
/* Create a timeline */ 
let tl = new TimelineMax({paused: true});

/* Clear the scene */
tl.set('svg', {visibility: 'visible'});
tl.set(container, {perspective: 500});


/* Animation Ka! */
  tl.to(e, 0.3, {
      yPercent: -150,
      ease:Circ.easeInOut
  });
  tl.to(n, 0.4, {
    yPercent: 130,
    ease:Circ.easeInOut
  },"-=0.2");
  tl.to(ff, 0.4, {
    yPercent: 130,
    ease:Circ.easeInOut
  },"-=0.2");
  tl.to(exclamation, 0.3, {
    xPercent: -615,
    ease:Circ.easeInOut
  },"-=0.3");
  /* Point animation */
  tl.to(container, 0.3, {
    scale: 1.2,
    transformOrigin: "left center", 
    ease: Back.easeInOut.config(1.5),
  },"-=0.1");
  tl.to(container, 0.1, {
    scale: 1,
  });
  

 let stateWindowScroll = 0

    window.addEventListener('scroll', function (){
         if (document.documentElement.scrollTop < 160 && stateWindowScroll !=0) {
             stateWindowScroll = 0
             tl.reverse(0); 
            
         }else if (document.documentElement.scrollTop >160 && stateWindowScroll ===0) {
             stateWindowScroll = document.documentElement.scrollTop
             tl.restart(); 
         }else{return}
    })

