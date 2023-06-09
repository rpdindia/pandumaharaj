// Select The Elements
var toggle_switch;
var toggle_btn;
var big_wrapper;
var hamburger_menu;

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 30) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== Mobile Menu====================*/
big_wrapper = document.querySelector(".big-wrapper");
hamburger_menu = document.querySelector(".hamburger-menu");

function events() {
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

/*==================== copyright year====================*/

var date = new Date();
var year = date.getFullYear();

document.getElementById("year").innerHTML = year;

/*====================Translate ====================*/

// var sb = document.getElementById('lang-translate');
// var o = document.getElementById('mr');
// o.selected = 'selected';
// o.value = '.index.html';

// var sb = document.getElementById('lang-translate');
// var o = document.getElementById('en');

// o.value = '.en.html';
// sb.onchange = function () { document.location.href = this.value; }
