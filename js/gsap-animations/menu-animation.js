//Variables logo
  var exclamation = document.querySelectorAll('.exclamation path')
  var logo = document.querySelector(".logo")
  var k = document.querySelector(".k")   
  var a = document.querySelector(".a")   
  var ff = document.querySelector(".ff")
  var e = document.querySelector(".e")
  var n = document.querySelector(".n")
//Variables Burger
  var controlit = document.querySelector('.burger'); 
//Variables Burger Items 
  var links = document.querySelectorAll('.nav-link')
  var link1 = document.querySelector('.nav-link-1')
  var link2 = document.querySelector('.nav-link-2')
  var link3 = document.querySelector('.nav-link-3')
  var link4 = document.querySelector('.nav-link-4')


var menuToggle = new TimelineMax({paused:true, reversed:true});

//Animation Menu
menuToggle.to('.nav-header-green', 0.001, { borderRadius:'100%'},'start')
menuToggle.to('.nav-header', 0.001, {borderRadius:'100%'},'start')
// menuToggle.to('.home',0.1,{overflow:'hidden'})
menuToggle.to('.nav-header-green', 0.9, { left: '0%', top: '0%', width:'250vw', height:'150vh',transform: 'scale(2)' ,opacity: 1, ease:Circ.easeOut},'middle')
menuToggle.to('.nav-header', 1.1, { left: '0%', top: '0%', width:'250vw', height:'150vh',transform: 'scale(2)' ,opacity: 1, ease:Circ.easeOut},'middle')
menuToggle.to('.nav-header-green', 0.001, { borderRadius:'0%',height:'100vh'},'middle2')
menuToggle.to('.nav-header', 0.001, {borderRadius:'0%' ,height:'100vh'},'middle2')


//Animation Logo Color
  menuToggle.to(k, .02, {fill:'white'})
  menuToggle.to(a, .02, {fill:'white'})
  menuToggle.to(ff, .02, {fill:'white'})
  menuToggle.to(e, .02, {fill:'white'})
  menuToggle.to(exclamation, .02, {fill:'#00C5BE'})
  menuToggle.to(n, .02, {fill:'white'})
  
//Animation Burger Items  
  menuToggle.to(link1,0.15,{left:0, opacity:1})
  menuToggle.to(link2,0.15,{left:0, opacity:1})
  menuToggle.to(link3,0.15,{left:0, opacity:1})
  menuToggle.to(link4,0.15,{left:0, opacity:1})
  
  
  controlit.addEventListener('click',function () {
    if (menuToggle.reversed()) {
      menuToggle.restart() 
    } else {
      menuToggle.reverse(0) 
    }
  });


 
    