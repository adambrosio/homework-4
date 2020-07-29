// Variables for buttons and question containers
var startBtn = document.querySelector(".start-btn");
// var nextBtn = document.getElementById("next-btn");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("questions");
var answerBtn = document.getElementById("answer");
var potentionalAns = document.getElementById("potential-answers");
var timer = document.getElementById("timer");
var time = 60;
var score = 0;
var realTimeIndex = 0;

// Questions and answers variable set to array of objects containing questions
const questions = [
    {
        title: "An array is enclosed in: ",
        choices: [
            "curly braces", "quotes", "square brackets", "parentheses"
        ],
        answer: "square brackets"
    },
    {
        title: "The less than/or equal to operator is: ",
        choices: ["<=", ">>", "+=", ">="],
        answer: "<="
    },
    {
        title: `Which of the following is a programming "language"?`,
        choices: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        answer: "JavaScript"
    }
];

// Click event listeners for buttons. CURRENTLY BLOCKING CONSOLE LOG WHILST UNCOMMENTED.
startBtn.addEventListener("click", startGame);
// nextBtn.addEventListener("click", nextQuestion);



// Should start game and time be one function?
function startGame() {
    startBtn.setAttribute("class", "hide");
    questionEl.removeAttribute("class");
    getQuestion();
}

function getQuestion() {
    let currentQuest = questions[realTimeIndex];
    let questionTitle = document.getElementById("title-of-question")
    potentionalAns.innerHTML = "";
    questionTitle.textContent = currentQuest.title;
    currentQuest.choices.forEach(function (choice) {
        var answerEl = document.createElement("button");
        answerEl.setAttribute("class", "choice");
        answerEl.setAttribute("value", choice);
        answerEl.textContent = choice;
        answerEl.onclick = nextQuestion;
        potentionalAns.appendChild(answerEl);
    })
}

// console.log questions declaration with questions and answers
console.log(questions);

function nextQuestion() {
    if (this.value === questions[realTimeIndex].answer) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}

function startTimer() {

}




// Hide start button





// function showQuestion() {
// }

