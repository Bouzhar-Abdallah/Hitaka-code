window.addEventListener('DOMContentLoaded',function(){
document.querySelector(".ul").classList.remove("hide");

});

let menuBar = document.getElementById("fa-bars");
menuBar.addEventListener('click', function(){
    let menu= document.querySelector(".ul");
     menu.classList.toggle("hide");
  });

