let questions = [{
        question: "What is 10/2?",
        reponse: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctReponse: 'b'
    },
    {
        question: "What is 30/3?",
        reponse: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctReponse: 'c'

    }
];

generateRadio("choix", "quizz");



// affichage du questionnaire gloabal dans une div
// <div>
//      <label type="radio" name="question1 >question 1</label>
//<input type="radio" name="choix">choix a</input>
//<input type="radio"name="choix">choix b</input>
//<input type="radio" name="choix">choix c</input>

//<button>


//</div>


// questions = questions[0];

// let question7 = questions.question7;
// for (element of question7) {
//     let questionNumero7 = document.createElement("div");
//     //let suggestion1 = document.createElement("input");
//     questionNumero7.setAttribute("for", "question0-7");
//     // suggestion1.setAttribute()
//     questionNumero7.innerHTML = "<label>" + element.question + "</label>";
//     let getDiv7 = document.querySelector("body");
//     getDiv7.appendChild(questionNumero7);
// }

// for (element of questions) {
//     let question_div = document.createElement("div");
//     question_div.innerHTML = "<label>" + element.question + "</label><br/>";
//     let getDiv = document.querySelector("body");
//     getDiv.appendChild(question_div);
//     for (value of)


// }

//  function genererQuizz(conteneurQuestions, conteneurReponses, buttonValider, conteneurResultats){

//         function montrerQuestions(conteneurQuestions, conteneurReponses){

//             let entreUser = [];
//             let reponseUser; 

//             for(let i = 0; i<conteneurQuestions.length; i++){
//                 reponseUser = []; // preparation espace pour stockage reponses
//                 for(let valeurReponse)
//             }



//         }




//  }

function generateRadio(name, idParent) {
    let bouttonRadio = document.createElement("input");
    bouttonRadio.setAttribute("type", "radio");
    bouttonRadio.setAttribute("name", name);
    let getDiv = document.getElementById(idParent);
    console.log(getDiv);
    getDiv.appendChild(bouttonRadio);

}




console.log(questions);