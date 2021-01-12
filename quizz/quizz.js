let questions = [{
        question: "What is 10/2?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 30/3?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'



    }
];

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

for (element of questions) {
    let question_div = document.createElement("div");
    question_div.innerHTML = "<label>" + element.question + "</label><br/>";
    let getDiv = document.querySelector("body");
    getDiv.appendChild(question_div);


}




console.log(questions);