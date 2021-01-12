let questions = [
  {
    id: "q1",
    question: "What is 10/2?",
    reponse: {
      a: "3",
      b: "5",
      c: "115",
    },
    correctReponse: "b",
  },
  {
    id: "q2",
    question: "What is 30/3?",
    reponse: {
      a: "3",
      b: "5",
      c: "10",
    },
    correctReponse: "c",
  },
];



for (const i of questions) {
  let { id, question, reponse } = i; // destructuring SUPER important
  generateDiv(id, "quizz");
  generateLabel("choix", id, question);
  let { a, b, c } = reponse; // destructuring
  generateDiv(id + "-1", id);
  generateRadio("choix-" + id, id + "-1");
  generateLabel("choix-" + id, id + "-1", a);
  generateRadio("choix-" + id, id + "-1");
  generateLabel("choix-" + id, id + "-1", b);
  generateRadio("choix-" + id, id + "-1");
  generateLabel("choix-" + id, id + "-1", c);
}

function generateRadio(name, idParent) {
  let bouttonRadio = document.createElement("input");
  bouttonRadio.setAttribute("type", "radio");
  bouttonRadio.setAttribute("name", name);
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
