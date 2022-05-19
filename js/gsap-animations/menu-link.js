var links = document.querySelectorAll('.nav-link')
var link1 = document.querySelector('.nav-link-1')
var link2 = document.querySelector('.nav-link-2')
var link3 = document.querySelector('.nav-link-3')
var link4 = document.querySelector('.nav-link-4')

var linkHover1 = new TimelineMax({paused:true, reversed:true}); 
var linkHover2 = new TimelineMax({paused:true, reversed:true}); 
var linkHover3 = new TimelineMax({paused:true, reversed:true}); 
var linkHover4 = new TimelineMax({paused:true, reversed:true}); 

linkHover1.to(link1, 0.6, {backgroundImage:'-webkit-linear-gradient(left , #00C5BE 100%, #fff 0%)' , ease:Circ.easeInOut},"start")
linkHover2.to(link2, 0.6, {backgroundImage:'-webkit-linear-gradient(left , #00C5BE 100%, #fff 0%)' , ease:Circ.easeInOut},"start")
linkHover3.to(link3, 0.6, {backgroundImage:'-webkit-linear-gradient(left , #00C5BE 100%, #fff 0%)' , ease:Circ.easeInOut},"start")
linkHover4.to(link4, 0.6, {backgroundImage:'-webkit-linear-gradient(left , #00C5BE 100%, #fff 0%)' , ease:Circ.easeInOut},"start")

//----------Link 1 ----------//

    link1.addEventListener('mouseenter',function(e) {
        if (linkHover1.reversed()) {
            linkHover1.restart() 
        } else {
            linkHover1.reverse(0) 
        }
    }) 
    link1.addEventListener('mouseleave',function(e) {
            linkHover1.reverse(0) 
    }) 
//----------Link 2 ----------//

    link2.addEventListener('mouseenter',function(e) {
        if (linkHover2.reversed()) {
            linkHover2.restart() 
        } else {
            linkHover2.reverse(0) 
        }
    }) 
    link2.addEventListener('mouseleave',function(e) {
            linkHover2.reverse(0) 
    }) 
//----------Link 3 ----------//

    link3.addEventListener('mouseenter',function(e) {
        if (linkHover3.reversed()) {
            linkHover3.restart() 
        } else {
            linkHover3.reverse(0) 
        }
    }) 
    link3.addEventListener('mouseleave',function(e) {
            linkHover3.reverse(0) 
    }) 
//----------Link 4 ----------//

    link4.addEventListener('mouseenter',function(e) {
        if (linkHover4.reversed()) {
            linkHover4.restart() 
        } else {
            linkHover4.reverse(0) 
        }
    }) 
    link4.addEventListener('mouseleave',function(e) {
            linkHover4.reverse(0) 
    }) 