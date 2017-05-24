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

  //EMPLOYEE TEXT BUBBLES

  // INIT BUBBLE
  document.querySelector('.emp1').classList.add('active--pic');

  // CHANGE BUBBLE
  var employee1Element = document.querySelector('.emp1');
  var employee2Element = document.querySelector('.emp2');
  var employee3Element = document.querySelector('.emp3');

  employee2Element.addEventListener('click', function(ev){
    ev.preventDefault();
    document.querySelector('.s__bubble').textContent = "Houston ehm Zana we have a problem, is iets wat ik hier dagelijks hoor. Gelukkig ben ik er dan om die problemen op te lossen samen met mijn andere backend developers @spacecadet.";
    document.querySelector('.emp2').classList.add('active--pic');
    document.querySelector('.emp1').classList.remove('active--pic');
    document.querySelector('.emp3').classList.add('inactive--pic');
  });

  employee3Element.addEventListener('click', function(ev){
    ev.preventDefault();
    document.querySelector('.s__bubble').textContent = "NIGGAN IGAA NIGAAN IGAANIGAANIGAA";
    document.querySelector('.emp2').classList.remove('active--pic');
    document.querySelector('.emp1').classList.add('inactive--pic');
    document.querySelector('.emp3').classList.add('active--pic');
    document.querySelector('.emp3').classList.remove('inactive--pic');
  });

  employee1Element.addEventListener('click', function(ev){
    ev.preventDefault();
    document.querySelector('.s__bubble').textContent = "BITCH BITCH BITCH BITCH BITCH BITCH";
    document.querySelector('.emp2').classList.remove('active--pic');
    document.querySelector('.emp3').classList.add('inactive--pic');
    document.querySelector('.emp1').classList.add('active--pic');
    document.querySelector('.emp1').classList.remove('inactive--pic');
  });



})();
