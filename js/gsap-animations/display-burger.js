var burger = document.querySelector('.burger');  
var cursor = document.querySelector('.c-cursor__pointer')

//DisplayBurger
var displayBurger = new TimelineMax({paused:true, reversed:true});

    displayBurger.to('.burger', 0.1, {visibility:"visible"},'start')
    displayBurger.to('.burger', 0.3, {opacity:1 , right:0 , ease:Circ.easeInOut},'end')
    displayBurger.to('.menu-scroll-top', 0.3, {opacity:0, top:'-75%', ease:Circ.easeInOut},'end')
    displayBurger.to('.burger', 0.1, {scale :1},'end')

    displayBurger.to('.burger', 0.2, {scale :1.1, ease:Bounce.easeInOut})
    displayBurger.to('.burger', 0.1, {scale :1},)

//Burger Mouse Hover
var burgerHover = new TimelineMax({paused:true, reversed:true});

    burgerHover.to('.top',0.3,{attr:{d:'M15,15 C15,15,20,15,25,15 S35,15,35,15'}},'middle')
    burgerHover.to('.mid',0.3,{attr:{d:'M25,25 L35,25'}},'middle')
    burgerHover.to('.bot',0.3,{attr:{d:'M7,35 C15,35,20,35,25,35 S35,35,35,35'}},'middle')

//Animation Button Click
var burgerClick = new TimelineMax({paused:true, reversed:true});
    //Color
        burgerClick.to('.top',0.6,{stroke:'white'},'start')
        burgerClick.to('.bot',0.6,{stroke:'white'},'start')
        burgerClick.to('.mid',0.6,{stroke:'white'},'start')
    //Move
    burgerClick.to('.mid', 0.1, {scaleX: 0, transformOrigin: '50% 50%', ease: Back.easeIn},'start');
    burgerClick.to('.top', 0.2, {attr: {d: "M15,15 C15,15,25,25,25,25 S35,15,35,15"}}, 'start');
    burgerClick.to('.bot', 0.2, {attr: {d: "M15,35 C15,35,25,25,25,25 S35,35,35,35"}}, 'start'); 


let stateScroll = 0
//Event Display Burger
    window.addEventListener('scroll', function (){
        if (window.screen.width*window.devicePixelRatio >= 980) {
            if (document.documentElement.scrollTop === 0 && stateScroll !=0 ) {
                stateScroll = 0
                displayBurger.reverse(0); 
            }else if (document.documentElement.scrollTop != 0 && stateScroll ===0) {
                stateScroll = document.documentElement.scrollTop
                displayBurger.restart(); 
            }else{return}
        }else{
            if (linkHover1.reversed()) {
                displayBurger.restart() 
            }
        }
        
   })
//Event Burger Hover
   burger.addEventListener('mouseenter',function(){
       if (!burger.classList.contains('active')) {
           burgerHover.restart()
       }
   })
   burger.addEventListener('mouseleave',function(){
        if (!burger.classList.contains('active')) {
                burgerHover.reverse(0)
        }
   }) 
//Event Burger Click
burger.addEventListener('click',function () {
    if (burgerClick.reversed()) {
      controlit.classList.add("active"); 
        cursor.classList.add('active')
      burgerClick.restart();
    }else{
        burgerClick.reverse(0);
        setTimeout(() => {
            burgerHover.reverse(0)
            controlit.classList.remove("active"); 
            cursor.classList.remove('active')

        }, 500);
    }
})