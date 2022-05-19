let arrow = document.querySelector('.bounce')


var arrowTL = new TimelineMax({paused:true, reversed:true}); 


arrowTL.to(arrow, 0.2,{ ease:Circ.easeInOut ,transform : 'translateY(0)'})
arrowTL.to(arrow, 0.2,{ ease:Circ.easeInOut ,transform : 'translateY(-30px)'})
arrowTL.to(arrow, 0.2,{ ease:Circ.easeInOut ,transform : 'translateY(0)'})
arrowTL.to(arrow, 0.2,{ ease:Circ.easeInOut ,transform : 'translateY(-15px)'})
arrowTL.to(arrow, 0.2,{ ease:Circ.easeInOut ,transform : 'translateY(0)'})


document.querySelector('.hero-header-footer').addEventListener('mouseenter',function(){
    
    arrowTL.restart()
    
})
document.querySelector('.hero-header-footer').addEventListener('mouseleave',function(){
     
    arrowTL.restart()
     
}) 