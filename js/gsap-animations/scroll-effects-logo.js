window.addEventListener('scroll', function() {
    var element = document.querySelector('.homepage-section-2');
    if (element !== null ) {
      
      var position = element.getBoundingClientRect();
      var colorLogo = new TimelineMax({paused:false, reversed:true});
      
              colorLogo.to(k, .02, {fill:'white'})
              colorLogo.to(a, .02, {fill:'white'})
              colorLogo.to(ff, .02, {fill:'white'})
              colorLogo.to(e, .02, {fill:'white'})
              colorLogo.to(exclamation, .02, {fill:'#00C5BE'})
              colorLogo.to(n, .02, {fill:'white'})    
              colorLogo.to('.top',0.2,{stroke:'white'},'start')
              colorLogo.to('.bot',0.2,{stroke:'white'},'start')
              colorLogo.to('.mid',0.2,{stroke:'white'},'start')
      
      var colorLogoReverse = new TimelineMax({paused:false, reversed:true});
      
              colorLogoReverse.to(k, .02, {fill:'#252627'})
              colorLogoReverse.to(a, .02, {fill:'#252627'})
              colorLogoReverse.to(ff, .02, {fill:'#252627'})
              colorLogoReverse.to(e, .02, {fill:'#252627'})
              colorLogoReverse.to(exclamation, .02, {fill:'#51326E'})
              colorLogoReverse.to(n, .02, {fill:'#252627'})
              colorLogoReverse.to('.top',0.2,{stroke:'#252627'},'start')
              colorLogoReverse.to('.bot',0.2,{stroke:'#252627'},'start')
              colorLogoReverse.to('.mid',0.2,{stroke:'#252627'},'start')
      
    // checking whether fully visible
    if(position.top <= 0 && position.bottom <= window.innerHeight && position.bottom>=0) {
  
          if (colorLogo.reversed()) {
              colorLogo.restart() 
            }
    }else{
      colorLogoReverse.restart()
  
    }
    }
});