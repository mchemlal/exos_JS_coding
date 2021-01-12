let questions = [{
    quetsion1: [{
            question: "qui le présedent de France ?"
        },
        { suggestion1: "Emmanuel Macron" },
        { suggestion2: "Boutlefica" },
        {
            suggestion3: "Omar Bongo"

        },
    ],
    question2: [{
            question: "qui le présedent de France ?"
        },
        { suggestion1: "Emmanuel Macron" },
        { suggestion2: "Boutlefica" },
        {
            suggestion3: "Omar Bongo"

        },
    ],
    question3: [{
            question: "qui le présedent de France ?"
        },
        { suggestion1: "Emmanuel Macron" },
        { suggestion2: "Boutlefica" },
        {
            suggestion3: "Omar Bongo"

        },
    ],
    question4: [{
            question: "qui le présedent de France ?"
        },
        { suggestion1: "Emmanuel Macron" },
        { suggestion2: "Boutlefica" },
        {
            suggestion3: "Omar Bongo"
        },
    ],
    question5: [{
            question: "qui le présedent de France ?"
        },
        { suggestion1: "Emmanuel Macron" },
        { suggestion2: "Boutlefica" },
        {
            suggestion3: "Omar Bongo"
        },
    ],
    question6: [{
            question: "qui le présedent de France ?"
        },
        { suggestion1: "Emmanuel Macron" },
        { suggestion2: "Boutlefica" },
        {
            suggestion3: "Omar Bongo"

        },
    ],
    question7: [{
            question: "qui le présedent de France ?"
        },
        { suggestion1: "Emmanuel Macron" },
        { suggestion2: "Boutlefica" },
        {
            suggestion3: "Omar Bongo"
        },
    ],
}, ];

questions = questions[0];

let question7 = questions.question7;
for (element of question7) {
    let questionNumero7 = document.createElement("div");
    //let suggestion1 = document.createElement("input");
    questionNumero7.setAttribute("for", "question0-7");
    // suggestion1.setAttribute()
    questionNumero7.innerHTML = "<label>" + element.question + "</label>";
    let getDiv7 = document.querySelector("body");
    getDiv7.appendChild(questionNumero7);
    for (value of element) {
        let suggestion
    }
}



console.log(questions);