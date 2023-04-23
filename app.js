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

/*====================  Theme Switcher====================*/

function declare() {
  toggle_switch = document.querySelector("#checkbox");
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}
/*==================== Mobile Menu====================*/

function events() {
  toggle_switch.addEventListener("change", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

/*==================== copyright year====================*/

var date = new Date();
var year = date.getFullYear();

document.getElementById("year").innerHTML = year;

/*====================  scroll to Top buttion ====================*/

const footerElement = document.querySelector(".footer");

const scrollElement = document.createElement("div");
// scrollElement.classList.add("scrollTop");
scrollElement.innerHTML = '<i class="fa-solid fa-arrow-up scroll-icon"></i>';

footerElement.after(scrollElement);

scrollElement.addEventListener("click", function (){
  window.scrollTo({top:0,left:0,behavior:"smooth"})
});
function scrollbtn() {
  // When the scroll is greater than 600 viewport height, add the scrollTop class 
  if (this.scrollY >= 650) scrollElement.classList.add("scrollTop");
  else scrollElement.classList.remove("scrollTop");
}
window.addEventListener("scroll", scrollbtn);

/*====================Translate ====================*/

// var sb = document.getElementById('lang-translate');
// var o = document.getElementById('mr');
// o.selected = 'selected';
// o.value = '#';

// var sb = document.getElementById('lang-translate');
// var o = document.getElementById('en');

// o.value = '#';
// sb.onchange = function () { document.location.href = this.value; }

/*==================== Contact form ====================*/

const form = document.querySelector("form"),
  nameField = document.querySelector(".name-field"),
  nameInput = document.querySelector(".name"),
  emailField = document.querySelector(".email-field"),
  emailInput = document.querySelector(".email"),
  messageField = document.querySelector(".message-field"),
  messageInput = document.querySelector(".message-text");

function validateForm() {
  const namePattern = /^[a-zA-Z]+/; //name regx (regular expression)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //email regx (regular expression)
  const msgPattern = /^[a-zA-Z]+/; // msg (regular expression)

  if (!nameInput.value.match(namePattern)) {
    return nameField.classList.add("invalid"); //adding invalid class if name value do not mathced with name pattern
  } else {
    nameField.classList.remove("invalid"); //removing invalid class if name value matched with namePattern
  }
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  } else {
    emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
  }
  if (!messageInput.value.match(msgPattern)) {
    return messageField.classList.add("invalid"); //adding invalid class if msg value do not mathced with msg pattern
  } else {
    emailField.classList.remove("invalid"); //removing invalid class if msg value matched with msgPattern
  }
}

// Calling Funtion on Form Sumbit
form.onsubmit = (e) => {
  e.preventDefault(); //preventing form submitting
  validateForm();

  //calling function on key up
  emailInput.addEventListener("keyup", validateForm);
  nameInput.addEventListener("keyup", validateForm);
  nameInput.addEventListener("keyup", validateForm);

  if (
    !emailField.classList.contains("invalid") &&
    !nameField.classList.contains("invalid") &&
    !messageField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
};
