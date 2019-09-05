let menu = document.getElementById("menu");
let navMenu = document.getElementById("navMenu");
let menulink = document.getElementsByClassName('menulink');

mapboxgl.accessToken = 'pk.eyJ1IjoicGFyZWVuODkiLCJhIjoiY2p6bXlrb3F0MGQwOTNwczZkNDR1M2V0biJ9.wnH7WAPDltqrQmWTmTrbLg';
menu.addEventListener("click", function() {
  navMenu.classList.toggle("navmenu-active")
  for (let i = 0; i < menulink.length; i++) {
      if (menulink[i].style.backgroundColor === 'black') {
        menulink[i].style.backgroundColor = 'white'
      } else{
        menulink[i].style.backgroundColor = 'black'
      }
  }
}); 
