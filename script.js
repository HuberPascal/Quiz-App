
let questions = [
    {
         "question": "Wer hat HTML erfunden?",
         "answer_1": "Robbie Williams",
         "answer_2": "Lady Gaga",
         "answer_3": "Tim Berners-Lee",
         "answer_4": "Justin Bieber",
         "right_answer": 3
    },
    {
        "question": "Was bedeutet das HTML Tag <a></a>?",
         "answer_1": "Text Fett",
         "answer_2": "Container",
         "answer_3": "Ein Link",
         "answer_4": "Kursiv",
         "right_answer": 3
    }
]


let currentQuestion = 0;

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    console.log('selected answer is ', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectionQuestionNumber is ', selectedQuestionNumber);
    console.log('current question is ', question['right_answer']);

    let idOfRigthAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Anwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRigthAnswer).parentNode.classList.add('bg-success');
    }
}