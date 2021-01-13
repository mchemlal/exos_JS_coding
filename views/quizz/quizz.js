let questions = [{
        id: "q1",
        question: "Qui est le president du Canada ?",
        reponse: {
            a: "Justin Trudeau",
            b: "Lara Fabian",
            c: "Celine Dion",
        },
        correctReponse: "Justin Trudeau",
    },
    {
        id: "q2",
        question: "Qui a chanté Dieu m'a donné la foi ?",
        reponse: {
            a: "Ophelie Winter",
            b: "Diams",
            c: "L'Iman Bajrafil",
        },
        correctReponse: "Ophelie Winter",
    },
    {
        id: "q3",
        question: "Quelle est la distance moyenne entre le soleil et la terre ?",
        reponse: {
            a: "150 000 000 km",
            b: "80 000 000 km",
            c: "10 000 000 km",
        },
        correctReponse: "150 000 000 km",
    },
    {
        id: "q4",
        question: "Quel est le PO de la semaine JS ?",
        reponse: {
            a: "Valery",
            b: "Tan",
            c: "Benoit Mariage",
        },
        correctReponse: "Tan",
    },
    {
        id: "q5",
        question: "Quel est le nom de la branche de Samia sur GitHub ?",
        reponse: {
            a: "Twerk",
            b: "Samia",
            c: "Tan le PO",
        },
        correctReponse: "Twerk",
    },
];

for (const i of questions) {
    let { id, question, reponse } = i; // destructuring SUPER important
    generateDiv(id, "quizz");
    generateLabel("choix", id, question);
    let { a, b, c } = reponse; // destructuring
    generateDiv(id + "-1", id);
    generateRadio("choix-" + id, id + "-1", a);
    generateLabel("choix-" + id, id + "-1", a);
    generateRadio("choix-" + id, id + "-1", b);
    generateLabel("choix-" + id, id + "-1", b);
    generateRadio("choix-" + id, id + "-1", c);
    generateLabel("choix-" + id, id + "-1", c);
}

let bouttonValider = document.createElement("button");
bouttonValider.setAttribute("type", "submit");
bouttonValider.setAttribute("onclick", "showResult(event)");
bouttonValider.textContent = "VERIFIER";
let getForm = document.querySelector("form");
getForm.appendChild(bouttonValider);

function generateRadio(name, idParent, value) {
    let bouttonRadio = document.createElement("input");
    bouttonRadio.setAttribute("type", "radio");
    bouttonRadio.setAttribute("name", name);
    bouttonRadio.setAttribute("class", name);
    bouttonRadio.setAttribute("value", value);
    let getDiv = document.getElementById(idParent);
    getDiv.appendChild(bouttonRadio);
}

function generateLabel(nameFor, idParent, content) {
    let label = document.createElement("label");
    label.setAttribute("for", nameFor);
    label.textContent = content;
    let getDiv = document.getElementById(idParent);
    getDiv.appendChild(label);
}

function generateDiv(idDivQuestion, idParent) {
    let div = document.createElement("div");
    div.setAttribute("id", idDivQuestion);
    let getDiv = document.getElementById(idParent);
    getDiv.appendChild(div);
}

// traitement du formulaire
function showResult(event) {
    event.preventDefault();
    let resultats = document.getElementById("resultats");
    resultats.textContent = "";
    // récupération des div contenant les questions
    const questionsDiv = document.querySelectorAll("#quizz> div");
    // initialisation du tableau qui recueillera les réponses
    let goodAnswer = 0;
    let index = 0;
    // on va boucler sur les questions
    for (const question of questionsDiv) {
        // destructuring
        let { id, correctReponse } = questions[index];
        const choixFiltre = document.querySelectorAll(`.choix-${id}`);
        //Parcours la liste des choix pour selectionner l'élément choisi
        choixFiltre.forEach(element => {
            if (element.checked) {
                // on sélectionne le label
                let questionLabel = element.parentNode.parentNode.querySelector(
                    "label"
                );
                let verifReponse = false;
                // on push directement l'état des réponses
                if (element.value === correctReponse) {
                    questionLabel.setAttribute("class", "bonneReponse");
                    goodAnswer++;
                } else {
                    questionLabel.setAttribute("class", "mauvaiseReponse");
                }
            }
        });
        index++;
    }
    goodAnswer = `Vous avez ${goodAnswer} bonnes réponses`;

    resultats.textContent = goodAnswer;
}