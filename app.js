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

let correct = 0;
let wrong = 0;
let numC;
let result;
let score;
let msg;

function randValue(maxValue) {
    let day = new Date();
    let hour = day.getHours();
    let min = day.getMinutes();
    let sec = day.getSeconds();
    let miliSec = day.getTime();

    return (hour * 3600 + min * 60 + sec + miliSec) % maxValue;
}

function random(maxValue) {
    day = new Date();
    let mil = day.getTime();
    return `${mil % maxValue}`;
}

function addition() {
    if (document.gameForm.arithmetic[0].checked) maxValue = 10;
    else {
        if (document.gameForm.arithmetic[1].checked) maxValue = 30;
        else {
            maxValue = 60;
        }
    }
    let numA = randValue(maxValue);
    let numB = random(maxValue);
    numC = numA + numB;
    alert(numC);
    result = prompt(`${numA}` + "+" + `${numB}` + " = ", "");
    answer();
}

function subtract() {
    if (document.gameForm.arithmetic[0].checked) maxValue = 10;
    else {
        if (document.gameForm.arithmetic[1].checked) maxValue = 30;
        else {
            maxValue = 60;
        }
    }
    let numA = randValue(maxValue);
    let numB = random(maxValue);
    numC = `${numA}` - `${numB}`;

    result = prompt(`${numA}` + "-" + `${numB}` + " = ", 0);
    answer();
}

function divide() {
    if (document.gameForm.arithmetic[0].checked) maxValue = 10;
    else {
        if (document.gameForm.arithmetic[1].checked) maxValue = 30;
        else {
            maxValue = 60;
        }
    }
    let numA = randValue(maxValue);
    let numB = random(maxValue);
    numC = `${numA}` / `${numB}`;
    numC = Math.round(numC);
    window.alert("Please round your answer off:\n" + ".5 or higher rounds one number up\n" + ".4 or lower rounds one number down");
    result = prompt(numA + "/" + numB + " = ", 0);
    answer();
}

function multiply() {
    if (document.gameForm.arithmetic[0].checked) maxValue = 10;
    else {
        if (document.gameForm.arithmetic[1].checked) maxValue = 30;
        else {
            maxValue = 60;
        }
    }
    let numA = randValue(maxValue);
    let numB = random(maxValue);
    numC = `${numA * numB}`;
    result = prompt(numA + "*" + numB + " = ", 0);

    answer();
}
function check() {
    if (correct + wrong != 0) {
        score = "" + (correct / (correct + wrong)) * 100;
        score = score.substring(0, 4) + "%";
        alert("YOUR SCORE: " + score + "\n" + correct + " correct\n" + wrong + " incorrect");
    } else alert("You have not completed any exercise yet.");
}

function answer() {
    if (result == numC) {
        correct++;
        msg = "Congrats, your answer is correct";
    } else {
        wrong++;
        msg = "sorry " + result + " is incorrect.\n\n" + "The correct ans was " + numC + ".";
    }
    score = "" + (correct / (correct + wrong)) * 100;
    score = score.substring(0, 4) + "%";
    alert(msg + "\n\nYOUR SCORE:  " + score + "\n" + correct + " correct\n" + wrong + " incorrect");
}

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
