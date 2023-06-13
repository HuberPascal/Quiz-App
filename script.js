let questions = [
    {
        question: "Wer hat HTML erfunden?",
        answer_1: "Robbie Williams",
        answer_2: "Lady Gaga",
        answer_3: "Tim Berners-Lee",
        answer_4: "Justin Bieber",
        right_answer: 3,
    },
    {
        question: "Welche der folgenden deutschen Städte liegt am südlichsten?",
        answer_1: "Stuttgart",
        answer_2: "Ulm",
        answer_3: "Würzburg",
        answer_4: "Ingolstadt",
        right_answer: 2,
    },
    {
        question: "Wie heisst Europas längster Fluss?",
        answer_1: "Wolga",
        answer_2: "Donau",
        answer_3: "Dnepr",
        answer_4: "Po",
        right_answer: 1,
    },
    {
        question: "Wie viele Fangarme haben Kalmare?",
        answer_1: "8",
        answer_2: "6",
        answer_3: "4",
        answer_4: "10",
        right_answer: 4,
    },
    {
        question:
            "Welcher britische Sänger diente während seiner Militärzeit im Kosovo?",
        answer_1: "James Blunt",
        answer_2: "Rod Stewart",
        answer_3: "ELton John",
        answer_4: "Paul McCartney",
        right_answer: 1,
    },
    {
        question: "Welcher Browser wird in Deutschland am meisten verwendet?",
        answer_1: "Firefox",
        answer_2: "Edge",
        answer_3: "Chrome",
        answer_4: "Safari",
        right_answer: 3,
    },
    {
        question: "Wie werden älter männliche Berggorillas auch gennant?",
        answer_1: "Blaue Alphas",
        answer_2: "Goldene Senioren",
        answer_3: "Silberrücken",
        answer_4: "Best Agers",
        right_answer: 3,
    },
];

let rightQuestions = 0;
let currentQuestion = 0;
let Audio_Success = new Audio('audio/success.mp3');
let Audio_Fail = new Audio('audio/wrong.mp3');

function init() {
    document.getElementById("allQuestions").innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else { // Show question
        updateProgressBar();
        updateToNextQuestion();
    }
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}

function answer(selection) {
    let question = questions[currentQuestion];
    // console.log("selected answer is ", selection);
    let selectedQuestionNumber = selection.slice(-1);
    // console.log("selectionQuestionNumber is ", selectedQuestionNumber);
    // console.log("current question is ", question["right_answer"]);

    let idOfRigthAnswer = `answer_${question["right_answer"]}`;

    if (rightAnswerSelected(selectedQuestionNumber, question)) { // Richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add("bg-success");
        Audio_Success.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add("bg-danger");
        document.getElementById(idOfRigthAnswer).parentNode.classList.add("bg-success");
        Audio_Fail.play();
    }
        document.getElementById("next-button").disabled = false;
}


function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question["right_answer"]
}


function nextQuestion() {
    currentQuestion++; // z.B von 0 auf 1
    showQuestion();

    document.getElementById("next-button").disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_1").parentNode.classList.remove("bg-success");
    document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_2").parentNode.classList.remove("bg-success");
    document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_3").parentNode.classList.remove("bg-success");
    document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}


function restartGame() {
    document.getElementById("headerImg").src = "img/pencil.jpg";
    document.getElementById("questionBody").style = ""; // questionBody wieder anzeigen
     document.getElementById("endScreen").style = "display: none;"; // Endscreen ausblenden

    rightQuestions = 0;
    currentQuestion = 0;
    init();
} 


function showEndScreen() {
    document.getElementById("endScreen").style = "";
    document.getElementById("questionBody").style = "display: none;";

    document.getElementById("amountOfQuestions").innerHTML = questions.length;
    document.getElementById("amountOfRightQuestions").innerHTML = rightQuestions;
    document.getElementById("headerImg").src = "img/trophy.png";
}


function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("question-number").innerHTML = currentQuestion + 1;
    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
}


function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progressBar').innerHTML = `${percent} %`; 
    document.getElementById('progressBar').style.width = `${percent}%`;
}