document.addEventListener("DOMContentLoaded", function () {
    let startBtn = document.getElementById("name");
    if (startBtn) {
        startBtn.addEventListener(
            "click",
            function () {
                let name = prompt("Enter Username pls: ");
                document.getElementById("outPut").innerText = `Welcome! ${name} to Random Math Game`;
                if (name === "" || name === null) {
                    alert("Please enter a username to start game");
                    name = prompt("Enter Username pls: ");
                    document.getElementById("outPut").innerText = `Welcome! ${name} to Random Math Game`;
                }

                let newBtn = document.createElement("A");
                newBtn.className = "btn btn-primary";
                newBtn.setAttribute("href", "index.html");
                newBtn.setAttribute("style", "href: index.html; display: block; margin: 0 auto; color: white; width: 10%");
                newBtn.innerHTML = "Press Play";
                document.body.appendChild(newBtn);

                if (newBtn) {
                    newBtn.addEventListener("click", startTimer, false);
                }
            },

            false
        );
    }
    let state = document.getElementById("hide");
    if (state) {
        addEventListener(
            "click",
            function () {
                document.getElementById("name").style.display = "block";
                state.style.display = "none";
            },
            false
        );
    }
});

function timer(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

const TIME_LIMIT = 60;

let timeUsed = 0;
let remainingTime = TIME_LIMIT;

//resetting countdown
function timesUp() {
    clearInterval(timeInterval);
}

//countdown

let timeInterval = null;

function startTimer() {
    timeInterval = setInterval(() => {
        timeUsed = timeUsed + 1;
        remainingTime = TIME_LIMIT - timeUsed;

        let display = document.querySelector("#gameTime");
        if (display) {
            display.innerText = "Duration: " + timer(remainingTime);
        }
        if (remainingTime === 30) {
            alert("You have " + remainingTime + " seconds left, click OK to continue");
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
let res;
let result;
let score = 0;
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
    res = `${numA}` + `${numB}`;
    alert(res);
    result = window.prompt(`${numA}` + "+" + `${numB}` + " = ", "");
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
    res = `${numA}` - `${numB}`;

    result = window.prompt(`${numA}` + "-" + `${numB}` + " = ", 0);
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
    res = `${numA}` / `${numB}`;
    res = Math.round(res);
    window.alert("Please round your answer off:\n" + ".5 or higher rounds one number up\n" + ".4 or lower rounds one number down");
    result = window.prompt(numA + "/" + numB + " = ", 0);
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
    res = `${numA * numB}`;
    result = window.prompt(numA + "*" + numB + " = ", 0);

    answer();
}

function answer() {
    if (result == res) {
        correct++;
        msg = "Congrats, your answer is correct";
    } else {
        wrong++;
        remainingTime;
        msg = "sorry " + result + " is incorrect.\n\n" + "The correct answer was " + res + ".";
    }
    score = "" + (correct / (correct + wrong)) * 100;
    score = score.substring(0, 4) + "%";
    alert(msg + "\n\nYOUR SCORE:  " + score + "\n" + correct + " correct\n" + wrong + " incorrect");
}

// function timeUpadte() {
//     let mathBtn = document.querySelectorAll(".artMetic");
//     mathBtn.forEach((btn) => {
//         btn.addEventListener("click", timer);
//     });
// }

/**
 * if the timer ends alert or display result or use the checkbtn to check scores
 */
