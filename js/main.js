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
  document.querySelector('.s__bubble').textContent = "Als oprichter van Space Cadet, heeft het bedrijf al altijd een speciale plaats in mijn hart gehad.Ondanks de grote boom die wij de laatste jaren gekend hebben, ben ik nog steeds mezelf gebleven.Ik zorg bij Space Cadet voor alles van fotografie tot audio tot webdesign.Ik sta altijd klaar voor u de klant en mijn collega's kunnen ook steeds op me rekenen";

  // CHANGE BUBBLE
  var employee1Element = document.querySelector('.emp1');
  var employee2Element = document.querySelector('.emp2');
  var employee3Element = document.querySelector('.emp3');

  employee2Element.addEventListener('click', function(ev){
    ev.preventDefault();
    document.querySelector('.s__bubble').textContent = "Toen Isaac mij vroeg of ik deel wilde maken van Space Cadet, heb ik direct ingestemd. Ik kon me helemaal vinden in de visie die hij voor dit bedrijf had. Sindsdien ben ik frontend developer hier bij Space Cadet. Samen met u zorg ik voor een prachtige uitwerking van uw ideeën!";
    document.querySelector('.emp2').classList.add('active--pic');
    document.querySelector('.emp1').classList.remove('active--pic');
    document.querySelector('.emp3').classList.add('inactive--pic');
  });

  employee3Element.addEventListener('click', function(ev){
    ev.preventDefault();
    document.querySelector('.s__bubble').textContent = "Houston ehm Zana we have a problem, is iets wat ik hier dagelijks hoor. Gelukkig ben ik er dan om die problemen op te lossen samen met mijn andere backend developers @spacecadet. Er heerst hier altijd een toffe, relaxte sfeer die het mogelijk maakt mij goed te focussen op mijn werk.";
    document.querySelector('.emp2').classList.remove('active--pic');
    document.querySelector('.emp1').classList.add('inactive--pic');
    document.querySelector('.emp3').classList.add('active--pic');
    document.querySelector('.emp3').classList.remove('inactive--pic');
  });

  employee1Element.addEventListener('click', function(ev){
    ev.preventDefault();
    document.querySelector('.s__bubble').textContent = "Als oprichter van Space Cadet, heeft het bedrijf al altijd een speciale plaats in mijn hart gehad.Ondanks de grote boom die wij de laatste jaren gekend hebben, ben ik nog steeds mezelf gebleven.Ik zorg bij Space Cadet voor alles van fotografie tot audio tot webdesign.Ik sta altijd klaar voor u de klant en mijn collega's kunnen ook steeds op me rekenen";
    document.querySelector('.emp2').classList.remove('active--pic');
    document.querySelector('.emp3').classList.add('inactive--pic');
    document.querySelector('.emp1').classList.add('active--pic');
    document.querySelector('.emp1').classList.remove('inactive--pic');
  });



})();
