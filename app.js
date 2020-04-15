function timer(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

const TIME_LIMIT = 120;

let timeUsed = 0;
let remainingTime = TIME_LIMIT;

//resetting countdown
function timesUp() {
    clearInterval(timeInterval);
}

//setting the countdown

let timeInterval = null;

function startTimer() {
    timeInterval = setInterval(() => {
        timeUsed = timeUsed + 1;
        remainingTime = TIME_LIMIT - timeUsed;

        let display = (document.querySelector(".gameTime").innerHTML = "Duration: " + timer(remainingTime));
        if (remainingTime === 60) {
            alert("You have 1mins left, click OK to continue");
            // display.style.color = "red";
        }
        if (remainingTime === 0) {
            alert("Your Time is Up");
            timesUp();
        }
    }, 1000);
}
startTimer();

// function startBtn() {
//     document.querySelector(".signUp").onclick = function () {
//         let user = document.querySelector("#userName").value;
//         let WelcomeNote = document.querySelector("h1");

//         WelcomeNote.innerHTML = `Welcome ${user} and your Game starts now`;
//     };
// }

// how to set countdown time in js when a btn is clicked
//btn clicked when prev or next is clicked bring new question

//result div to display scores

//get the answer user selected
