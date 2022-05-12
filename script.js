
    //let finalScoreArr = [];  // Array to store all of the correct answers from the user
    let correctPoints = 10;  // Number of points user gets for ever correct answer
    let container = document.querySelector(".container")
    let questionContainer = document.querySelector(".question")
    let answerEls = document.querySelectorAll(".answer")
    let currentQuestion = 0;
    let userScore =0;


    const a_text = document.getElementById('a_text')
    const b_text = document.getElementById('b_text')
    const c_text = document.getElementById('c_text')
    const d_text = document.getElementById('d_text')
    const answer = document.getElementById('answer')

 
  function checkAnswer(e){
    //IF this is a correcrt question
       // targeting the button with this function. 
       
      

        if(e.target.textContent === questions[currentQuestion-1].correct) {
            console.log( "Correct");
            answer.textContent = ("Correct")
            quizOver.textContent = (" Reload ")
        }
        else 
          {
            console.log( "Wrongggggg");
            answer.textContent = ("Wrong")
                
            }
           
}


    a_text.addEventListener("click",checkAnswer)
    b_text.addEventListener("click",checkAnswer)
    c_text.addEventListener("click",checkAnswer)
    d_text.addEventListener("click",checkAnswer)


    
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
questions.forEach(currentQuestion => {
    console.log("fmdm")
});
    


// Variables for countdown timer
let startingMinutes = .2;
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

    if (seconds == 00 ) {
        clearInterval(timerInterval)
    }

}



// Targeting the Start Quiz button 
let submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", startBtnSubmit);


let startSection = document.querySelector(".startSection")
// function to Start Quiz & Start Timer at the same time 
function startBtnSubmit() {
    startSection.classList.add("hide")  //Hide the Coding Quiz Challenge Section 
    container.classList.remove("hide")  // Show questions & Answers 
    timerInterval = setInterval(updateCountdown, 1000);

        questionContainer.textContent= questions[currentQuestion].question
        a_text.textContent = questions[currentQuestion].a   // textContent = Replacing whats in the HTML with the javascript values.
        b_text.textContent = questions[currentQuestion].b
        c_text.textContent = questions[currentQuestion].c
        d_text.textContent = questions[currentQuestion].d
currentQuestion++
}

//Targetting the Next Button - once user clicks next button then another questions shows
let nextBtn = document.querySelector ("#nextBtn");
nextBtn.addEventListener("click", function(){
    // innerHTML = Replacing whats in the HTML with the javascript values.
    // currentQuestion++ iterarting over the array to go to the next question
    // We are saying update currentQuestion with the corresponding innerHTML value 

        answer.textContent = " "   // resetting the correct or incorrect response once the next questio displays
        questionContainer.textContent= questions[currentQuestion].question
        a_text.textContent = questions[currentQuestion].a
        b_text.textContent = questions[currentQuestion].b
        c_text.textContent = questions[currentQuestion].c
        d_text.textContent = questions[currentQuestion].d

   
currentQuestion++

});






if(currentQuestion > questions.length) {
       console.log("hellcnc")
    }
    
    





