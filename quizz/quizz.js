let questions = [
  {
    id: "q1",
    question: "What is 10/2?",
    reponse: {
      a: "3",
      b: "5",
      c: "115",
    },
    correctReponse: "5",
  },
  {
    id: "q2",
    question: "What is 30/3?",
    reponse: {
      a: "3",
      b: "5",
      c: "10",
    },
    correctReponse: "10",
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

let bouttonValider = document.createElement("button")
bouttonValider.setAttribute("type", "submit");
bouttonValider.setAttribute("onclick", "showResult(event)")
bouttonValider.textContent = "valider";
let getForm = document.querySelector("form");
getForm.appendChild(bouttonValider);

function generateRadio(name, idParent, value) {
  let bouttonRadio = document.createElement("input");
  bouttonRadio.setAttribute("type", "radio");
  bouttonRadio.setAttribute("name", name);
  bouttonRadio.setAttribute("class", name)
  bouttonRadio.setAttribute("value", value)
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

function showResult(event) {
  event.preventDefault();
  console.log(document.querySelectorAll(".choix-q1"));


  
}
