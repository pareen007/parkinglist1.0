let menu = document.getElementById("menu");
let navMenu = document.getElementById("navMenu");
menu.addEventListener("click", function() {
  console.log("click");
  navMenu.classList.toggle("navmenu-active");
});
