let Position = 0;
const PIC = document.querySelector('.pic');
const LEFT = document.querySelector('.left');
LEFT.addEventListener('click',(e) => {
  e.preventDefault;
  //console.log(LEFT,e,PIC);
  Position += 100;
  PIC.style.left = `${Position}px`;
  
});
const RIGHT = document.querySelector('.right');
RIGHT.addEventListener('click',(e) => {
  e.preventDefault;
  //console.log(RIGHT,e);
  Position -= 100;
  PIC.style.left = `${Position}px`;
});