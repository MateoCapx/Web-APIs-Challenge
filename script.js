
let finalScoreArr =[];  // Array to store all of the correct answers from the user
let correctPoints = 10;  // Number of points user gets for ever correct answer

// Variables for countdown timer
let startingMinutes = 2;
let time = startingMinutes * 60 ;


    // Targeting the Start Quiz button 
    let submitBtn = document.querySelector("#submitBtn");
    submitBtn.addEventListener("click", btnSubmit);


    // function to Start Quiz & Start Timer at the same time 
function btnSubmit() {
        console.log (" function worksss !! ")
        
    }


    // Timer Properties 
    let countDownT = document.querySelector ("#countDownTimer");
        setInterval(updateCountdown,1000);
        
function updateCountdown() {
        const mintues = Math.floor(time/60 );
        let seconds = time % 60;
        seconds = seconds <10 ? '0' + seconds : seconds 
        countDownT.innerHTML = `${mintues}: ${seconds}`;
        time--;
      
       if ( seconds === 0 ){
           clearInterval;
       }
 }    
 
 













// if ( user answers all questions || timer runs out )
    // window.alert(" Game Over ");   - Once User answers all questions or timer runs out
