
let correctPoints = 10;  // Number of points user gets for ever correct answer
let container = document.querySelector(".container")
let questionContainer = document.querySelector(".question")
let answerEls = document.querySelectorAll(".answer")
let currentQuestion = 0;
let userScore = 0;


const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const answer = document.getElementById('answer')



function checkAnswer(e) {   // (e) = event
    //Validating users answers & subtracting 10 seconds if they get it wrong

    if (e.target.textContent === questions[currentQuestion - 1].correct) {
        console.log("Correct");
        answer.textContent = ("Correct")
        userScore++   // if user gets answer correct add 1 to userScore
        startBtnSubmit()
    }
    else {
        console.log("Wrongggggg");
        answer.textContent = ("Wrong")
        time = time - 10;  // subtracting 10 seconds from timer if user gets question wrong.
        startBtnSubmit() // skips to the next question if user gets question wrong
    }

}

// Allows user to click a button and get a response 
a_text.addEventListener("click", checkAnswer)
b_text.addEventListener("click", checkAnswer)
c_text.addEventListener("click", checkAnswer)
d_text.addEventListener("click", checkAnswer)



// Array of all the questions & answers 
let questions = [

    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "javascript",
    },


    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "Cascading Style Sheets",
    },


    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "Hypertext Markup Language",
    },


    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "1995",
    },

]



// Variables for countdown timer
let startingMinutes = 2;
let time = startingMinutes * 60;
let timerInterval;


// Timer Properties 
let countDownT = document.querySelector("#countDownTimer");


function updateCountdown() {
    const mintues = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds
    countDownT.innerHTML = `${mintues}: ${seconds}`;
    time--;

    // Stops timer & doesn't allow timer to run into the negative.
    if (seconds == 00 && mintues == 00) {
        clearInterval(timerInterval)
        answer.textContent = ("Ran Out of time ")  // Displays to the user that the time has ran out.
        answer.innerHTML = quiz.innerHTML = `
        <h2>You answered ${userScore}/${questions.length} questions correctly</h2>
        <button onclick="location.reload()">Submit</button>
        `
    }

}


// // End Quiz submit itnial form
// let endQuiz = document.querySelector("#endQuizForm")
// let endQuizBtn = document.querySelector("#btnSub")


// Targeting the Start Quiz button 
let submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", startBtnSubmit);




let startSection = document.querySelector(".startSection")
// function to Start Quiz & Start Timer at the same time 
function startBtnSubmit() {
    startSection.classList.add("hide")  //Hide the Coding Quiz Challenge Section 
    container.classList.remove("hide")  // Show questions & Answers 
    timerInterval = setInterval(updateCountdown, 1000);

    
// validate if user reached end of quiz
    if (currentQuestion >= questions.length) {
        console.log('end quiz')
        // end quiz function
       
        answer.innerHTML = quiz.innerHTML = `
            <h2>You answered ${userScore}/${questions.length} questions correctly</h2>
            <button onclick="location.reload()">Submit</button>
            `
            endQuiz.classList.remove("hide")  // showing the save inital form

        return; 
     }

    questionContainer.textContent = questions[currentQuestion].question
    a_text.textContent = questions[currentQuestion].a   // textContent = Replacing whats in the HTML with the javascript values.
    b_text.textContent = questions[currentQuestion].b
    c_text.textContent = questions[currentQuestion].c
    d_text.textContent = questions[currentQuestion].d


    currentQuestion++
}



function nextQuestion() {


    // checks to see if user answered all the questions
    // if user answered all question the else statment says output user score & reload quiz
    if (currentQuestion >= questions.length) {
        console.log('end quiz')
        // end quiz function
        answer.innerHTML = quiz.innerHTML = `
            <h2>You answered ${userScore}/${questions.length} questions correctly</h2>
            <button onclick="location.reload()"> Submit </button>
            `
        return; 
     }

  

    answer.textContent = " "   // resetting the correct or incorrect response once the next questio displays
    questionContainer.textContent = questions[currentQuestion].question  // updates question when NEXT button is clicked
    a_text.textContent = questions[currentQuestion].a
    b_text.textContent = questions[currentQuestion].b
    c_text.textContent = questions[currentQuestion].c
    d_text.textContent = questions[currentQuestion].d



    currentQuestion++

}


//Targetting the Next Button - once user clicks next button then another questions shows
let nextBtn = document.querySelector("#nextBtn");
nextBtn.addEventListener("click", function () {
    // innerHTML = Replacing whats in the HTML with the javascript values.
    // currentQuestion++ iterarting over the array to go to the next question
    // We are saying update currentQuestion with the corresponding innerHTML value 

    nextQuestion()



});












