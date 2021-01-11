// utilisation du mode strict en javascript
"use strict";

// déclaration de la variable
let cv = [
  {
    name: "Pariset",
    lastName: "Yoann",
    values:
      "I consider that the foundation of a good developer is a constant desire to learn and follow new trends.",
    poste: "junior full-stack developer", 
    navBar : [{name : "Home", liClass : "active", hrefA : "#", aClass : ""}, 
              {name : "About", liClass : "", hrefA : "#page-about",  aClass : "scrollToAbout"}, 
              {name : "Skills", liClass : "", hrefA : "#page-skills", aClass : "scrollToSkills"}, 
              {name : "Resume", liClass : "", hrefA : "#page-resume", aClass : "scrollToResume"}, 
              {name : "Experience", liClass : "", hrefA : "#page-experience", aClass : "scrollToExperience"}, 
              {name: "Portfolio", liClass : "", hrefA : "#page-portoflio", aClass : "scrollToPortoflio"}, 
              {name : "Contact me", liClass : "", hrefA : "#page-contact", aClass : "scrollToContact"}]
  },
];

// refactor du nom de la variable
cv = cv[0];

let title = document.createElement("h1");
title.setAttribute("class", "align font-big mainTitle");
title.textContent = cv.name + " " + cv.lastName;
let intro = document.querySelector(".intro");
intro.appendChild(title);

let description = document.createElement("h2");
description.setAttribute("class", "align font-small");
description.innerHTML = "<i>"+cv.poste+"</i>";
intro.appendChild(description);

let navBar = cv.navBar;

for (const element of navBar) {
  let navLink = document.createElement("li");
  navLink.setAttribute("class", element.liClass);
  navLink.innerHTML = "<a href="+ element.hrefA+" class=" + element.aClass + ">" + element.name + "</a>"; 
  let mainMenu = document.querySelector(".mainMenu");
  mainMenu.appendChild(navLink);

}