// utilisation du mode strict en javascript
"use strict";

// déclaration de la variable
let cv = [{
    name: "Pariset",
    lastName: "Yoann",
    poste: "junior full-stack developer",
    navBar: [{ name: "Home", liClass: "active", hrefA: "#", aClass: "" },
        { name: "About", liClass: "", hrefA: "#page-about", aClass: "scrollToAbout" },
        { name: "Skills", liClass: "", hrefA: "#page-skills", aClass: "scrollToSkills" },
        { name: "Resume", liClass: "", hrefA: "#page-resume", aClass: "scrollToResume" },
        { name: "Experience", liClass: "", hrefA: "#page-experience", aClass: "scrollToExperience" },
        { name: "Portfolio", liClass: "", hrefA: "#page-portoflio", aClass: "scrollToPortoflio" },
        { name: "Contact me", liClass: "", hrefA: "#page-contact", aClass: "scrollToContact" }
    ],
    feature: [{ title: "Values", texte: "I consider that the foundation of a good developer is a constant desire to learn and follow new trends." },
        { title: "Goals", texte: " My goal is simple: to become a monster in web development and especially in the use of the Vue.js framework." },
        { title: "Hobbies", texte: " I love music, travelling and video-games. I believe that a  multidisciplinary artistic vision has a positive impact on my work." }
    ],
    about: [{ para: " My name is Yoann, I am a 22 years old junior web developer and I am into back-end development. However, I also have an interest indeveloping front-end applications. <br />" }, { para: " My goal is to combine design and technology, in order to create attractive websites as well as web applications." }, { para: "You will find on this page my resume in pdf as well as projects carried out during my studies or during my free time." }],

}, ];

// refactor du nom de la variable
cv = cv[0];

let title = document.createElement("h1");
title.setAttribute("class", "align font-big mainTitle");
title.textContent = cv.name + " " + cv.lastName;
let intro = document.querySelector(".intro");
intro.appendChild(title);

let description = document.createElement("h2");
description.setAttribute("class", "align font-small");
description.innerHTML = "<i>" + cv.poste + "</i>";
intro.appendChild(description);

let navBar = cv.navBar;

for (const element of navBar) {
    let navLink = document.createElement("li");
    navLink.setAttribute("class", element.liClass);
    navLink.innerHTML = "<a href=" + element.hrefA + " class=" + element.aClass + ">" + element.name + "</a>";
    let mainMenu = document.querySelector(".mainMenu");
    mainMenu.appendChild(navLink);

}
let feature = cv.feature;
for (const element of feature) {
    //creation element article
    let article = document.createElement("article");
    // ajout des attributs à la balise article
    article.setAttribute("class", "feat");
    //creation de h2 et p
    article.innerHTML = "<h2>" + element.title + "</h2> <p>" + element.texte + "</p>"
        //ajout du contenu de h2 et de p
    let section = document.getElementById("features");
    //On rejoute l'article dans la session "features"
    section.appendChild(article);
}


let about = cv.about;


/**
 * creation contenu <p> via une bloucle qui ajoute chaque p à chaque itération
 */
for (const element of about) {
    //création de la balise p
    let paragraphe = document.createElement("p");
    //intégration du contenu dans paragraphe
    paragraphe.innerHTML = element.para;
    //selection de balise parente dans lequel le p va etre integré
    let getSection = document.querySelector(".info");
    getSection.appendChild(paragraphe); // element parent
}

