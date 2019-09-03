let menu = document.getElementById("menu");
let navMenu = document.getElementById("navMenu");
let menulink = document.getElementsByClassName('menulink');
menu.addEventListener("click", function() {
  navMenu.classList.toggle("navmenu-active")
  for (let i = 0; i < menulink.length; i++) {
      if (menulink[i].style.backgroundColor === 'black') {
        menulink[i].style.backgroundColor = 'white'
      } else{
        menulink[i].style.backgroundColor = 'black'
      }
  }
});å
