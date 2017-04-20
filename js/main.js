;(function() {

  /*
  document.getElementById("hamburger").addEventListener("click",
  function(){
  document.getElementsByClassName('main-nav').setAttribute("style", "height:100vh; width:100vw; display: flex; justify-content: center;");
}, false);
*/

document.getElementById("hamburger").onclick = function(){

  var navArray = document.querySelectorAll(".main-nav");
  /*  var navA = document.querySelectorAll(".main-nav > a");
  navA[0,1,2,3].setAttribute("style", "margin-left: 0px");
  */
  // console.log(navArray);

  if (navArray[0].style.display != "flex") {
    navArray[0].setAttribute("style", "display:flex; flex-direction: column; align-items: flex-end; flex-wrap: wrap; z-index: 1; background:#525170; padding: 12px 12px 12px 12px; border-style:none; border-radius: 12px;");
  } else {
    navArray[0].style.display = "none";
  }

};
})();
