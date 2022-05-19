const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
for (let i = 0; i < slider.children.length; i++) {
  if (i % 2 == 0) {
    slider.children[i].style.marginBottom = '150px'
  }else{
    slider.children[i].style.marginTop = '150px'

  }
  
}


slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});


