///////////////////////////////////////////NavBar///////////////////////////////////////////////
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const bar = document.querySelector(".bar");
  const nav = document.querySelector(".navigation");
  const homeContent = document.querySelector(".home-content");
  const links = document.querySelector(".navigation");
  const barsImg = document.querySelector(".bar");
  const logoImage = document.getElementById("logo-image");

  function openNav() {
    nav.style.left = "0%";
    bar.src = "X.png";
    homeContent.style.left = "30%";
  }

  function closeNav() {
    nav.style.left = "-100%";
    bar.src = "Hamburger_icon.svg.png";
    homeContent.style.left = "2.5%";
  }

  function isNavOpen() {
    return nav.style.left === "0%";
  }

  bar.addEventListener("click", () => {
    if (isNavOpen()) {
      closeNav();
    } else {
      openNav();
    }
  });

  links.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "A") {
      closeNav();
    }
  });


    
//////////////////////////////////////////Home content from left //////////////////////////////////
    
  setTimeout(() => {
    homeContent.classList.remove("initial-position");
    homeContent.style.left = "38px";
  }, 500);
});


 



