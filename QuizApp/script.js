const questions = [
    {
        question: "Javascript supports-",
        options: [
            { id: 1, option: "Functions" },
            { id: 2, option: "XHTML" },
            { id: 3, option: "CSS" },
            { id: 4, option: "HTML" }
        ],
        correct: 1
    },
    {
        question: "Which language is used for styling web pages?",
        options: [
            { id: 1, option: "HTML" },
            { id: 2, option: "JQuery" },
            { id: 3, option: "CSS" },
            { id: 4, option: "XML" }
        ],
        correct: 3
    },
    {
        question: "Which is not a Javascript framework?",
        options: [
            { id: 1, option: "Python Script" },
            { id: 2, option: "JQuery" },
            { id: 3, option: "Django" },
            { id: 4, option: "NodeJS" }
        ],
        correct: 1
    },
    {
        question: "Which is used to connect to Database?",
        options: [
            { id: 1, option: "PHP" },
            { id: 2, option: "HTML" },
            { id: 3, option: "JS" },
            { id: 4, option: "All" }
        ],
        correct: 1
    },
    {
        question: "Javascript is a  ",
        options: [
            { id: 1, option: "Language" },
            { id: 2, option: "ProgrammingLanguage" },
            { id: 3, option: "Development" },
            { id: 4, option: "All" }
        ],
        correct: 2
    }

]

const quizApp = document.querySelector('#quiz-app');

const optionBtns = Array.from(document.getElementsByClassName('option'));

const q = document.querySelector('#question-block h2');

const progress = document.querySelector('#quiz-app h3');

const scorePanel = document.querySelector('#score-panel');

const score = document.querySelector('#score')

const retakeBtn = document.querySelector('#retakeBtn');


let currentQuestionIndex = 0;

let response = new Array(questions.length);

function clickHandler(idx) {
    response[currentQuestionIndex] = {
        respId: idx
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }

}

function showResult() {
    let count = 0;
    console.log(response);

    questions.forEach((ques, index) => {
        if (ques.correct === response[index].respId) {
            count++;
        }
    })

    score.innerText = `Your Score : ${count}, Percentage : ${(count / questions.length) * 100}%`;

    quizApp.className = "hide-display"

    scorePanel.className = "show-display";


}

function loadQuestion() {
    let questionSet = questions[currentQuestionIndex];
    q.innerText = questionSet.question;
    optionBtns.forEach((btn, index) => {
        btn.innerText = questionSet.options[index].option;
    })

    progress.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

optionBtns.forEach((btn, index) => {
    let idx = index + 1;

    btn.addEventListener('click', () => {
        clickHandler(idx);
    })
})

function reloadQuiz() {
    scorePanel.className = "hide-display";
    quizApp.className = "show-display";
    currentQuestionIndex = 0;
    response = new Array(questions.length);
    loadQuestion();
}

retakeBtn.addEventListener('click', reloadQuiz)


loadQuestion();

