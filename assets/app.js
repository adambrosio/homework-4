// Variables for buttons and question containers
var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("questions");
var answerBtn = document.getElementById("answer");
var potentionalAns = document.getElementById("potential");
var realTimeQuestionIndex = 0;

// Click event listeners for buttons
startBtn.addEventListener("click", startGame);
// startBtn.addEventListener("click", startTime);
nextBtn.addEventListener("click", nextQuestion);

// Questions and answers variable set to array of objects containing questions
const questions = [
    {
        title: "An array is enclosed in: ",
        // choices: [
        //     "curly brackets", "quotes", "square brackets", "parentheses"
        // ],
        answer: "square brackets"
    },
    {
        title: "The less than/or equal operator is: ",
        // choices: ["<=", ">>", "+=", ">="],
        answer: "<="
    },
    {
        title: `Which of the following is a programming "language"?`,
        answer: "Javascript"
    }
];

// Should start game and time be one function?
function startGame(event) {
    event.preventDefault();
}

function getQuestion() {
    let currentQuest = questions[realTimeQuestionIndex]; // also timer
    let questionTitle = document.getElementById("title-of-question")
    potentionalAns.innerHTML = "";
    questionTitle.textContent = currentQuest;
    currentQuest.answer.forEach(function (answer, i) {
        var answerEl = document.createElement("button");
        answerEl.setAttribute("class", "answer");
        answerEl.setAttribute("value", "answer");
        answerEl.textContent = i + 1 + answer;
        potentionalAns.appendChild(answerEl);
    })
    
}
// console.log questions declaration with questions and answers
console.log(questions);

function nextQuestion() {

}





// Hide start button





// function showQuestion() {
// }

