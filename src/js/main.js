"use strict";

//SHOW AND HIDDEN SOCIAL MEDIA
const navigator = document.querySelector(".navigator-js");
const hamburguer = document.querySelector(".js-hamburguer");

function hiddenNav() {
  navigator.classList.toggle("hidden");
  navigator.classList.toggle("stretchRight");
  // navigator.classList.toggle("stretchLeft");
  navigator.classList.toggle("z-index-navigator");
  hamburguer.classList.toggle("hamburguer_zindex");
  hamburguer.classList.toggle("rotate__lines");
}
hamburguer.addEventListener("click", hiddenNav);

//CARROUSEL PROJECTS
let projectsIndex = 0;

function showProject(n) {
  const allProjects = document.querySelectorAll(".card_project-js");
  if (n >= allProjects.length) {
    projectsIndex = 0;
  } else if (n < 0) {
    projectsIndex = allProjects.length - 1;
  }

  for (let i = 0; i < allProjects.length; i++) {
    allProjects[i].style.display = "none";
  }
  allProjects[projectsIndex].style.display = "flex";
}

const arrowPrev = document.querySelector(".arrow_prev-js");
const arrowNext = document.querySelector(".arrow_next-js");

if (arrowNext) {
  arrowNext.addEventListener("click", function () {
    plusProject(1);
  });
}
if (arrowPrev) {
  arrowPrev.addEventListener("click", function () {
    plusProject(-1);
  });
}

function plusProject(n) {
  showProject((projectsIndex += n));
}
