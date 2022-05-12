
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



    
let questions = [

    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },


    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },


    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },


    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },

]




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


// if( user doesnt select any of these answer from validateAnswers ){
//      console.log("Wrong ")
// }
//     else 
//     {
//         console.log("Correct")
//     }







// Targeting the Start Quiz button 
let submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", startBtnSubmit);


let startSection = document.querySelector(".startSection")
// function to Start Quiz & Start Timer at the same time 
function startBtnSubmit() {
    startSection.classList.add("hide")  //Hide the Coding Quiz Challenge Section 
    container.classList.remove("hide")  // Show questions & Answers 
    timerInterval = setInterval(updateCountdown, 1000);

        questionContainer.innerHTML= questions[currentQuestion].question
        a_text.innerHTML = questions[currentQuestion].a   // innerHTML = Replacing whats in the HTML with the javascript values.
        b_text.innerHTML = questions[currentQuestion].b
        c_text.innerHTML = questions[currentQuestion].c
        d_text.innerHTML = questions[currentQuestion].d
currentQuestion++
}

//Targetting the Next Button - once user clicks next button then another questions shows
let nextBtn = document.querySelector ("#nextBtn");
nextBtn.addEventListener("click", function(){
    // innerHTML = Replacing whats in the HTML with the javascript values.
    // currentQuestion++ iterarting over the array to go to the next question
    // We are saying update currentQuestion with the corresponding innerHTML value 
   
        questionContainer.innerHTML= questions[currentQuestion].question
        a_text.innerHTML = questions[currentQuestion].a
        b_text.innerHTML = questions[currentQuestion].b
        c_text.innerHTML = questions[currentQuestion].c
        d_text.innerHTML = questions[currentQuestion].d
currentQuestion++

});


    

function validateAnswers (){
    if ( questions[0].correct === "d" )
    console.log(" Correct!")

    for (let i = 0; i < questions.length; i++) {
        const element = questions[i].correct;
        
       console.log (element)
            if (answerels.value == correct) {
            console.log("That's correct!");
            currentscore++;
        } else {
            console.log(`Sorry, the correct answer is ${questionsData[currentQuestion-1].answers[correctAnswer]}.`);
        }

    
        }
            

    }














//   correctAnswer = (questionsData[currentQuestion].correct)
//         if ( correctAnswer){
//             console.log(" Correct")





// if ( user answers all questions || timer runs out )
//     window.alert(" Game Over ");   - Once User answers all questions or timer runs out


