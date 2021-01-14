// utilisation du mode strict en javascript
"use strict";

let cv;

/**
 * this function will make the call to upload the json
 */
const request = async () => {
  const response = await fetch("./data.json");

  // cv = await response.json();
  // return cv;

  // alternative
  return await response.json();
};

// callback hell EX: appli Météo
//function meteo(arg) => {
// /++/ + tous les if elses de gestion d'erreurs
// ... code .. //
// .. récupération de l'IP
//(IP) => {
// récuperer la ville
// (ville) => {
// code récuperer les infos météos
//    (infos) => {
// code afficher ma page
//        return météo
//      }
//    }
//  }
//}

request().then(cvs => {
  cv = cvs.data[0];

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

  // maintenabilité
  for (const element of navBar) {
    let navLink = document.createElement("li");
    navLink.setAttribute("class", element.liClass);
    navLink.innerHTML =
      "<a href=" +
      element.hrefA +
      " class=" +
      element.aClass +
      ">" +
      element.name +
      "</a>";
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
    article.innerHTML =
      "<h2>" + element.title + "</h2> <p>" + element.texte + "</p>";
    //ajout du contenu de h2 et de p

    let section = document.getElementById("features");
    //On rajoute l'article dans la session "features"
    section.appendChild(article);
  }

  let about = cv.about;

  /**
   * creation contenu <p> via une boucle qui ajoute chaque p à chaque itération
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
}); // fin du .then
