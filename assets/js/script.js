// Gather HTML elements

var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalscore");
var gameOverDiv = document.getElementById("gameover")
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highScoreContainer = document.getElementById("highscorecontainer");
var highScoreDiv = document.getElementById("highscorepage");
var highScoreInputName = document.getElementById("initials");
var highScoreDisplayName = document.getElementById("highscoreintials");
var endGameBtns = document.getElementById("endgamebtns");
var submitScoreBtn = document.getElementById("submitscore");
var highscoreDisplayScore = document.getElementById("highscores-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");


// Quiz questions
var quizQuestions = [
    
    {
    question: "What does DOM Stand for?",
    choiceA: "Document Over Map",
    choiceB: "Document Object Model",
    choiceC: "Data Object Model",
    choiceD: "Data Observing Map",
    correctAnswer: "b"},
    
    {
    question: "What is bootstrap in programming?",
    choiceA: "Bootstrap is a free open source front-end-framework to develop faster,easier,responsive web pages",
    choiceB: "It is the action of tying your boots",
    choiceC: "It is the action of applying variables and functions",
    choiceD: "It is used combine css, html and javascript",
    correctAnswer: "a"},
    
    {
    question: "What is pseudocode?",
    choiceA: "It is smaller code",
    choiceB: "It is used to create multiple programs at once",
    choiceC: "It is code that can be used for a later purpose",
    choiceD: "Pseudocode is an informal way of programming description that does not require any strict programming language syntax or underlying technology considerations.",
    correctAnswer: "d"},
    
    {
    question: "What does CSS stand for?",
    choiceA: "Code Start Sheet",
    choiceB: "Create Source System",
    choiceC: "Cascading Style Sheet",
    choiceD: "Chill Strong Stand",
    correctAnswer: "c"},

    {
    question: "What is terminal command to publish content to your main branch on Git?",
    choiceA: "Git Push Origin Main",
    choiceB: "Git Add",
    choiceC: "Git Commit",
    choiceD: "MkDir",
    correctAnswer: "a"},

    {
    question: "What does API stand for?",
    choiceA: "Alternative Platform Invitation",
    choiceB: "Appearing Path Integer",
    choiceC: "Application Programming Interface",
    choiceD: "Application Python Interface",
    correctAnswer: "a"},

    {  
    question: "How do you reference an img in HTML in the instance the image does not appear?",
    choiceA: "src",
    choiceB: "input",
    choiceC: "button",
    choiceD: "alt",
    correctAnswer: "d"}

]

//additional variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timeInterval;
var score = 0;
var correct;

// function to start quiz

function generateQuizQuestion(){
    gameOverDiv.style.display = "none";
    
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    }

    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "<p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// function that starts the time, hides the start button and displays first question

function startQuiz(){
    gameOverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timeInterval = setInterval(function(){
        timeLeft--;
        quizTimer.textContent = "Time Left: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timeInterval);
            showScore();
        }
    }, 1000);
  quizBody.style.display = "block";
}

// function for the end page screen that displays score upon completion or time out

function showScore(){
    quizBody.style.display = "none";
    gameOverDiv.style.display = "none";
    clearInterval(timeInterval);
    highScoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + "out of" + quizQuestions.length + " correct!";
}

