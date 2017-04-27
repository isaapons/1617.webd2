// ;(function() {

/*
document.getElementById("hamburger").addEventListener("click",
function(){
document.getElementsByClassName('main-nav').setAttribute("style", "height:100vh; width:100vw; display: flex; justify-content: center;");
}, false);
*/
/*
document.getElementById("hamburger").onclick = function(){

var navArray = document.querySelectorAll(".main-nav");
// console.log(navArray);

if (navArray[0].style.display != "flex") {
navArray[0].setAttribute("style", "display:flex; flex-direction: column; align-items: center; flex-wrap: wrap; z-index: 1; background:#525170; padding: 12px 12px 12px 12px; border-style:none; border-radius: 12px;");
} else {
navArray[0].style.display = "none";
}

};
})(); */

;(function() {
  var hamElement = document.querySelector('.hamburger');
  var navElement = document.querySelector('.main-nav'); // chromefix
  hamElement.addEventListener('click', function(ev) {
    ev.preventDefault();
    document.querySelector('.main-nav').classList.toggle('nav--isvisible');
    document.querySelector('.hamburger').classList.toggle('ham--invisible');
    document.querySelector('.cross').classList.toggle('cross--isvisible');
   //chromefix
    if(navElement.classList.contains("nav--away")){
      document.querySelector('.main-nav').classList.toggle('nav--away');
    }
    return false;
  });

  var crossElement = document.querySelector('.cross');

  crossElement.addEventListener('click', function(eb) {
    eb.preventDefault();
    document.querySelector('.main-nav').classList.toggle('nav--isvisible');
    document.querySelector('.main-nav').classList.toggle('nav--away'); // chromefix
    document.querySelector('.hamburger').classList.toggle('ham--invisible');
    document.querySelector('.cross').classList.toggle('cross--isvisible');
    return false;
  });


})();
