// utilisation du mode strict en javascript
"use strict";

// déclaration de la variable
let cv = [
  {
    name: "Pariset",
    lastName: "Yoann",
    values:
      "I consider that the foundation of a good developer is a constant desire to learn and follow new trends.",
    poste: "junior full-stack developer"  
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