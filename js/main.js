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
