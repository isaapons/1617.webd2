;(function() {

  document.getElementById("hamburger")
  .addEventListener("click", function(){
  var pressed = document.querySelectorAll(".main-nav > a");
  pressed.className += "appear";
  }, false);


})();
